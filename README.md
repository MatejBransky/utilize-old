# monorepo-template

A basic [Lerna](https://lerna.js.org/) monorepo with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [GitHub Actions workflow](https://github.com/features/actions) configuration to achieve fully automated package publishing to the NPM registry. As a bonus [Renovate bot](https://github.com/marketplace/renovate) keeps dependencies up to date.

## Create a new repository from this template

Click the `Use this template` button and provide the new repository details.

## Getting Started

Let's start by setting up the new repository:

1. To perform authenticated operations against the npm registry in your workflow, you'll need to store your npm authentication token as a secret `NPM_TOKEN`. For more information, see "[Creating and using encrypted secrets.](https://docs.github.com/en/actions/reference/encrypted-secrets)" ([source](https://docs.github.com/en/actions/guides/publishing-nodejs-packages#publishing-packages-to-the-npm-registry))

1. Update the root `package.json` with your repository name and url.

1. Modify the sample packages as needed and remember to update their `package.json`.

1. Run `yarn` to bootstrap the packages. This will install all of their dependencies and links any cross-dependencies.

## How it works

Each push to `main` branch will generate a version number, git tag, Conventional Changelog, release commit, pushing changes to the origin and publish to the NPM registry.
