# react-karaoke-lyric

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

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

[npm-image]: https://badge.fury.io/js/react-karaoke-lyric.svg
[npm-url]: https://npmjs.org/package/react-karaoke-lyric
[travis-image]: https://travis-ci.org/chentsulin/react-karaoke-lyric.svg
[travis-url]: https://travis-ci.org/chentsulin/react-karaoke-lyric
[coveralls-image]: https://coveralls.io/repos/chentsulin/react-karaoke-lyric/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/react-karaoke-lyric?branch=master

