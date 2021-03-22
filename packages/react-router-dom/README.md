# @utilize/react-router-dom

Temporary fork of the [`react-router` v6](https://github.com/ReactTraining/react-router/tree/dev).

It's a **temporary** replacement for react-router v6 until these issues will be solved:

- (WIP) open issue in `react-router` repository: [be aware of `state` in `linkProps.to` object](https://github.com/MatejBransky/utilize/commit/6a28a574782ec8fefd0669f7c26fa87a771a4ebf#diff-3db302cb325ca52b2599df1155285a03a3abead745c417524b83f1647606687aR176)
- (WIP) apply PR to the [`history`](https://github.com/ReactTraining/history) package which [fixes `PartialPath` type](https://github.com/MatejBransky/utilize/commit/549bc20559fda8e6eac5b34eef00ed95de09cfe2#diff-3db302cb325ca52b2599df1155285a03a3abead745c417524b83f1647606687aR36-R43), details:
  1. type error with `<Link to={{ state: { ... } }}>`
  1. [component `Link` uses `LinkProps`](https://github.com/ReactTraining/react-router/blob/dev/packages/react-router-dom/index.tsx#L166)
  1. [interface `LinkProps` uses type `To`](https://github.com/ReactTraining/react-router/blob/dev/packages/react-router-dom/index.tsx#L160)
  1. [type `To` uses `PartialPath`](https://github.com/ReactTraining/history/blob/master/packages/history/index.ts#L211)
  1. [missing `state` in `PartialPath` interface](https://github.com/ReactTraining/history/blob/28c89f4091ae9e1b0001341ea60c629674e83627/packages/history/index.ts#L121)

Online demo: https://utilize-react-router.vercel.app

_It doesn't publish different versions for prod/dev environment._

How to install

```
npm install @utilize/react-router-dom history
```

or with Yarn:

```
yarn add @utilize/react-router-dom history
```
