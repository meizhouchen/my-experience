# openresty

[openResty的安装、启动、停止与重启](http://www.hangdaowangluo.com/archives/682)
[Openresty在windows安装和使用](https://blog.csdn.net/laixiaonian/article/details/91900328)

## openResty的安装
官方下载：https://openresty.org/download/openresty-1.9.7.4.tar.gz
 

```shell
# tar xzf openresty-1.9.7.4.tar.gz
# cd openresty-1.9.7.4
#./configure --prefix=/usr/local/openresty --with-luajit \
--without-http_redis2_module --with-http_iconv_module
# make # make install 
```


## 启动、停止与重启
openresty是nginx的luaJit的扩展，openresty的启动、停止、启动操作，实际执行nginx的操作就可以了。

启动：
```
nginx -c <configuration file>
```
```
 ./nginx -c ./conf/nginx.conf
```

快速停止nginx：
```
nginx -s stop
```

完整有序的停止nginx：
```
nginx -s quit
```

修改配置后重新加载生效：
```
nginx -s reload
```

重新打开日志文件：
```
nginx -s  reopen
```