# 📊 FinTask

A **Finance and Task Management System** built using the MERN Stack with Docker, JWT Authentication, Nginx reverse proxy, and modular routing.

---

## 🚀 Features

- 🔐 User Authentication (Login / Register) using JWT
- 🧾 Secure API with Express.js
- 📊 Finance & Task Management System
- 📈 Report Generation (planned / in progress)
- 🌐 REST API backend
- ⚡ React Frontend with React Router
- 🐳 Dockerized full-stack application
- 🔄 Nginx reverse proxy setup
- 🔑 Environment variable support (.env)
- 📁 Modular file structure (client / server separation)

---

## 🛠 Tech Stack

### Frontend

- React
- React Router DOM
- Tailwind CSS
- Fetch API

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- CORS
- dotenv

### DevOps

- Docker
- Docker Compose
- Nginx (Reverse Proxy)
- Git / GitHub

---

## 📁 Project Structure

```bash
fintask/
│
├── client/              # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── server/              # Express Backend
│   ├── index.js
│   ├── models/
│   ├── routes/
│   └── controllers/
│
├── nginx/
│   └── default.conf
│
├── docker-compose.yml
├── Dockerfile (client/server)
├── .gitignore
├── .env.example
└── README.md
```
