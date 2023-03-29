// https://rollupjs.org/tutorial/#using-plugins
import foo from './foo.js';
import { version } from '../package.json';

export default function () {
  console.log(foo, 'version', version)
}