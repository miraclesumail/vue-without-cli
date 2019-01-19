const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true
  }
});

module.exports = {
    entry:  path.join(__dirname, 'src/index.js'),
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.vue', '.less', '.css', '.scss'],
        alias: {
            'src': path.resolve(__dirname, './src'),
        }
    },
    // rules: [
    //     {
    //         test: /.vue$/,
    //         loader: 'vue-loader'
    //     }
    // ],
    // plugins: [
    //    new webpack.LoaderOptionsPlugin({
    //      test: /.vue$/,
    //      options: {
    //        rules:''
    //      }
    //    })
    //  ],
    module: {
        rules: [
            createLintingRule(),
            {
            test: /\.vue$/,
            use: 'vue-loader',
            // options: {
            //     loaders: {
            //         sass: [
            //         'vue-style-loader',
            //         'css-loader',
            //         // postcss-loader非必须
            //         'sass-loader',
            //         // {
            //         //     loader: 'sass-resources-loader',
            //         //     options: {
            //         //     // 需更改为项目中实际scss文件路径
            //         //     resources: path.resolve(__dirname, './src/styles/mixin.scss'),
            //         //     },
            //         // },
            //         ],
            //     }}
            },

        {
            test:/\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
            loader:"babel-loader", //加载器名，就是上一步安装的loader
            exclude:/node_modules/ //排除node_modules目录，我们不加载node模块中的js哦~
        },
        {
            test:/\.(css|scss)$/,
            
            use:[
                'style-loader',
                'css-loader',
                // 'postcss-loader'
            ]
            //依次使用以上loader加载css文件，postcss-loader可以暂时不加，后面再深入修改webpack配置的时候再说用处
            //也可以写成这样 loader："style-loader!css-loader!postcss-loader"
        },   
            
        ]
   },
    plugins: [
    // make sure to include the plugin for the magic
       new VueLoaderPlugin(),
       new HtmlWebpackPlugin({
            filename:'index.html',
            title:'vue demo',
            template:'./index.html',
        }),
       new ExtractTextPlugin("styles/index.css")
  
   ],
   devServer:{
        contentBase:"./dist",
        port: 8300
    }
}

