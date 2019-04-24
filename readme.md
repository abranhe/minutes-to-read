[<img src="https://cdn.abranhe.com/projects/minutes-to-read/logo.png" height="80%" width="80%">](https://npmjs.org/minutes-to-read)

<br/>

[![](https://api.abranhe.com/badges/travis/minutes-to-read)](https://travis-ci.org/abranhe/minutes-to-read)
[![](https://img.shields.io/github/license/abranhe/minutes-to-read.svg)](https://github.com/abranhe/minutes-to-read/blob/master/license)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://cdn.abranhe.com/badges/paypal.svg)](https://paypal.me/abranhe/10)
[![](https://img.shields.io/npm/v/minutes-to-read.svg)](https://npmjs.org/minutes-to-read)

Read time is based on the average reading speed of an adult (roughly 265 [Words per minutes](https://en.wikipedia.org/wiki/Words_per_minute) according to a [Medium's article](https://help.medium.com/hc/en-us/articles/214991667-Read-time).

## Install

```
$ npm install minutes-to-read
```

## Usage

```js
const m2r = require('minutes-to-read');

m2r('Lorem ipsum');
// => less than a min to read

m2r('Lorem ipsum', 'minute');
// => less than a minute

const longText = 'Lorem ipsum dolor sit am...' // 500 words 

m2r(longText, 'minutes to finish');
// => 2 minutes to finish

m2r(longText, 'minutes to read if you reading rate is 2 wpm', 2);
// => 250 minutes to read if you reading rate is 2 wpm
```

## API

### `m2r(text)`

- **text** (`string`): A paragraph, easy or sentence 

###### Example:

```js
m2r('Lorem ipsum');
// => less than a minute


m2r('Lorem ipsum dolor sit am...'); // 500 words 
// => 2 minutes to finish
```

### `m2r(text, customText)`

- **text** (`string`): A paragraph, easy or sentence 
- **customText** (`string`): A custom text you want to add

###### Example:

```js
m2r('Lorem ipsum', 'minute to finish');
// => less than a minute to finish
```

### `m2r(text, customText, wpm)`

- **text** (`string`): A paragraph, easy or sentence 
- **customText** (`string`): A custom text you want to add
- **wpm** (`number`): Custom words per minutes

###### Example:

For a 250 text at 2 words per minutes it will take 250 minutes.

```js
m2r('Lorem ipsum dolor sit am...', 'minutes to finish', 2); // 500 words 
// => 250 minutes to finish
```

### `m2r(text,wpm)`

- **text** (`string`): A paragraph, easy or sentence 
- **wpm** (`number`): Custom words per minutes

###### Example:

For a 2 words text reading a word per minute it will take 2 minutes.

```js
m2r('Lorem ipsum', 1);
// => 2 min to read
```

## Team

|[![](https://api.abranhe.com/avatar?s=50)](https://abranhe.com)|
| :-: |
| [Carlos Araham](https://github.com/abranhe) |


## License

[MIT](https://github.com/abranhe/minutes-to-read/blob/master/license) License © [Carlos Abraham](https://github.com/abranhe)
