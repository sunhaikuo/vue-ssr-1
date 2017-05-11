const webpack = require('webpack')
const wpCfg = require('./webpack.js')
const compiler = webpack(wpCfg.getConfig())
compiler.watch({}, (err, stats) => {
    if (err === null && stats.compilation.errors.length === 0) {
        console.log('编译成功')
    } else {
        console.log('编译出现错误...')
        console.log(stats.compilation.errors[0].message)
    }
})