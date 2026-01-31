docker-demo/
├── volume-demo/
│   ├── Dockerfile
│   ├── run.sh
│   └── README.md
├── network-demo/
│   ├── docker-compose.yml
│   └── README.md
└── proof.md

---

## 🔑 Volume Demo (Data Persistence)

### Files
- `volume-demo/Dockerfile` → basic Ubuntu container with `/data` directory.
- `volume-demo/run.sh` → script to create and mount a Docker volume.

### Steps
1. Run:
   ```bash
   ./run.sh
Inside container:

bash
echo "Hello Shyamala" > /data/test.txt
exit
Restart container:

bash
docker start -ai volume_test
cat /data/test.txt
✅ File persists across container restarts.

🔑 Network Demo (Communication)
Files
network-demo/docker-compose.yml → defines two Ubuntu containers on a custom bridge network.

network-demo/README.md → instructions for communication test.

Steps
Run:

bash
docker-compose up -d
Exec into app1:

bash
docker exec -it <app1_container_id> bash
Ping app2:

bash
ping app2
✅ Containers communicate via custom network alias.

📜 Proof of Deliverables
See proof.md for documented persistence and communication results:

Volume Persistence → file test.txt remains after container restart.

Network Communication → containers app1 and app2 can ping each other successfully.

⚙️ Requirements
Docker Desktop (with WSL2 integration enabled for Ubuntu‑22.04).

Git (for cloning repo).

Basic Linux commands (bash).

🚀 Usage
Clone the repository:

bash
git clone https://github.com/<your-username>/docker-demo.git
cd docker-demo
Run demos:

Volume demo → cd volume-demo && ./run.sh

Network demo → cd network-demo && docker-compose up -d

✅ Summary
Volume demo shows data persistence across container lifecycles.

Network demo shows container-to-container communication using a custom bridge network.

All steps are reproducible and ready for GitHub upload.

👩‍💻 Author
Created by Shyamala Kalimuthu  
Focused on Docker volumes, networks, and reproducible learning deliverables.

Code

---

👉 This README.md is **ready to drop into your repo root**. It ties together all sub‑folders and proof files so anyone cloning your project can follow along easily.  

Would you like me to also add a **professional GitHub badge section** (Docker, WSL2, License) 
