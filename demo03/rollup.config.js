// q: 帮我写出一个 rollup.config.js，用以打包 demo03/main.js，输出到 bundle-demo03 目录下
// a:
// export default {
//   input: 'main.js',
//   output: {
//     file: 'bundle-demo03.js',
//   }
// };
//
export default {
  input: 'main.js',
  output: {
    dir: 'dist/bundle-demo03',
  },
}

