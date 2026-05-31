<img src="https://avatars.githubusercontent.com/u/101424800?v=4" width="80" align="left" />

**Production Web Application CI/CD Platform**


![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Containerized-Docker-2496ED?logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Orchestration-Docker%20Compose-2496ED?logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Application-Node.js-339933?logo=node.js&logoColor=white)
![Nginx](https://img.shields.io/badge/Reverse%20Proxy-Nginx-009639?logo=nginx&logoColor=white)
![Azure VM](https://img.shields.io/badge/Hosted%20On-Azure%20VM-0078D4?logo=microsoftazure&logoColor=white)
![Ubuntu](https://img.shields.io/badge/OS-Ubuntu-E95420?logo=ubuntu&logoColor=white)
![SSH Deployment](https://img.shields.io/badge/Deployment-SSH-success)
![Linux](https://img.shields.io/badge/Linux-Administration-FCC624?logo=linux&logoColor=black)
![Built in](https://img.shields.io/badge/Built%20in-Bash-0891b)
![Repo](https://img.shields.io/badge/GitHub-shivam--1320-blue?logo=github)
![Downloads](https://img.shields.io/badge/Telegram-purple?link=https%3A%2F%2Ft.me%2FShivam_baghel1320)
![License](https://img.shields.io/badge/license-MIT-blue)


#

> **GitHub:**  shivam-1320
##  Overview

This project demonstrates a complete CI/CD pipeline for deploying a containerized Node.js application to an Azure Ubuntu Virtual Machine using GitHub Actions, Docker Compose, and Nginx Reverse Proxy.

When code is pushed to the GitHub repository, GitHub Actions automatically deploys the latest version of the application to the Azure VM via SSH.

##  Architecture Diagram


![Architecture Diagram](Images/Architecture-Diagram.png)

---

##  CI/CD Workflow

```text
Developer
    │
    │ Git Push
    ▼
GitHub Repository
    │
    │ Trigger Workflow
    ▼
GitHub Actions CI/CD
    │
    │ SSH Deployment
    ▼
Azure Ubuntu VM
    │
    ├── Docker Engine
    ├── Docker Compose
    ├── Nginx Reverse Proxy (Port 80)
    └── Node.js Application Container (Port 3000)

Internet Users
    │ HTTP:80
    ▼
Nginx Reverse Proxy
    │ Proxy Pass
    ▼
Node.js Application
```

---

##  Technologies Used

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| GitHub         | Source Code Management  |
| GitHub Actions | CI/CD Automation        |
| Azure VM       | Application Hosting     |
| Ubuntu Linux   | Operating System        |
| Docker         | Containerization        |
| Docker Compose | Container Orchestration |
| Nginx          | Reverse Proxy           |
| Node.js        | Application Runtime     |
| SSH            | Secure Deployment       |

---

##  Repository Structure

```bash
.
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── app/
│   ├── package.json
│   └── application source code
│
├── nginx/
│   └── nginx.conf
│
├── scripts/
│   └── deploy.sh
│
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

##  Docker Architecture

### Nginx Reverse Proxy

* Receives incoming HTTP requests on Port 80
* Routes traffic to the Node.js application container
* Acts as the public entry point for users

### Node.js Application Container

* Runs the web application
* Listens internally on Port 3000
* Receives traffic from Nginx

---

##  Deployment Process

### 1. Clone Repository

```bash
git clone https://github.com/Shivam-1320/Cloud-Based-CI-CD-Deployment-Platform.git
cd Cloud-Based-CI-CD-Deployment-Platform
```

### 2. Build Containers

```bash
docker compose build
```

### 3. Start Containers

```bash
docker compose up -d
```

### 4. Verify Running Containers

```bash
docker ps
```

### 5. Check Logs

```bash
docker compose logs -f
```

---

##  GitHub Actions Deployment Workflow

The CI/CD pipeline performs the following steps automatically:

1. Developer pushes code to GitHub.
2. GitHub Actions workflow is triggered.
3. SSH connection is established to Azure VM.
4. Latest code is pulled from the repository.
5. Docker image is rebuilt.
6. Docker Compose recreates containers.
7. Application health check is performed.
8. Deployment is marked successful.

---

##  Screenshots

### GitHub Repository

![GitHub Repository](Images/Github-Repository.png)

### GitHub Actions Workflow

![GitHub Actions](Images/Github-Action.png)

### Azure Virtual Machine
![Azure VM](Images/Azure-Virtual-Machine.png)

### Docker Containers

![Docker Containers](Images/Docker-Containers.png)

### Running Application

![Running Application](Images/Running-Application.png)

---

##  Access Application

```text
http://YOUR_SERVER_IP
```

Example:

```text
http://20.xx.xx.xx
```

---

---

##  Skills Demonstrated

* Linux Administration
* Azure Virtual Machines
* Docker Containerization
* Docker Compose
* Nginx Reverse Proxy
* GitHub Actions CI/CD
* SSH Automation
* Production Deployment
* Troubleshooting and Monitoring

---

##  Future Improvements

* HTTPS using Let's Encrypt
* Domain Name Integration
* Docker Registry Integration
* Monitoring with Prometheus
* Grafana Dashboards
* Blue-Green Deployment Strategy
* Rollback feature 

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Pankaj Baghel**

GitHub: https://github.com/shivam-1320
