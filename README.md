
# 🚀 Sentiment Analyzer App

A modern, full-stack **Sentiment Analysis Web Application** built using the **MERN stack**, enhanced with **AI APIs** and secure **authentication via Clerk**. This app delivers real-time sentiment insights with a polished, interactive user experience.

---

## 📌 Overview

The **Sentiment Analyzer App** allows users to input text or speech and instantly receive sentiment analysis results such as **positive, negative, or neutral classification**.

It combines:

* AI-powered analysis
* Secure user authentication
* Real-time processing
* Modern UI/UX

---

## ⚙️ Tech Stack

### 🖥️ Frontend

* React.js
* Framer Motion
* Lucide React
* Google Fonts
* Clerk (Authentication UI & session handling)

### 🧠 Backend

* Node.js
* Express.js
* Clerk (JWT verification & user authentication middleware)

### 🗄️ Database

* MongoDB

---

## 🔐 Authentication (Clerk)

This project uses **Clerk** for seamless authentication across both frontend and backend.

### Key Features:

* 🔑 Secure user sign-up & login
* 🔄 Session management
* 🧾 JWT-based authentication for backend APIs
* 🔒 Protected routes (frontend + backend)

### How It Works:

1. User signs in using Clerk (frontend)
2. Clerk manages session & tokens
3. Token is sent with API requests
4. Backend verifies token using Clerk middleware
5. Only authenticated users can access protected routes

---

## 🔌 APIs & Integrations

* **Gemini API** → Sentiment analysis & NLP
* **Deepgram API** → Speech-to-text conversion

---

## ✨ Features

* 🔍 Real-time sentiment analysis
* 🎤 Voice input support (Deepgram)
* 🔐 Secure authentication (Clerk)
* 🎨 Smooth UI animations (Framer Motion)
* ⚡ Fast and responsive design
* 📱 Mobile-friendly interface
* 🗂️ Optional data persistence with MongoDB

---

## 🧩 How It Works

1. User logs in via Clerk
2. User inputs text or voice
3. Voice → converted to text (Deepgram)
4. Text → analyzed using Gemini
5. Result displayed with animations
6. (Optional) Stored in database

---

## 📂 Project Structure

```
sentiment-analyzer/
│
├── client/          # React frontend
│   ├── components/
│   ├── pages/
│   └── auth/        # Clerk integration
│
├── server/          # Node + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── middleware/  # Clerk auth middleware
│   └── config/
│
├── models/
├── .env
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/sentiment-analyzer.git
cd sentiment-analyzer
```

---

### 2️⃣ Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the **server** directory:

```
MONGO_URI=your_mongodb_connection
GEMINI_API_KEY=your_gemini_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
PORT=5000
```

And in the **client**:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

### 4️⃣ Run the App

```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm start
```

---

## 🎨 UI & Design Highlights

* Smooth animations with **Framer Motion**
* Clean icon system via **Lucide React**
* Modern typography using **Google Fonts**
* Minimal and responsive layout

---

## 🚧 Future Improvements

* 📊 Sentiment visualization dashboards
* 🧠 More advanced NLP insights
* 🌐 Multi-language support
* 🔐 Role-based access control
* ☁️ Deployment (Docker / CI-CD)

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repo
2. Create a branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

MIT License

---

## 💡 Author

Sundram Kumar
GitHub: https://github.com/your-username

---

## ⭐ Support

If you found this project useful, give it a ⭐ on GitHub!
