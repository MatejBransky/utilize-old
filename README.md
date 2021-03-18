# @utilize/packages

Monorepo with some reusable packages (configs, libs,...).

A basic [Lerna](https://lerna.js.org/) monorepo with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [GitHub Actions workflow](https://github.com/features/actions) configuration to achieve fully automated package publishing to the NPM registry. As a bonus [Renovate bot](https://github.com/marketplace/renovate) keeps dependencies up to date.

## Getting Started

Run `yarn` to bootstrap the packages. This will install all of their dependencies and links any cross-dependencies.

Other interesting scripts are inside of the [root package.json](./package.json).

## How it works

Each push to `main` branch will generate a version number, git tag, Conventional Changelog, release commit, pushing changes to the origin and publish to the NPM registry.
