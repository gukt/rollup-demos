## 安装 rollup

有两种方式安装 rollup

1. 全局安装

```bash
# yarn
yarn global add rollup

# npm
npm install -g rollup

# pnpm
pnpm install -g rollup
```

2. 本地安装

```bash
# yarn
yarn add rollup --dev

# npm
npm install rollup --save-dev

# pnpm
pnpm install rollup --save-dev

```



## 目录说明

- demo01 - 基本用法
- demo02 - 使用插件
- demo03 - 代码拆分



## 介绍与注意事项

可以使用本地的 `rollup` 命令，也可以使用全局的 `rollup` 命令。

```bash
# 进入 demo01 目录
cd demo01

# 打包
# 如果是 js 后缀，这里也可以不用指定后缀名，其他后缀名必须指定
rollup main.js
```

默认会输出到控制台。

如果你想输出到某个文件，可以使用 `>` 重定向；也可以指定 `-o` 或 `--output` 选项。

```bash
rollup main.js > bundle1.js
rollup main.js -o bundle2.js
```

使用 `-f` 可以指定输出格式。

```bash
rollup main.js -o bundle.js -f cjs
```

支持的格式有：`es`、  `cjs`、 `system`、 `iife` 、 `amd` 或 `umd`。
每种格式可能还有一些 aliases，具体请查看文档：https://rollupjs.org/guide/en/#outputformat

```bash
rollup main.js -o bundle1.js -f es
rollup main.js -o bundle2.js -f cjs
rollup main.js -o bundle3.js -f system
rollup main.js -o bundle4.js -f iife
rollup main.js -o bundle5.js -f amd
```

如果输出为 `umd`，需指定导出名称：

```bash
rollup main.js -o bundle6.js -f umd --name="foo"
```

命令行的参数都可以写进配置文件中，使用选项 `-c` 或 `--config` 指定从配置文件中读取。

```bash
rollup -c
```

`-c` 后面可以提供不同的配置文件名，默认为 `rollup.config.js`。
    
```bash
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
```

如果我们使用全局的 rollup -c 时要注意：

如果你的 `rollup.config` 中的配置使用 `ESM` 语法，则配置文件后缀名必须是 `.mjs`，否则会报错。

```js
// → rollup.config.mjs
export default {
    ...
}
```

同样地，如果你的配置采用的是 `CommonJS` 语法，则配置文件后缀名必须是 `.cjs`。

```js
// → rollup.config.cjs
module.exports = {
    ...
}
```

如果我们使用构建流程，可以在 `package.json` 中指定 `type: "module"`，这样就可以不必管 rollup.config 的后缀名了。

```json
{
    "type": "module"
}
```
