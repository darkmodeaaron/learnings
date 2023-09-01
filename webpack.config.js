const path = require('path');

module.exports = {
  entry: { 
    home: './src/index.js',
    todoList: './src/tabs/tasks/todoList/todoList.js',
    asynchronousJsCallbacks: './src/tabs/learnings/asynchronousJsCallbacks/asynchronousJsCallbacks.js',
    api: './src/tabs/learnings/api\'s/apis.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
