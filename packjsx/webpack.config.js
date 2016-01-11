var path = require('path');
var config = {
  // entry: path.resolve(__dirname, 'app/main.js'),
  entry:{
    "entry": path.resolve(__dirname, 'app/main.js'),
    "test": path.resolve(__dirname, 'app/test.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }]
  }
};

module.exports = config;