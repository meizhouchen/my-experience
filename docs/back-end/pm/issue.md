运行 pm2 start ./start_local.sh时，报错为
[PM2][ERROR] Interpreter bash is NOT AVAILABLE in PATH. (type 'which bash' to double check.)

这个错误通常是因为系统无法找到 Bash 解释器。Bash 是一个常用的命令行解释器，如果它未在 PATH 中设置，就会导致此错误。

```
which bash
```

Windows 并不提供内置的 which 命令。相反，Windows 提供了 where 命令，该命令的作用与 which 相同。
```
where bash
```

此命令应返回 Bash 解释器的路径，例如 C:\Program Files\Git\bin\bash.exe

如果未找到 Bash 解释器，什么都没有返回，则可能需要安装 Git for Windows 或者其他软件包来获得 Bash 解释器，并确保其已正确设置在 PATH 中。

既然您已经安装了 Git for Windows，并且在运行 where bash 命令时未看到任何输出，那么可能是由于路径没有被正确添加到系统的 PATH 变量中。

为了解决这个问题，您可以手动将 Git 的 bin 目录添加到 PATH 变量中。请按照以下步骤操作：

1. 打开 Git Bash 终端窗口
2. 运行以下命令，以确定 Git 安装目录下的 bin 目录的完整路径：
3. echo $PATH | sed 's/:/\n/g' | grep git
4. 在 Windows 上打开“系统属性”对话框并选择“高级”选项卡
5. 选择“环境变量”按钮
6. 在“系统变量”部分，查找名为“Path”的变量，并单击“编辑”按钮
7. 在“编辑环境变量”对话框中，单击“新建”按钮，并将上一步得到的 Git bin 目录的路径添加到“变量值”中。例如，如果 Git 安装在 C:\Program Files\Git 文件夹下，则应该添加 C:\Program Files\Git\bin
8. 点击“确定”两次关闭所有对话框

现在，您应该能够通过在 Git Bash 终端窗口中运行 which bash 命令来检查 Bash 解释器是否已经正确安装和配置了。