# [response](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)

状态码 200 OK 表明请求已经成功。默认情况下状态码为 200 的响应可以被缓存。

## 400 Bad Request
客户端请求错误（例如，请求语法错误、无效请求消息格式或者欺骗性请求路由），而无法或不会处理该请求。
## 401 Unauthorized
客户端错误，由于缺乏目标资源要求的身份验证凭证，发送的请求未得到满足。
## 404 Not Found
服务器无法找到所请求的资源。
## 405 Method Not Allowed
服务器禁止了使用当前 HTTP 方法的请求。
## 500 Internal Server Error
服务器端错误的响应状态码，意味着所请求的服务器遇到意外的情况并阻止其执行请求。