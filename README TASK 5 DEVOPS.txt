# 📘 Linux Process Management Report

## 📂 Overview
This repository contains documentation and outputs related to **Linux process and service management**.  
It demonstrates how to list, monitor, kill, and record processes, as well as manage services using `systemctl`.  
The deliverables include a formal Word report and this README file.

---

## 📑 Contents
- **Report:** `Linux_Process_Management_Report.docx`  
- **README.md:** Quick reference and usage guide  
- **Logs & Snapshots (examples):**
  - `processes.txt` → output of `ps aux`
  - `top_snapshot.txt` → snapshot from `top`
  - `nginx_status.txt` → service status example
  - `system_logs.txt` → kernel logs via `dmesg`
  - `nginx_journal.txt` → journal logs for nginx

---

## ⚙️ Requirements
- **Operating System:** Linux (Ubuntu, Fedora, CentOS, etc.)  
- **Privileges:** Some commands require `sudo` access  
- **Optional Tools:**  
  - `htop` → enhanced process viewer  
  - `iftop` → real-time network monitoring  

---

## 🚀 Usage Guide

### 1. Listing Processes
```bash
ps aux        # detailed process list
ps -ef        # alternative format
top           # interactive monitoring
htop          # enhanced interface (if installed)

2. Killing Processes
bash
kill <PID>       # graceful termination (SIGTERM)
kill -9 <PID>    # force termination (SIGKILL)
3. Process States
R → Running

S → Sleeping (waiting for event)

D → Uninterruptible sleep (I/O wait)

T → Stopped (paused)

Z → Zombie (terminated but not cleaned up)

4. Service Management
bash
sudo systemctl start <service>
sudo systemctl stop <service>
sudo systemctl restart <service>
sudo systemctl status <service>
5. Enable Services at Boot
bash
sudo systemctl enable <service>
sudo systemctl disable <service>
systemctl is-enabled <service>
6. Monitoring Resources
bash
top
free -h
df -h
du -sh /path/to/dir
iftop
netstat -tulnp
uptime
vmstat 1
7. Recording Findings
bash
ps aux > processes.txt
top -b -n 1 > top_snapshot.txt
systemctl status nginx > nginx_status.txt
dmesg > system_logs.txt
journalctl -u nginx > nginx_journal.txt
📝 Notes
Always attempt a graceful kill before using kill -9.

Use systemctl for consistent service management across modern Linux distributions.

GUI tools (like GNOME Services or Startup Applications) can be used, but CLI is more universal.

Keep logs organized in a dedicated folder (e.g., /home/user/sys_reports/) for easy review.

📄 Deliverables
Word Report: Linux_Process_Management_Report.docx

README.md: Quick reference and usage guide

Logs Folder: Contains captured outputs for documentation

✅ Summary
This README provides a complete reference for Linux process and service management.
It is suitable for academic submission, professional training, or personal documentation.
The accompanying Word report expands on these commands with explanations and structured notes.

Code

Would you like me to also create a **sample folder structure diagram** (like `/reports`, `/logs`, `/scripts`) so your README looks even more professional and repository-ready
