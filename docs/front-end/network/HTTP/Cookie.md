# [Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies)

## 创建 Cookie

服务器在 HTTP 响应头里面添加一个或多个 [Set-Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) 选项。
```js
Set-Cookie: \<cookie-name>=\<cookie-value>
```

### 例子
服务器响应数据
```js
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[页面内容]

```
每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 Cookie 请求头部再发送给服务器。如下：
```js
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```
## Cookie 的过期时间
- 不设置 max-age 和 expires， Cookie 会在当前的会话结束之后删除。浏览器定义了“当前会话”结束的时间，一些浏览器重启时会使用会话恢复。这可能导致会话 cookie 无限延长。
- 持久性 Cookie 在过期时间（Expires）指定的日期或有效期（Max-Age）指定的一段时间后被删除。
```js
et-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

::: tip 提示
当 Cookie 的过期时间（ Expires）被设定时，设定的日期和时间只与客户端相关，而不是服务端。
:::
## 限制访问 Cookie
有两种方法可以确保 Cookie 被安全发送，并且不会被意外的参与者或脚本访问：Secure 属性和 HttpOnly 属性。
```js
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

## Document.cookie
```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```
::: tip 提示
JavaScript 可以通过跨站脚本攻击（XSS）的方式来窃取 Cookie。
:::

## 安全
缓解涉及 Cookie 的攻击的方法：

- 使用 HttpOnly 属性可防止通过 JavaScript 访问 cookie 值。
- 用于敏感信息（例如指示身份验证）的 Cookie 的生存期应较短，并且 SameSite 属性设置为 Strict 或 Lax。（请参见上方的 SameSite 属性。）在支持 SameSite 的浏览器中，这样做的作用是确保不与跨站点请求一起发送身份验证 cookie。因此，这种请求实际上不会向应用服务器进行身份验证。