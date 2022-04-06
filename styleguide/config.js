// styleguide.config.js的相关配置

const fs = require('fs');
const path = require('path');

//获取组件目录文件配置
const getComponentFiles = function (path) {
    const filesDir = []; //存储文件夹
    const files = fs.readdirSync(path); //获取当前component的下的文件夹
    files.forEach((file) => {
        const currBaseDir = path + '/' + file;//获取当前文件目录的地址
        const fileStat = fs.statSync(currBaseDir);  //获取当前文件/目录的属性
        if (fileStat.isDirectory()) {//如果是文件夹，则是我们需要遍历的文件夹
            const fileChildren = fs.readdirSync(currBaseDir);//获取当前文件目录的子目录结
            const regFile = new RegExp("^(index||" + file + ")(.vue)") //正则匹配主要的文件
            fileChildren.forEach((item, index) => {
                const regResult = item.match(regFile)
                if (regResult && regResult.length > 0) {
                    const chPath = currBaseDir + '/' + regResult[0];
                    filesDir.push(chPath)//将获取到的结果push到文件中
                }
            })
        }
    })
    return filesDir;
}

module.exports = {
    getComponentFiles
};