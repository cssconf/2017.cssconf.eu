var gulp = require('gulp');
var child = require('child_process');
var postcssImport = require('postcss-import');
var postcss = require('gulp-postcss');
var customProperties = require('postcss-custom-properties');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var mediaMinMax = require('postcss-media-minmax');
var customMedia = require('postcss-custom-media');
var mqpacker = require('css-mqpacker');
var nano = require('cssnano');
var rename = require('gulp-rename');
var gulpUtil = require('gulp-util');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var path = require('path');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


gulp.task('connect', function () {
  connect.server({
    livereload: true,
    root: '_site',
    port: 2017
  });
});

gulp.task('reload', function () {
  // Watch Jekyll output and trigger reload whenever we see a change
  return gulp.watch('_site/**/*', function (e) {
    gulp.src(e.path).pipe(connect.reload());
  });
});

gulp.task('css', function () {
  var processors = [
    postcssImport(),
    customProperties({preserve:true}),
    nested(),
    mediaMinMax(),
    customMedia(),
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker({sort: true}),
    nano()
  ];
  return gulp.src('_assets/css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function () {
  var b = browserify({debug: true, entries: ['_assets/js/main.js']});
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gulpUtil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('images', function () {
  return gulp
    .src([
      '_assets/images/**/*',
      'node_modules/2017-assets/images/**/*'
    ])
    .pipe(gulp.dest('assets/images'))
});

gulp.task('icons', function () {
  return gulp.src('node_modules/2017-assets/icons/*')
    .pipe(gulp.dest('./'))
});

gulp.task('fonts', function () {
  return gulp.src('node_modules/2017-assets/fonts/*')
    .pipe(gulp.dest('assets/fonts'))
});

gulp.task('svg:minify', function () {
  return gulp
    .src([
      '_assets/svg/*.svg'
    ])
    .pipe(svgmin())
    .pipe(gulp.dest('assets/svg'))
});

/**
 * Concatenate SVGs together into an SVG sprite
 * Note that this is an exceptional case where we output into _includes/
 * rather than into assets/
 */
gulp.task('svg:sprite', function () {
  return gulp
    .src([
      '_assets/svg/*.svg',
      'node_modules/2017-assets/svg/**/*.svg'
    ])
    .pipe(svgmin(function (file) {
      // Prefix IDs within each SVG so that they won't conflict
      // when we smash everything together as a sprite
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        js2svg: {
          pretty: true
        },
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename({basename: 'sprite'}))
    .pipe(gulp.dest('_includes/assets'));
});

gulp.task('svg', ['svg:minify', 'svg:sprite']);

gulp.task('watch', function () {
  gulp.watch([
    '_assets/css/**/*.css',
    'node_modules/2017-assets/css/**/*.css'
  ], ['css']);
  gulp.watch('_assets/js/**/*.js', ['js']);
  gulp.watch('_assets/js/**/*.hbs', ['js']);
  gulp.watch([
    '_assets/images/**/*',
    'node_modules/2017-assets/images/**/*'
  ], ['images']);
  gulp.watch([
    '_assets/fonts/**/*',
    'node_modules/2017-assets/fonts/**/*'
  ], ['fonts']);
  gulp.watch([
    '_assets/svg/*.svg',
    'node_modules/2017-assets/svg/**/*.svg'
  ], ['svg:sprite']);
});

gulp.task('jekyll', function () {
  var jekyll = child.spawn('jekyll', [
    'build',
    '--watch',
    '--incremental',
  ]);
  jekyll.stdout.on('data', logger('Jekyll'));
  jekyll.stderr.on('data', logger('Jekyll'));
});

// Generic process-stdout -> gulp-log
function logger (prefix) {
  return function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function (msg) {
        gulpUtil.log(prefix + ': ' + msg);
      });
  }
}

gulp.task('default', ['build', 'connect', 'reload', 'jekyll', 'watch']);
gulp.task('build', ['css', 'js', 'icons', 'images', 'fonts', 'svg']);
