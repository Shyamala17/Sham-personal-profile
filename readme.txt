Ansible Automation Project
📂 Project Structure
Code
ansible-project/
├── inventory/
│   └── hosts.ini
├── playbooks/
│   └── site.yml
└── roles/
    └── webserver/
        ├── tasks/main.yml
        ├── handlers/main.yml
        └── vars/main.yml
⚙️ Setup Instructions
1. Install Ansible
bash
sudo apt update
sudo apt install ansible -y
2. Create Project Structure
bash
mkdir -p ~/ansible-project/{inventory,playbooks,roles/webserver/{tasks,handlers,vars}}
cd ~/ansible-project
🗂 Inventory File
inventory/hosts.ini

ini
[web]
localhost ansible_connection=local
📜 Playbook
playbooks/site.yml

yaml
- name: Configure web servers
  hosts: web
  become: true
  roles:
    - webserver
🔨 Role: Tasks
roles/webserver/tasks/main.yml

yaml
- name: Install web server package
  ansible.builtin.package:
    name: "{{ web_package }}"
    state: present
  notify: Restart web service

- name: Ensure web service is running
  ansible.builtin.service:
    name: "{{ web_service }}"
    state: started
    enabled: true
🔔 Role: Handlers
roles/webserver/handlers/main.yml

yaml
- name: Restart web service
  ansible.builtin.service:
    name: "{{ web_service }}"
    state: restarted
📦 Role: Variables
roles/webserver/vars/main.yml

yaml
web_package: nginx
web_service: nginx
▶️ Run Playbook
bash
cd ~/ansible-project
ansible-playbook -i inventory/hosts.ini playbooks/site.yml | tee output.log
📜 Example Output
Code
PLAY [Configure web servers] ***************************************************

TASK [webserver : Install web server package] **********************************
changed: [localhost]

TASK [webserver : Ensure web service is running] *******************************
ok: [localhost]

RUNNING HANDLER [webserver : Restart web service] ******************************
changed: [localhost]

PLAY RECAP *********************************************************************
localhost                  : ok=3    changed=2    unreachable=0    failed=0
📝 Notes
Idempotency: Running the playbook multiple times won’t reinstall packages unnecessarily.

Handlers: Restart service only when notified (e.g., after package install).

Variables: Package and service names are configurable in vars/main.yml.

Logs: All execution logs are saved in output.log for easy review.