## Demo01

```
rollup demo01/main.js
```
默认输出格式为 ESM
如果文件后缀名为 js，命令行中可以不用指定。如果是其他，比如 ts，则要加上。

可以将 rollup 命令行提供的参数写到 rollup.config.[js|cjs|mjs] 中，然后使用 rollup -c 命令。

实践发现，如果我们提供的后缀名是 js, 而内容是 export default 这种 ESM 的写法，那么 rollup -c 会报错：

```
/Users/ktgu/workspace/frontend/1.study/rollup-study/rollup.config.js:1
export default {
^^^^^^

SyntaxError: Unexpected token 'export'
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1149:20)
    ...
```

而后缀名改为 mjs 就没问题了。

同样地，如果你内部是用 CommonJS 写的比如：

```

```