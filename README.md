🚀 Sentiment Analysis Web App
A full-stack Sentiment Analysis application that allows users to analyze text sentiment with secure authentication and real-time visualization.

Built with modern production architecture and deployed using cloud platforms.

🌐 Live Demo
Frontend: https://your-frontend.vercel.app

Backend API: https://your-backend.onrender.com

🏗️ Architecture
Frontend (Vercel)
⬇
Backend API (Render)
⬇
MongoDB Atlas

🛠 Tech Stack
Frontend
React 19

Vite

Clerk Authentication

Axios

Tailwind CSS

Chart.js

Framer Motion

Backend
Node.js

Express

MongoDB + Mongoose

Multer (file uploads)

CORS

Dotenv

Deployment
Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Authentication: Clerk

📂 Project Structure
project-root/
│
├── client/      # React + Vite frontend
│
├── backend/     # Node + Express API
│
└── README.md
✨ Features
🔐 Secure authentication using Clerk

📊 Sentiment analysis API integration

📈 Data visualization with charts

📁 File upload support

🌍 Cloud deployment ready

🔒 Production-level environment configuration

⚙️ Environment Variables
Frontend (.env)
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
VITE_API_URL=https://your-backend.onrender.com
Backend (.env)
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLERK_SECRET_KEY=your_secret_key
💻 Local Development Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo
2️⃣ Setup Backend
cd backend
npm install
npm run dev
Runs on:

http://localhost:5000
3️⃣ Setup Frontend
cd client
npm install
npm run dev
Runs on:

http://localhost:5173
🚀 Deployment Guide
Backend (Render)
Root Directory: backend

Build Command: npm install

Start Command: npm start

Add environment variables:

MONGO_URI

CLERK_SECRET_KEY

Frontend (Vercel)
Root Directory: client

Install Command: npm install

Build Command: npm run build

Output Directory: dist

Add environment variables:

VITE_CLERK_PUBLISHABLE_KEY

VITE_API_URL

🔐 Authentication
Authentication is powered by Clerk.
Frontend uses publishable key.
Backend verifies using secret key.

📊 API Routes
Analyze Sentiment
POST /api/sentiment
Get Sentiment History
GET /api/sentiment
🧠 Future Improvements
AI model upgrade

Role-based authorization

Real-time analytics dashboard

Docker containerization

CI/CD pipeline integration

👨‍💻 Author
Sundram Sharma
Full Stack Developer
