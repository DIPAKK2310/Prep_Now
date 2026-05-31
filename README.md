# 🚀 PrepNow - AI-Powered Interview Preparation Platform

PrepNow is a full-stack AI interview preparation platform that helps candidates practice technical and behavioral interviews through realistic AI-driven conversations. The platform combines voice-based interviews, AI-generated questions, and personalized feedback to simulate real-world interview experiences.

Built using the MERN Stack, PrepNow integrates Google's Gemini AI for intelligent question generation and evaluation, and Vapi AI for real-time voice interview interactions.

---

## 🌟 Key Features

### 🎙️ AI Voice Interviews

* Real-time voice conversations powered by Vapi AI
* Simulates actual interview environments
* Dynamic follow-up questions based on responses

### 🤖 AI Question Generation

* Role-specific interview questions
* Frontend, Backend, Full Stack, DevOps, and System Design tracks
* Behavioral and technical interview support

### 📊 Personalized Feedback

* Detailed answer evaluation
* Communication and technical assessment
* Improvement suggestions after each session

### 📈 Progress Tracking

* Interview history and analytics
* Performance trends over time
* Track strengths and improvement areas

### 🔐 Secure Authentication

* JWT-based authentication
* Protected user routes
* Role-based access control

### 🎨 Modern User Experience

* Responsive design
* Clean and accessible UI
* Built with ShadCN UI and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

* React 18
* Vite
* TypeScript
* Tailwind CSS
* ShadCN UI
* Framer Motion
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* CORS
* dotenv

### AI Services

* Gemini API (Google AI)
* Vapi AI

### DevOps & Deployment

* Git & GitHub
* Docker
* GitHub Actions (Planned)
* Vercel (Frontend)
* Render / Railway (Backend)

---

## 📁 Project Structure

```text
PrepNow/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── interview/
│   │   │   ├── common/
│   │   │   └── ui/
│   │   │
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── types/
│   │   ├── lib/
│   │   └── layouts/
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── config/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   └── package.json
│
├── docs/
│   ├── architecture.md
│   ├── api-docs.md
│   └── database-schema.md
│
├── docker/
│   ├── client.Dockerfile
│   └── server.Dockerfile
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js 18+
* MongoDB Atlas Account
* Gemini API Key
* Vapi AI API Key

---

### Clone Repository

```bash
git clone https://github.com/DIPAKK2310/Prep_Now.git

cd Prep_Now
```

---

## Backend Setup

```bash
cd server

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

VAPI_API_KEY=your_vapi_api_key
```

Run Backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Modules

### Authentication

* User Registration
* User Login
* JWT Verification
* Protected Routes

### Interview Management

* Create Interview Session
* Generate AI Questions
* Submit Answers
* Receive Feedback

### User Dashboard

* Interview History
* Performance Analytics
* Progress Tracking

---

## Future Enhancements

* Live Coding Interviews
* AI Mock HR Interviews
* Resume Analysis
* ATS Score Checker
* AI Career Coach
* Multi-Language Support
* Video Interview Support
* Team Interview Rooms

---

## Deployment

### Frontend

Deploy on Vercel:

```bash
npm run build
```

### Backend

Deploy on Render or Railway:

```bash
npm start
```

---

## Author

**Dipak Khare**

Full Stack Developer | MERN Stack | AI Applications | DevOps Enthusiast

GitHub:
https://github.com/DIPAKK2310

LinkedIn:
https://www.linkedin.com/in/dipakkhare/

---

## License

This project is licensed under the MIT License.
