# @utilize/packages

Monorepo with some reusable packages (configs, libs,...).

[![Test](https://github.com/MatejBransky/utilize/actions/workflows/test.yml/badge.svg)](https://github.com/MatejBransky/utilize/actions/workflows/test.yml)
[![Release](https://github.com/MatejBransky/utilize/actions/workflows/release.yml/badge.svg)](https://github.com/MatejBransky/utilize/actions/workflows/release.yml)

A basic [Lerna](https://lerna.js.org/) monorepo with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [GitHub Actions workflow](https://github.com/features/actions) configuration to achieve fully automated package publishing to the NPM registry. As a bonus [Renovate bot](https://github.com/marketplace/renovate) keeps dependencies up to date.

## Packages

<!-- prettier-ignore-start -->
<!-- Packages: START -->
Package | Description | Version | License
--- | --- | --- | ---
[@utilize/eslint-config](./packages/eslint-config) | Default ESLint config | [![npm (scoped)](https://img.shields.io/npm/v/@utilize/eslint-config)](https://www.npmjs.com/package/@utilize/eslint-config) | [![license](https://img.shields.io/badge/license-MIT-97ca00)](./packages/eslint-config/LICENSE)
[@utilize/prettier-config](./packages/prettier-config) |  | [![npm (scoped)](https://img.shields.io/npm/v/@utilize/prettier-config)](https://www.npmjs.com/package/@utilize/prettier-config) | [![license](https://img.shields.io/badge/license-MIT-97ca00)](./packages/prettier-config/LICENSE)
[@utilize/react-router](./packages/react-router) | Temporary fork of react-router v6 | [![npm (scoped)](https://img.shields.io/npm/v/@utilize/react-router)](https://www.npmjs.com/package/@utilize/react-router) | [![license](https://img.shields.io/badge/license-MIT-97ca00)](./packages/react-router/LICENSE)
[@utilize/react-router-dom](./packages/react-router-dom) | Temporary fork of react-router v6 | [![npm (scoped)](https://img.shields.io/npm/v/@utilize/react-router-dom)](https://www.npmjs.com/package/@utilize/react-router-dom) | [![license](https://img.shields.io/badge/license-MIT-97ca00)](./packages/react-router-dom/LICENSE)
<!-- Packages: END -->
<!-- prettier-ignore-end -->

## Getting Started

Run `yarn` to bootstrap the packages. This will install all of their dependencies and links any cross-dependencies.

Other interesting scripts are inside of the [root package.json](./package.json).

## How it works

Each push to `main` branch will generate a version number, git tag, Conventional Changelog, release commit, pushing changes to the origin and publish to the NPM registry.
