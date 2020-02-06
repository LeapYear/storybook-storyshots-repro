## Storyshots minimal repro

To run:

```
$ yarn
$ yarn start
```

To test:

1. Run:

```
$ yarn test
```

2. Open storyhots.test.ts.snap
3. Open storybook (`yarn start`)

Expected:
Snapshot should contain "Preview Decorator", like Storybook does

Actual:
Snapshot only contains "Toggle Story"; decorator is not invoked