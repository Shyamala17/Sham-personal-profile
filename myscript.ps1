
PS C:\Windows\system32> Get-ChildItem Env:        # list all environment variables
>> echo $Env:PATH            # view PATH variable
>>

Name                           Value
----                           -----
ALLUSERSPROFILE                C:\ProgramData
APPDATA                        C:\Users\HP User\AppData\Roaming
ChocolateyInstall              C:\ProgramData\chocolatey
ChocolateyLastPathUpdate       134141876618145689
CommonProgramFiles             C:\Program Files\Common Files
CommonProgramFiles(x86)        C:\Program Files (x86)\Common Files
CommonProgramW6432             C:\Program Files\Common Files
COMPUTERNAME                   DESKTOP-5PS4A0U
ComSpec                        C:\Windows\system32\cmd.exe
DriverData                     C:\Windows\System32\Drivers\DriverData
HOMEDRIVE                      C:
HOMEPATH                       \Users\HP User
LOCALAPPDATA                   C:\Users\HP User\AppData\Local
LOGONSERVER                    \\DESKTOP-5PS4A0U
NUMBER_OF_PROCESSORS           4
OneDrive                       C:\Users\HP User\OneDrive
OS                             Windows_NT
Path                           C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapat...
PATHEXT                        .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL
PROCESSOR_ARCHITECTURE         AMD64
PROCESSOR_IDENTIFIER           Intel64 Family 6 Model 61 Stepping 4, GenuineIntel
PROCESSOR_LEVEL                6
PROCESSOR_REVISION             3d04
ProgramData                    C:\ProgramData
ProgramFiles                   C:\Program Files
ProgramFiles(x86)              C:\Program Files (x86)
ProgramW6432                   C:\Program Files
PSModulePath                   C:\Users\HP User\Documents\WindowsPowerShell\Modules;C:\Program Files\WindowsPowerShe...
PUBLIC                         C:\Users\Public
SystemDrive                    C:
SystemRoot                     C:\Windows
TEMP                           C:\Users\HPUSER~1\AppData\Local\Temp
TMP                            C:\Users\HPUSER~1\AppData\Local\Temp
USERDOMAIN                     DESKTOP-5PS4A0U
USERDOMAIN_ROAMINGPROFILE      DESKTOP-5PS4A0U
USERNAME                       HP User
USERPROFILE                    C:\Users\HP User
windir                         C:\Windows
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm


PS C:\Windows\system32> $Env:MYVAR="HelloWorld"
>> echo $Env:MYVAR
>>
HelloWorld
PS C:\Windows\system32> $Env:PATH += ";C:\Users\Shyamala\scripts"
>> echo $Env:PATH
>>
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm;C:\Users\Shyamala\scripts
PS C:\Windows\system32> [System.Environment]::SetEnvironmentVariable("MYVAR","HelloWorld","User")
>>
PS C:\Windows\system32> [System.Environment]::SetEnvironmentVariable("MYVAR","HelloWorld","User")
>>
PS C:\Windows\system32> echo $Env:MYVAR
>> where myscript.bat  # if added to PATH
>>
HelloWorld
PS C:\Windows\system32> $Env:PATH
>>
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm;C:\Users\Shyamala\scripts
PS C:\Windows\system32> where.exe notepad
>>
C:\Windows\System32\notepad.exe
C:\Windows\notepad.exe
PS C:\Windows\system32> where.exe python
>>
C:\Python314\python.exe
C:\Users\HP User\AppData\Local\Microsoft\WindowsApps\python.exe
PS C:\Windows\system32> $Env:PATH += ";C:\path\to\folder"
>>
PS C:\Windows\system32> echo $Env:PATH
>> where <command>PS C:\Windows\system32> $Env:PATH
>>
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm;C:\Users\Shyamala\scripts;C:\path\to\folder;C:\path\to\folder;C:\path\to\folder
PS C:\Windows\system32> where.exe notepad
>> where.exe python
>>
C:\Windows\System32\notepad.exe
C:\Windows\notepad.exe
C:\Python314\python.exe
C:\Users\HP User\AppData\Local\Microsoft\WindowsApps\python.exe
PS C:\Windows\system32> $Env:PATH
>> where.exe <command>PS C:\Windows\system32> $Env:PATH
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm;C:\Users\Shyamala\scripts;C:\path\to\folder;C:\path\to\folder;C:\path\to\folderPS C:\Windows\system32> $Env:PATH
>>
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm;C:\Users\Shyamala\scripts;C:\path\to\folder;C:\path\to\folder;C:\path\to\folder
PS C:\Windows\system32> Get-Command notepad
>> Get-Command python
>>

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     notepad.exe                                        10.0.19... C:\Windows\system32\notepad.exe
Application     python.exe                                         3.14.21... C:\Python314\python.exe
PS C:\Windows\system32> $Env:PATH
>>
C:\Python314\Scripts\;C:\Python314\;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Program Files\Java\jdk-21\bin;;C:\Program Files\Docker\Docker\resources\bin;C:\Program Files\nodejs\;C:\ProgramData\chocolatey\bin;C:\Program Files\RedHat\Podman\;C:\Users\HP User\AppData\Local\Microsoft\WindowsApps;C:\Users\HP User\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\HP User\AppData\Roaming\npm;C:\Users\Shyamala\scripts;C:\path\to\folder;C:\path\to\folder;C:\path\to\folder
PS C:\Windows\system32> Get-Command notepad
>> Get-Command python
>>

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Application     notepad.exe                                        10.0.19... C:\Windows\system32\notepad.exe
Application     python.exe                                         3.14.21... C:\Python314\python.exe
PS C:\Windows\system32> where.exe python
>> where.exe notepad
>>
C:\Python314\python.exe
C:\Users\HP User\AppData\Local\Microsoft\WindowsApps\python.exe
C:\Windows\System32\notepad.exe
C:\Windows\notepad.exe
PS C:\Windows\system32> C:\Python311\python.exe
>> C:\Users\Shyamala\AppData\Local\Microsoft\WindowsApps\python.exe