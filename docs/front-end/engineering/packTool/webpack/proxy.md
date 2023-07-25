# [proxy](https://webpack.docschina.org/configuration/dev-server/#devserverproxy)
webpack使用[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#options)实现的开发服务
```js
// webpack.config.js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000', // http://localhost:3000/api/users
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
```
## router
router可以把地址精细的代理到其他的地址，比pathRewrite更加强大。
```js
    proxyTable: {
      // admin-server API地址
      '/_dev': {
        ws: false, // proxy websockets
        // 可修改为本地IP【本地联调】、线上对应环境API地址【对应环境联调】
        // target: 'https://xxxxxxxx.com',//t1环境API
        target: 'http://127.0.0.1:7101', // 本地开发，dev环境
        changeOrigin: true,
        pathRewrite: {
          '^/_dev': ''
        },
      },
      // 微服务API地址
      '/_api': {
        ws: false, // proxy websockets
        target: 'http://127.0.0.1:8081', // 本地开发，dev环境
        changeOrigin: true,
        router: function(req) {
          let targetHost = '127.0.0.1:7601';
          const { query1, query2 } = req.query; // query: { query1: 'admin', query2: 'login.getCityList' },
          
          // 代理某几个特定的微服务，直接本地访问
          if (query1 === 'admin') {
            targetHost = '127.0.0.1:7601';
          }
          if (query1 === 'shell') {
            targetHost = '127.0.0.1:7602';
          }
          const proxyUrl = `http://${targetHost}/${query2}` // http://$targetHost/$targetPath?$query_string;
          return proxyUrl;
        },
        pathRewrite: {
          '^/_api': ''
        }
      }
    }
```

## pathRewrite 
用于重写url
```js
// webpack.config.js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // object形式
        pathRewrite: { '^/api': '' },
        // function形式
        pathRewrite: async function (path, req) {
          const should_add_something = await httpRequestToDecideSomething(path);
          if (should_add_something) path += "something";
          return path;
        }
      },
    },
  },
};
```