# 🧠 PrepNow - AI Interview Platform

PrepNow is a full-stack AI-powered interview preparation platform that simulates real interview experiences. Built with the **MERN Stack**, it leverages **Vapi.AI** for voice interaction and **Gemini (Google)** for Q&A generation and feedback. The frontend is styled using **ShadCN UI** and **Tailwind CSS**, offering a clean and modern user experience.

---

## ✨ Features

- 🎙️ Real-time AI voice interviews using Vapi.AI
- 💬 Text-based Q&A with AI feedback using Gemini (Google)
- 👨‍💻 Role-specific question banks (Frontend, Backend, DevOps, etc.)
- 📊 Performance tracking and improvement suggestions
- 🧾 Session history and feedback logs
- 🔐 JWT-based user authentication and admin access

---

## 🛠️ Tech Stack

### Frontend
- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [JWT Authentication](https://jwt.io/)
- [CORS, dotenv, bcryptjs](https://www.npmjs.com/)

### AI Integrations
- [Vapi.AI](https://vapi.ai/) for voice-based AI interviews
- [Gemini API (Google)](https://deepmind.google/technologies/gemini/) for Q&A and feedback

---

## 📁 Project Structure

PrepNow-AI/
│
├── client/ # React + Vite frontend
│ ├── components/
│ │ ├── ui/ # ShadCN components (Button, Input, Form, etc.)
│ │ └── auth/ # Login, Register forms
│ ├── pages/ # Page-level components
│ ├── hooks/ # Custom hooks (e.g., useAuth)
│ ├── context/ # AuthContext, AppContext
│ ├── assets/ # Images, Icons
│ ├── App.tsx
│ └── main.tsx
│
├── server/ # Node.js backend
│ ├── controllers/ # Auth, Interview, Admin controllers
│ ├── routes/ # Express routes
│ ├── middleware/ # Auth, error handlers
│ ├── models/ # Mongoose models
│ ├── utils/ # Utility functions
│ ├── config/ # DB connection, env config
│ └── index.ts # Entry point
│
├── .env # Environment variables
├── .gitignore
├── package.json
├── README.md
└── LICENSE

yaml
Copy
Edit

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- MongoDB Atlas or local MongoDB
- Vapi.AI and Gemini API keys

---

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/DIPAKK2310/Prep_Now.git
```
```ts
cd prepnow-ai
2️⃣ Setup Environment
For Backend (/server)
```
```bash
cd server
npm install
```
```ts
touch .env
Add this to .env:
```

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_gemini_key
VAPI_API_KEY=your_vapi_key
Start backend:

bash
Copy
Edit
npm run dev
For Frontend (/client)
bash
Copy
Edit
cd client
npm install
npm run dev
