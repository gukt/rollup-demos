进入 demo01 目录
cd demo01

打包
rollup main.js

如果后缀名为 js，命令行中可以不用指定。如果是其他，比如 ts，则要加上。

默认会输出到控制台，如果你想输出到某个文件，可以使用 > 重定向，也可以指定 -o 或 --output 选项。
rollup main.js > bundle1.js
rollup main.js -o bundle2.js

使用 -f 指定输出格式，比如 "es/esm", "cjs", "system", "iife" , "amd", or "umd" 等。
// 格式还有各种 aliases，具体请查看文档：https://rollupjs.org/guide/en/#outputformat
rollup main.js -o bundle1.js -f es
rollup main.js -o bundle2.js -f cjs
rollup main.js -o bundle3.js -f system
rollup main.js -o bundle4.js -f iife
rollup main.js -o bundle5.js -f amd

如果要输出为 umd，还要指定 UMD 导出名称：
rollup main.js -o bundle6.js -f umd --name="foo"

如果要指定配置文件，加上选项 -c 或 --config，
rollup -c
-c 后面可以提供配置文件名，默认为 rollup.config.js

如果我们使用全局的 rollup 执行 -c 命令时要注意：
如果你的内容采用 ESM 语法，那么文件名必须是 rollup.config.mjs，否则会报语法错误。
如果 rollup.config 采用的是 module.exports = {...} 语法，则文件名必须是 rollup.config.cjs

如果我们采用本地的 rollup 执行 -c 命令，也应该遵守上面的命名规则。或者在 pacakge.json 中指定 type: "module".

```
$ rollup --config
(node:91591) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
[!] RollupError: Node tried to load your configuration file as CommonJS even though it is likely an ES module. To resolve this, change the extension of your configuration to ".mjs", set "type": "module" in your package.json file or pass the "--bundleConfigAsCjs" flag.

Original error: Unexpected token 'export'
```

你还可以指定不同的配置文件名称：
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
