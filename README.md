# Website for CSSconf EU 2017

0. [Local setup](#local-setup)
0. [Content editing](#content-editing)
0. [Deployment](#deployment)

# Local setup

In case you want to run the website locally, please make sure all of the external dependencies are resolved.
We try to keep as few dependencies as possible in order to simply the development process.

## Cloning the repository

Before you can start working on the project, please clone the GitHub repository by running the following:
```bash
git clone git@github.com:cssconf/2017.cssconf.eu.git
```

This will fetch all of the source files from GitHub and will place them in the directory called "2017.cssconf.eu". 
Please navigate to it in order to continue the set up. 

## Dependencies

* Ruby (2.0.0)
* Ruby gems

## Installing dependencies

### Ruby

#### macOS/Linux

You should have Ruby installed by default. To check if you have it, please open the terminal and put the following:
```bash
which ruby
```

It should show something like this:
```bash
➜  ~ which ruby
/usr/bin/ruby
```

The project requires at least Ruby 2.0.0. In case your Ruby is older than 2.0.0, please upgrade it.

#### Windows

Please follow [the official installation guideline](https://www.ruby-lang.org/en/documentation/installation/#rubyinstaller).

### Ruby gems

Once having Ruby installed and working, you have to install `bundler` which is going to take care of all of the dependencies:
```bash
gem install bundler
```

Now, you can install all of the gems by running the following:
```bash
bundle install
```

## Development

Once all of the installation steps are completed, please run the following in the project's main folder:
```bash
jekyll serve
```

This will start the local server and will re-generate the page whenever you make any changes to the files (CSS, JS, Markdown, etc.).
The site is available at <http://localhost:4000>.

## Deployment (publishing a new version of the website)

TBD.
