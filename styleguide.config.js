const path = require('path');

const { getComponentFiles } = require('./styleguide/config.js');

const baseComponentsUrl = './src/components';

//获得当前组件的目录结构
const componentFilesDir = getComponentFiles(baseComponentsUrl);

module.exports = {
    title: 'demo',
    require: [path.join(__dirname, 'styleguide/global.requires.js')], //全局vue组件使用的插件
    components: componentFilesDir,
    defaultExample: true,
    // 使用组件引入路径
    getComponentPathLine(componentPath) {
        const componentFileName = path.basename(componentPath, '.vue')
        const name =
            componentFileName.toLowerCase() === 'index'
                ? path.basename(path.dirname(componentPath))
                : componentFileName
        return `import ${name} from '${componentPath.replace(/^src\//, '/')}'`
    },

    version: '1.1.1',
    webpackConfig: require('./build/webpack.dev'),
    //页面配置
    usageMode: 'expand', //文档中属性和方法的标签初始化状态，决定是否展开
    exampleMode: 'expand', //文档中代码示例的标签初始化状态，决定是否展开。
    copyCodeButton: true, //代码顶部的复制按钮
    locallyRegisterComponents: true, //vue-styleguidist全局注册所有组件 多个组件共享相同的名称或如果注册了另一个组件，则组件将更改行为
    skipComponentsWithoutExample: true, //跳过没有demo的vue组件案例
    pagePerSection: true,

    //启动服务配置
    serverHost: '0.0.0.0',
    serverPort: 6060,

    //打包配置
    compilerConfig: {
        target: { ie: 11 }
    },
    progressBar: true, //打包进度条
    styleguideDir: 'dist', //打包文件放置的位置
    displayOrigins: false
}