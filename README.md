# 🚀 Real-Time Call Sentiment Analyzer

A full-stack **real-time call sentiment analysis application** built with the **MERN stack**, powered by **Deepgram**, **Gemini**, and **Clerk authentication**. This project analyzes live or transcribed call data to detect sentiment and provide meaningful conversational insights through a modern, responsive interface.

---

## 📌 Overview

The **Real-Time Call Sentiment Analyzer** is designed to process call conversations in real time or near real time, convert speech into text, analyze emotional tone and sentiment, and present results in an interactive dashboard.

This application combines:

* **Real-time speech processing**
* **AI-based sentiment analysis**
* **Secure authentication**
* **Modern animated UI**
* **Scalable MERN architecture**

It is useful for scenarios like customer support monitoring, sales call analysis, feedback tracking, and conversation intelligence systems.

---

## ⚙️ Tech Stack

### Frontend

* **React.js**
* **Framer Motion**
* **Lucide React**
* **Google Fonts**
* **Clerk** for authentication and session management

### Backend

* **Node.js**
* **Express.js**
* **Clerk** for backend authentication and route protection

### Database

* **MongoDB**

### AI / API Integrations

* **Deepgram API** for real-time speech-to-text transcription
* **Gemini API** for sentiment analysis and conversational understanding

---

## 🔐 Authentication

This project uses **Clerk** for secure authentication on both the frontend and backend.

### Clerk is used for:

* User sign up and login
* Session management
* Protecting private routes
* Verifying authenticated API requests
* Securing access to sentiment analysis features and call history

### Authentication Flow

1. User signs in through Clerk on the frontend
2. Clerk manages the session and authentication tokens
3. Authenticated requests are sent to the backend
4. Backend verifies the user using Clerk middleware
5. Protected sentiment analysis and call-related routes are unlocked only for authorized users

---

## ✨ Key Features

* **Real-time call transcription**
* **Live sentiment detection**
* **Speech-to-text processing using Deepgram**
* **AI-driven sentiment analysis using Gemini**
* **Secure login and protected routes with Clerk**
* **Modern responsive UI**
* **Smooth animations with Framer Motion**
* **Clean iconography using Lucide React**
* **Database integration for storing call history and results**
* **Scalable full-stack MERN architecture**

---

## 🧠 How It Works

1. A user logs into the application using Clerk
2. A live call or audio stream is captured
3. **Deepgram** converts call audio into text in real time
4. The transcribed text is sent to **Gemini**
5. Gemini analyzes the conversation and identifies sentiment such as:

   * Positive
   * Negative
   * Neutral
   * Mixed / emotional tone insights
6. Results are displayed on the frontend in an easy-to-read interface
7. Call transcripts and sentiment records can optionally be stored in MongoDB for future review

---

## 🎯 Use Cases

This project can be used in:

* **Customer support analytics**
* **Call center performance monitoring**
* **Sales conversation intelligence**
* **Client feedback analysis**
* **Real-time emotional tone monitoring**
* **Communication quality assessment**

---

## 📂 Project Structure

```bash
sentiment-analyzer/
│
├── client/                    # React frontend
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── auth/                  # Clerk frontend integration
│
├── server/                    # Node + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── middleware/            # Clerk auth middleware
│   ├── services/              # API integrations (Deepgram, Gemini)
│   └── config/
│
├── models/                    # MongoDB models
├── .env
└── README.md
```

---

## 🔌 API Integrations

### Deepgram API

Used for:

* Real-time speech recognition
* Audio transcription from calls
* Converting spoken conversations into analyzable text

### Gemini API

Used for:

* Sentiment analysis
* Tone and intent understanding
* Generating conversational insights from call transcripts

### Clerk

Used for:

* Frontend authentication
* Backend request verification
* Route protection and user session handling

---

## 🛠️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sentiment-analyzer.git
cd sentiment-analyzer
```

### 2. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Configure environment variables

Create a `.env` file in the **server** folder:

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
DEEPGRAM_API_KEY=your_deepgram_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
PORT=5000
```

Create a `.env` file in the **client** folder:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## ▶️ Running the Project

### Start backend

```bash
cd server
npm run dev
```

### Start frontend

```bash
cd client
npm start
```

---

## 🎨 UI and Design

The frontend is designed with a strong focus on user experience and clean visuals.

### UI libraries used:

* **Framer Motion** for smooth page and component animations
* **Lucide React** for lightweight and modern icons
* **Google Fonts** for polished typography

### Design goals:

* Responsive layout
* Clean dashboard presentation
* Real-time feedback visibility
* Modern animated interactions
* Easy readability during live analysis

---

## 📊 Core Workflow

```text
User Login (Clerk)
        ↓
Live Call Audio Input
        ↓
Deepgram Speech-to-Text
        ↓
Gemini Sentiment Analysis
        ↓
Frontend Visualization
        ↓
MongoDB Storage (optional)
```

---

## 🚧 Future Enhancements

* Speaker-wise sentiment separation
* Sentiment trend graphs during live calls
* Call summary generation
* Emotion detection beyond simple sentiment
* Role-based dashboards for teams and admins
* Exportable reports for analyzed calls
* WebSocket-based live analytics updates
* Multi-language call sentiment support

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit clearly
5. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**
GitHub: `https://github.com/your-username`

---

## ⭐ Support

If this project helped you or inspired you, give it a star on GitHub.
