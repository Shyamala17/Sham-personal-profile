Kubernetes Setup + First Pod Deployment
📌 Objective
Demonstrate Kubernetes basics using Minikube and kubectl by deploying an nginx Pod, inspecting its lifecycle, and managing it through create, exec, delete, and recreate operations.

🛠️ Tools Used
Minikube (local Kubernetes cluster)

kubectl (Kubernetes CLI)

Ubuntu 22.04 (environment inside VS Code terminal)

🚀 Steps & Outputs
Step 1: Validate Installation
bash
minikube version
kubectl version --client
Output:

Code
minikube version: v1.34.0
Client Version: v1.30.0
Step 2: Start Cluster
bash
minikube start --driver=docker
Output:

Code
😄  minikube v1.34.0 on Ubuntu 22.04
✨  Using the docker driver
👍  Starting control plane node minikube in cluster minikube
🏄  Done! kubectl is now configured to use "minikube" cluster
Step 3: Verify Cluster
bash
kubectl cluster-info
kubectl get nodes
Output:

Code
Kubernetes control plane is running at https://127.0.0.1:32768
NAME       STATUS   ROLES           AGE   VERSION
minikube   Ready    control-plane   2m    v1.30.0
Step 4: Pod Definition (pod.yml)
yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
Step 5: Apply Pod
bash
kubectl apply -f pod.yml
Output:

Code
pod/nginx-pod created
Step 6: Pod Lifecycle Check
bash
kubectl get pods -o wide
kubectl describe pod nginx-pod
Output:

Code
NAME        READY   STATUS    RESTARTS   AGE   IP           NODE
nginx-pod   1/1     Running   0          10s   172.17.0.3   minikube
Events:

Code
Normal  Scheduled  Pod successfully assigned to minikube
Normal  Pulled     Container image "nginx:latest" already present
Normal  Started    Started container nginx-container
Step 7: Exec into Pod
bash
kubectl exec -it nginx-pod -- /bin/sh
ls /usr/share/nginx/html
exit
Output:

Code
50x.html  index.html
Step 8: Delete & Recreate Pod
bash
kubectl delete pod nginx-pod
kubectl apply -f pod.yml
kubectl get pods
Output:

Code
pod "nginx-pod" deleted
pod/nginx-pod created
NAME        READY   STATUS    RESTARTS   AGE
nginx-pod   1/1     Running   0          5s
📸 Screenshots to Include
Pod creation (kubectl apply)

Pod running (kubectl get pods)

Pod events (kubectl describe)

Exec inside Pod (ls /usr/share/nginx/html)

Pod deletion & recreation

(Optional): Screenshot of nginx welcome page via port‑forward.

🎯 Final Outcome
Cluster successfully started with Minikube.

Pod deployed, inspected, exec’d into, deleted, and recreated.

Demonstrates Kubernetes Pod lifecycle management using YAML + kubectl.

Deliverables: pod.yml file + screenshots of outputs.