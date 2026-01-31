# Environment Variables & PATH — Setup Guide

## 📌 Overview
This guide explains how to view, create, modify, and persist environment variables and PATH configuration in **Linux Shell** and **Windows PowerShell**.  
It includes proof steps and screenshot references so interns can reproduce and verify runtime configuration.

---

## 🔹 Linux Shell

### 1. View Environment Variables
```bash
printenv
echo $PATH
 Screenshot: PATH output in Linux terminal
2. Create Custom Variable
bash
export MYVAR="HelloWorld"
echo $MYVAR
📸 Screenshot: MYVAR output
3. Modify PATH
bash
export PATH=$PATH:/home/shyamala/scripts
echo $PATH
4. Make Persistent
Add to ~/.bashrc:

bash
export PATH=$PATH:/home/shyamala/scripts
export MYVAR="HelloWorld"
Reload:

bash
source ~/.bashrc
🔹 Windows PowerShell
1. View Environment Variables
powershell
$Env:PATH
📸 Screenshot: PATH output

2. Create Custom Variable
powershell
$Env:MYVAR="HelloWorld"
$Env:MYVAR
📸 Screenshot: MYVAR output

3. Modify PATH (temporary)
powershell
$Env:PATH += ";C:\Users\Shyamala\scripts"
$Env:PATH
4. Locate Executables
powershell
Get-Command notepad
Get-Command python
📸 Screenshot: PATH resolution for notepad/python

5. Persistent Variables
Open System Properties → Advanced → Environment Variables

Add MYVAR=HelloWorld under User variables

Add C:\Users\Shyamala\scripts to PATH
📸 Screenshot: Environment Variables GUI with custom entries

🔹 Debugging PATH Issues
Linux:

bash
which <command>
Windows:

powershell
Get-Command <command>
🎯 Final Outcome
Intern can view, create, modify, persist, test, and debug environment variables.

They understand how PATH works across Linux and Windows.

Configuration is documented with screenshots for reproducibility.

Code

---

✅ This `README.md` is structured, professional, and intern‑friendly. You just need to add your **screenshots** in the marked places.  

Would you like me to also create a **second section for Docker volumes/networks** so your repo has both *Environment Variables* and *Docker Fundamentals* documented together