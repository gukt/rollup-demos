// https://rollupjs.org/tutorial/#using-plugins
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: 'main.js',
  output: [
    {
      file: 'dist/bundle-demo02.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle-demo02.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [
    // 添加 @rollup/plugin-json 插件，支持导入 json 文件
    json()
  ]
};
