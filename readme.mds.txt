# Cloud Infrastructure Basics – EC2 Setup

## 📌 Objective
Intern demonstrates understanding of cloud infrastructure basics by:
- Launching an EC2 instance
- Connecting via SSH
- Installing packages and a web server
- Configuring security groups
- Accessing application via Public IP
- Safely stopping/terminating instance
- Documenting architecture

---

## 🚀 Steps Performed

### 1. Launch EC2 Instance
- Selected **Amazon Linux 2 AMI (Free Tier eligible)**
- Instance type: **t2.micro**
- Created and downloaded `.pem` key pair
- Configured Security Group to allow SSH (port 22)
- Instance launched successfully

📸 *Screenshot: EC2 instance running in AWS Console*

---

### 2. Connect via SSH
```bash
cd ~/Downloads
chmod 400 my-key.pem
ssh -i "my-key.pem" ec2-user@<Public-IP>

3. Install Packages & Apache Web Server
bash
sudo yum update -y
sudo yum install -y git curl wget unzip
sudo yum install -y httpd
sudo systemctl start httpd
sudo systemctl enable httpd
📸 Screenshot: Terminal output showing Apache installed and started

4. Configure Security Groups
Inbound rules:

SSH (22) → My IP

HTTP (80) → Anywhere (0.0.0.0/0)

HTTPS (443) → Anywhere (0.0.0.0/0)

📸 Screenshot: AWS Console Security Group inbound rules

5. Access Application via Public IP
Browser → http://<Public-IP>

Apache test page displayed

📸 Screenshot: Apache test page in browser

6. Stop or Terminate Instance
Stop → keeps data, stops billing compute hours

Terminate → deletes server permanently

📸 Screenshot: AWS Console showing Stop/Terminate options

7. Document Cloud Architecture
Simple architecture diagram:

Code
[User Browser] → [Public IP / Security Group] → [EC2 Instance: Apache Web Server]
📸 Screenshot/Diagram: Architecture flow

✅ Final Outcome
Intern successfully:

Launched and connected to EC2

Installed packages and web server

Configured security groups

Accessed application via Public IP

Documented architecture

Conclusion: Intern understands cloud infrastructure basics.

Code

---

✨ This README.md is structured, professional, and ready for submission. You just need to **insert your screenshots** at the marked places.  

👉 Do you want me to also give you a **sample architecture diagram (ASCII or Mermaid code)
