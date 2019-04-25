/**
Get to know how long it will take to read a paragraph, text or easy acording 
to a [Medium's article](https://help.medium.com/hc/en-us/articles/214991667-Read-time). 
Read time is based on the average reading speed of an adult (roughly 265 WPM). 

@param input - The input to analize how long it will take to read.
@param textOrWpm - Alternative text you want to introduce, otherwise the reading speed (wpm).
@param wpm - Reading speed, word per minutes (wpm).

Default: `265`.

@example
```
import m2r from 'minutes-to-read';

m2r('Lorem ipsum');
// => less than a min to read
```
*/
declare function m2r(
  input: string,
  textOrWpm?: number | string,
  wpm?: number,
): string;

export = m2r;