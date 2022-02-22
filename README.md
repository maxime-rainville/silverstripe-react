# Silverstripe React
[![PHPUnit](https://github.com/maxime-rainville/silverstripe-react/actions/workflows/phpunit.yml/badge.svg)](https://github.com/maxime-rainville/silverstripe-react/actions/workflows/phpunit.yml)


IN DEVELOPMENT!!!

This library provide a helpers to make it easy to create react component for Silverstripe CMS.


## Requirements

*

## Installation
```
composer require maxime-rainville/silverstripe-react
```

## Documentation
 * [Documentation readme](docs/en/readme.md)

Add links into your docs/<language> folder here unless your module only requires minimal documentation
in that case, add here and remove the docs folder. You might use this as a quick table of content if you
have multiple documentation pages.

## Maintainer documentation

### Rebuilding the pattern library

This module integrate with the Silverstripe CMS pattern library. To view the pattern library:
- Make sure you have installed `silverstripe/admin` from source.
- Run `cd vendor/silverstripe/admin` from the root of your project.
- Run `yarn install` to install the `silverstripe/admin` dependencies.
- Run `yarn pattern-lib` to build the pattern library. This will auto-discover the `maxime-rainville/silverstripe-react` library.
- Point your browser to http://localhost:6006. Stories specific to this module will be under "ReactAdmin".
