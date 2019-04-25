import {expectType} from 'tsd';
import m2r = require('.');

expectType<string>(m2r('Lorem ipsum'));
expectType<string>(m2r('Lorem ipsum', 1));
expectType<string>(m2r('Lorem ipsum', 'minutes to read'));
expectType<string>(m2r('Lorem ipsum', 'minutes to read', 1));