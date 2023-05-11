这一行：

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```
与这五行代码是等价的：

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```