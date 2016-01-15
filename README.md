## Installation
* Have Ruby with compass gem, NodeJS and NPM with grunt-cli, and wkhtmltopdf
* Run `npm install`

## Editing
`grunt`

## Some notes:
Once you install NPM, do:
`npm config set prefix '~/.npm'`

Then add NPM executables to path in .bash_profile (Mac), or .bashrc (Linux)
`export PATH="$PATH:$HOME/.npm/bin"`

If on Linux and you run grunt and get "/usr/bin/env: node: No such file or directory," run:
`ln -s /usr/bin/nodejs /usr/bin/node`
