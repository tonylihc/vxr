# Vue+Vuex+Vue-router脚手架

> 解决痛点：vue-cli创建项目时，需要用户对vuex,vue-router做一些基本的配置，而且得重新划分结构。

> 该模板可以极大的减少这种重复工作

## 生成的结构样式

``` bash
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   ├── api/                    # api rules
│   │   └── ...
│   ├── pages/                  # ui pages
│   │   └── ...
│   ├── store/                  # vuex store
│   │   └── ...
│   ├── router/                 # router config
│   │   └── ...
│   ├── util/                   # utils
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

## Usage

使用方法跟vue-cli类似

``` bash
$ npm install -g vue-cli
$ vue init wanzhichao/vxr my-project
$ cd my-project
$ npm install
$ npm run dev
```

假如8080端口被占用，请修改`/config/index.js`里面的端口号

## 包含的操作跟vue-cli类似

- `npm run dev`: 启动本地服务

- `npm run build`: 发布

- `npm run unit`: 单元测试

- `npm run e2e`: 端对端测试

