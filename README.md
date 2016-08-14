# Website for CSSconf EU 2017

0. [Adding and editing content](#content-editing)
0. [Run locally](#run-locally)
0. [Development](#development)
0. [Deployment](#deployment)

# Content editing

The following instructions apply to adding / editing talks, speakers, and sponsors. For the schedule and navigation bars, see the README in [/_data](_data)

## Adding / editing talks, speakers, and sponsors

- Each content item is represented as a Markdown file with YAML at the top. The data should look something like this:
  ```
  ---
  property: "value"
  other_property:
    - "list"
    - "of"
    - "values"
  ---
  ```

### To add new content through GitHub:

  1. Click into the appropriate directory ([/_speakers](_speakers), [/_talks](_talks), [/_sponsors](_sponsors))
  1. Copy the data from an existing `.md` file
  2. In the parent folder, click `Create new file`
  3. Paste the data into GitHub and edit _OR_ paste it in an [online YAML editor](https://nodeca.github.io/js-yaml/) (helps avoid syntax errors, but you gotta paste it in without the enclosing `---`)
  4. Edit to your heart's content!
     - The filename you choose may determine the content page URL
     - The `blabla_id` property can be the same as the filename
  5. When finished, fill in a commit description and select `Create a new branch for this commit and start a pull request`.
     - (If it's a small change not likely to break anything, you might consider skipping the pull request and just committing directly)
  6. Wait to see if the created pull request passes the build. If it does, click merge and your changes will be live

# Run locally

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

# Development

Once all of the installation steps are completed, please run the following in the project's main folder:
```bash
jekyll serve
```

This will start the local server and will re-generate the page whenever you make any changes to the files (CSS, JS, Markdown, etc.).
The site is available at <http://localhost:4000>.

Web assets (CSS, JS, images, etc) are located in `/assets`. Edit those for now, but they'll be moved to `/_assets` once
we have a build step.

# Deployment (publishing a new version of the website)

Since we're using GitHub Pages, all changes merged into the `gh-pages` branch of
`cssconf/2017.cssconf.eu` are automatically deployed
