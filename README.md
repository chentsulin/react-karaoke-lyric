# react-karaoke-lyric

[![npm version](https://badge.fury.io/js/react-karaoke-lyric.svg)](https://npmjs.org/package/react-karaoke-lyric)
[![Build Status](https://github.com/chentsulin/react-karaoke-lyric/workflows/CI/badge.svg?branch=master)](https://github.com/chentsulin/react-karaoke-lyric/actions?query=branch%3Amaster)
[![Coverage Status](https://coveralls.io/repos/github/chentsulin/react-karaoke-lyric/badge.svg?branch=master)](https://coveralls.io/r/chentsulin/koa-bearer-token?branch=master)

> Display karaoke lyric progress via React

![lyric1](https://cloud.githubusercontent.com/assets/3382565/21341782/392446f2-c6c9-11e6-8313-c484fb6a425a.png)

![lyric2](https://cloud.githubusercontent.com/assets/3382565/21337369/8dcb93d0-c6a7-11e6-820a-e29729de4751.png)

## Install

```sh
$ npm install react-karaoke-lyric
```

## Usage

```js
const KaraokeLyric = require('react-karaoke-lyric');

// Blue
<KaraokeLyric text="Hello world" percentage="80" />

// Red
<KaraokeLyric text="Hello World" percentage={35} activeStyle={{
  color: '#e50906',
}} />
```

## API

### props

#### text

*Required*
Type: `string`

Text be displayed.

#### percentage

*Required*
Type: `number`

Progress.

#### wrapperStyle

Type: `object`

Custom wrapper style.

#### fontStyle

Type: `object`

Custom font style.

#### activeStyle

Type: `object`

Custom active style.

## License

MIT © [C.T. Lin](https://github.com/chentsulin/react-karaoke-lyric)
