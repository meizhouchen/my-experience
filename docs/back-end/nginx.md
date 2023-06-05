# nginx

[openresty](http://openresty.org/cn/download.html)

```
server {
  listen       80;
  server_name  localhost;
  default_type text/html;
  
  location / {
      root   html;
      index  index.html index.htm;
  }
```

## 规则
只匹配 http://localhost/a 匹配等级最高
location = /a

只匹配 http://localhost/a   
location ^~ /a // 匹配以/a开头的
 
 
 只匹配 http://localhost/a  
 location ~ /\w // 正则匹配\w 以/a开头的
 
 location / 
 匹配以/开头的
 
- 同级，按照先后顺序
location ~ ^/\w

location ~ ^/[a-z]
## 反向代理
nginx路由到其他服务器就是反向代理，它不需要客户配置；正向是面向用户，常规代理是代理客户端

代理是把访问指向某个文件

```
location /a {
  proxy_pass http://192.168.0.12:80;
}
```

访问http://localhost/a 会报错404  可以访问http://192.168.0.12/a 
```
location /a/ {
  proxy_pass http://192.168.0.12:80/;
}
```
访问http://localhost/a

## 负载均衡
![](nginx_files/1.jpg)

upstream group1{
server 192.168.0.12:80;
server 192.168.0.12:81;

location /a/ {
  proxy_pass http://group1/1
}

设置权重

upstream group1{
server 192.168.0.12:80 weight 9; // 90%的概率访问这个地址
server 192.168.0.12:81 weight 1;

location /a/ {
  proxy_pass http://group1/1
}