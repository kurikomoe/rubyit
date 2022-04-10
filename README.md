# Ruby IT !

This is a tool based on [kuroshiro](https://github.com/hexenq/kuroshiro) (which annotates the Japanese text and generates html snippets).

`rubyit` uses the `pkg` to pack the npm packages to executable binary and make it runnable on multiplatform.

# Build

Run the following command to build release package.

```shell
$ yarn
$ yarn build:pkg
```

The output binary located in `dist/rubyit-{platform}`.

# Usage

```shell
$ rubyit "処刑少女の生きる道"
<ruby>処刑<rp>(</rp><rt>しょけい</rt><rp>)</rp></ruby><ruby>少女<rp>(</rp><rt>しょうじょ</rt><rp>)</rp></ruby>の<ruby>生<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きる<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>
```

The output text will be automatically copied to the system clipboard.

Rendered in markdown:  <ruby>処刑<rp>(</rp><rt>しょけい</rt><rp>)</rp></ruby><ruby>少女<rp>(</rp><rt>しょうじょ</rt><rp>)</rp></ruby>の<ruby>生<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きる<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>

# TODO

- [ ] Add Error catch procedures.
- [ ] Polish the code.
