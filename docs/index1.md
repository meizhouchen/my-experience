## 问题
pnpm : 无法加载文件 C:\Users\hntc\AppData\Roaming\npm\pnpm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的
about_Execution_Policies。
## 解决
PowerShell 脚本被禁止在系统上运行。
这可能是由于操作系统执行策略的设置所致。默认情况下，Windows 会限制运行未签名的脚本。为了解决这个问题，您可以尝试以下几种方法：
1. 确认安装了pnpm。手动安装 pnpm：尝试通过手动下载并安装 pnpm 来解决此问题。您可以从 pnpm 官方网站（https://pnpm.io/installation）下载安装程序，然后按照提示进行安装。
2. 更改 PowerShell 的执行策略：打开 PowerShell 窗口，输入命令 Set-ExecutionPolicy RemoteSigned，然后按回车键。这将允许运行远程签名的脚本文件。

Set-ExecutionPolicy : 对注册表项“HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell”的访问被拒绝。 要更改默认(LocalMachine)作用域的
执行策略，请使用“以管理员身份运行”选项启动 Windows PowerShell。要更改当前用户的执行策略，请运行 "Set-ExecutionPolicy -Scope CurrentUser"。
## 解决
您没有以管理员身份运行 PowerShell。为了更改执行策略并允许在计算机上运行未签名的脚本，您需要以管理员身份打开 PowerShell。
请按照以下步骤操作：

1. 在 Windows 搜索栏中输入 "PowerShell"，右键单击 Windows PowerShell 并选择以管理员身份运行。
2. 如果提示是否允许此应用对您的设备进行更改，请单击“是”继续。
3. 输入命令 Set-ExecutionPolicy RemoteSigned 并按回车键。
4. 确认更改，输入 "Y" 并按回车键。