# Backup Workflow Project

This project demonstrates how to create, compress, extract, automate, and schedule backups using **Bash**, **tar**, and **cron**.

---

## 📌 Steps

### 1. Create Sample Directories with Files
```bash
mkdir -p ~/backup_demo/docs ~/backup_demo/images
echo "This is file1" > ~/backup_demo/docs/file1.txt
echo "This is file2" > ~/backup_demo/docs/file2.txt
touch ~/backup_demo/images/img1.jpg ~/backup_demo/images/img2.png
2.Compress Files Using tar + gzip
bash
tar -czvf ~/backup_demo.tar.gz ~/backup_demo
3. Extract Compressed Files
bash
mkdir -p ~/restore_demo
tar -xzvf ~/backup_demo.tar.gz -C ~/restore_demo
4. Automate Backup Using Script
Create backup.sh:

bash
#!/bin/bash
SOURCE=~/backup_demo
DEST=~/backups
DATE=$(date +%F_%H-%M-%S)

mkdir -p $DEST
tar -czvf $DEST/backup_$DATE.tar.gz $SOURCE
Make it executable:

bash
chmod +x ~/backup.sh
Run manually:

bash
~/backup.sh
5. Schedule Backup with Cron
Open cron editor:

bash
crontab -e
Add this line to run daily at 2 AM:

bash
0 2 * * * /home/yourusername/backup.sh
Verify:

bash
crontab -l
6. Verify Backups
List contents of archive:

bash
tar -tzvf ~/backups/backup_<DATE>.tar.gz
Test extraction:

bash
mkdir ~/verify_restore
tar -xzvf ~/backups/backup_<DATE>.tar.gz -C ~/verify_restore
ls -R ~/verify_restore
7. Document Workflow
This README.md serves as documentation of the entire backup process.

✅ Deliverables
~/backup_demo/ (sample source directory)

backup_demo.tar.gz (compressed archive)

~/restore_demo/ (extracted files)

~/backup.sh (automation script)

~/backups/backup_<DATE>.tar.gz (scheduled backups)

README.md (documentation)

Code

---

✅ This is the **full README.md file** — you can copy it directly into your project folder.  

Would you like me to also give you a **Bash one‑liner** that writes this entire README.md file automatically into your system.