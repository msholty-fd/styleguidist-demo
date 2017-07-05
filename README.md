# Styleguidist Demo

## Introduction

## Requirements
* [Node v7.x.x](https://nodejs.org/en/download/package-manager/#osx)
* [Yarn](https://yarnpkg.com/en/docs/install#mac-tab)

## Installation

```bash
yarn install
```

## Build and serve the code locally
```bash
yarn start
```

## Opening the code in a browser

This page utilizes a scout architecture. To see other deployed versions, you can type `styleguide=${HASH}` in the styleguide app's url. This will cause the scout to pull the styleguide code from the `styleguide-dev` bucket as opposed to the `styleguide-prod` bucket.

If you type `styleguide=dev`, it will pull your locally served version. See below on how to serve your own styleguide code locally.

## Development

Run
`yarn start`

Then go to `https://localhost:6060`

## Testing

You can do most of your development with the styleguide locally. Once done, you can deploy it to a dev bucket and share the scout hash with a collaborator to get feedback on the new features you've written.

TODO: Using `styleguide=dev` on an app that imports it as a dependency.

## Releasing new versions

This is possibly the most important part of the documentation. Please don't try releasing until you've read this section.

This section assumes you know what [semver](http://semver.org/) is. If you don't know what it is, please read through it!

Once you've decided if you are releasing a patch, minor or major version of the styleguide, go into `package.json` and bump the version number. This must be part of your commit that contains the changes.

After merging into master, go to the "Releases" tab on the styleguide's github page. Click on "Draft a new release" and follow the prompts.

Once the styleguide has been released with a new version, you may upgrade anything that depends on styleguide to have the new version. This will give you the new code in your actual app.

