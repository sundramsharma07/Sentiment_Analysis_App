import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Mic,
  Zap,
  Activity,
  TrendingUp,
  AlertCircle,
  ThumbsUp,
  Clock,
  User,
  Phone,
  MessageSquare,
  BarChart,
  Brain,
  Sparkles,
  X,
  Maximize2,
  Download,
  Share2
} from "lucide-react";

const WatchDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedTab, setSelectedTab] = useState("real-time");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(80);
  
  // Demo data
  const scenarios = [
    {
      id: 1,
      title: "Customer Support Call",
      description: "Resolving a billing issue with empathy",
      agent: "Sarah (Support Agent)",
      customer: "Michael (Customer)",
      duration: "2:45",
      sentiment: "Positive",
      emotion: "Empathetic",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Sales Discovery Call",
      description: "Understanding customer needs and pain points",
      agent: "David (Sales Rep)",
      customer: "Emma (Prospect)",
      duration: "4:20",
      sentiment: "Neutral → Positive",
      emotion: "Engaged",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Technical Support",
      description: "Troubleshooting with patience and clarity",
      agent: "Alex (Tech Support)",
      customer: "Robert (User)",
      duration: "3:15",
      sentiment: "Frustrated → Satisfied",
      emotion: "Patient",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const emotions = [
    { name: "Joy", value: 75, color: "from-yellow-400 to-amber-400" },
    { name: "Anger", value: 15, color: "from-rose-500 to-pink-500" },
    { name: "Sadness", value: 10, color: "from-blue-400 to-indigo-500" },
    { name: "Surprise", value: 30, color: "from-purple-400 to-violet-500" },
    { name: "Neutral", value: 50, color: "from-gray-400 to-gray-600" },
    { name: "Engaged", value: 85, color: "from-emerald-400 to-teal-500" }
  ];

  const conversation = [
    { speaker: "agent", text: "Hello! Thank you for calling. How can I assist you today?", time: "0:15", emotion: "Neutral" },
    { speaker: "customer", text: "Hi, I'm having issues with my monthly subscription charge.", time: "0:30", emotion: "Frustrated" },
    { speaker: "agent", text: "I understand, let me pull up your account. Can I have your email address?", time: "0:45", emotion: "Helpful" },
    { speaker: "customer", text: "It's michael@email.com. The charge is higher than usual.", time: "1:00", emotion: "Concerned" },
    { speaker: "agent", text: "I can see the issue. There was a promotional discount that expired last month.", time: "1:15", emotion: "Empathetic" },
    { speaker: "customer", text: "Oh, I didn't realize that. Is there anything you can do?", time: "1:30", emotion: "Hopeful" },
    { speaker: "agent", text: "Absolutely! I can apply a 20% loyalty discount for the next 3 months.", time: "1:45", emotion: "Helpful" },
    { speaker: "customer", text: "That would be great! Thank you so much for your help.", time: "2:00", emotion: "Grateful" },
    { speaker: "agent", text: "You're welcome! Is there anything else I can assist you with today?", time: "2:15", emotion: "Professional" }
  ];

  const metrics = [
    { label: "Sentiment Score", value: 85, change: "+12%", color: "text-emerald-500" },
    { label: "Emotion Accuracy", value: 97, change: "+2%", color: "text-blue-500" },
    { label: "Call Duration", value: "2:45", change: "-0:30", color: "text-amber-500" },
    { label: "Customer Satisfaction", value: 94, change: "+8%", color: "text-purple-500" }
  ];

  // Waveform simulation
  const waveformRef = useRef(null);
  const [waveformData, setWaveformData] = useState([]);

  useEffect(() => {
    // Generate initial waveform
    const data = Array.from({ length: 100 }, () => Math.random() * 80 + 20);
    setWaveformData(data);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
        
        // Update waveform
        setWaveformData(prev => {
          const newData = [...prev];
          newData.shift();
          newData.push(Math.random() * 80 + 20);
          return newData;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleScenarioChange = (index) => {
    setCurrentScenario(index);
    setDemoProgress(0);
    setIsPlaying(false);
  };

  const handleSkip = (seconds) => {
    const newProgress = Math.max(0, Math.min(100, demoProgress + seconds));
    setDemoProgress(newProgress);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate current demo time
  const demoTime = (demoProgress / 100) * 165; // 2:45 in seconds
  const currentTime = formatTime(demoTime); // FIXED: Changed callTime to currentTime

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            
            
          </Link>
          
          <div className="flex items-center gap-4">
            
            <Link
              to="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              ← Back Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Demo Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 font-semibold">Interactive Demo</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Real-Time</span> Voice Analysis
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI analyzes conversations, detects emotions, and provides actionable insights in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Demo Player */}
          <div className="lg:col-span-2 space-y-6">
            {/* Demo Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Player Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {scenarios[currentScenario].title}
                    </h3>
                    <p className="text-gray-600">{scenarios[currentScenario].description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="h-32 relative">
                  <div className="absolute inset-0 flex items-end">
                    {waveformData.map((height, index) => (
                      <motion.div
                        key={index}
                        animate={{ height: `${isPlaying ? height + Math.sin(Date.now() / 100 + index) * 10 : height}%` }}
                        transition={{ duration: 0.1 }}
                        className="flex-1 mx-0.5 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Call Participants */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{scenarios[currentScenario].agent}</div>
                      <div className="text-sm text-cyan-200">Agent</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{currentTime}</div> {/* FIXED: Changed callTime to currentTime */}
                    <div className="text-sm text-gray-300">Duration</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-semibold text-white text-right">{scenarios[currentScenario].customer}</div>
                      <div className="text-sm text-cyan-200 text-right">Customer</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Player Controls */}
              <div className="p-6">
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{currentTime}</span> {/* FIXED: Changed callTime to currentTime */}
                    <span>{scenarios[currentScenario].duration}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${demoProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleSkip(-10)}
                      className="p-3 hover:bg-gray-100 rounded-full"
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={handlePlayPause}
                      className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg transition-shadow"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => handleSkip(10)}
                      className="p-3 hover:bg-gray-100 rounded-full"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-gray-600" />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-24 accent-blue-500"
                      />
                    </div>
                    
                    <select
                      value={currentScenario}
                      onChange={(e) => handleScenarioChange(Number(e.target.value))}
                      className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                    >
                      {scenarios.map((scenario, index) => (
                        <option key={scenario.id} value={index}>
                          {scenario.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Live Analysis Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Live Analysis Dashboard</h3>
                <div className="flex gap-2">
                  {["real-time", "emotions", "sentiment", "insights"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium capitalize ${
                        selectedTab === tab
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {tab.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {selectedTab === "real-time" && (
                  <motion.div
                    key="real-time"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Live Conversation */}
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-4">Live Conversation Analysis</h4>
                      <div className="space-y-4 max-h-96 overflow-y-auto p-2">
                        {conversation.map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 rounded-xl ${
                              line.speaker === "agent"
                                ? "bg-blue-50 border-l-4 border-blue-500"
                                : "bg-purple-50 border-l-4 border-purple-500"
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    line.speaker === "agent"
                                      ? "bg-blue-100 text-blue-600"
                                      : "bg-purple-100 text-purple-600"
                                  }`}>
                                    {line.speaker === "agent" ? "A" : "C"}
                                  </div>
                                  <span className="font-semibold">
                                    {line.speaker === "agent" ? "Support Agent" : "Customer"}
                                  </span>
                                  <span className="text-sm text-gray-500">• {line.time}</span>
                                </div>
                                <p className="text-gray-700">{line.text}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                line.emotion === "Frustrated" ? "bg-rose-100 text-rose-700" :
                                line.emotion === "Grateful" ? "bg-emerald-100 text-emerald-700" :
                                "bg-blue-100 text-blue-700"
                              }`}>
                                {line.emotion}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedTab === "emotions" && (
                  <motion.div
                    key="emotions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="font-semibold text-gray-700">Emotion Detection</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {emotions.map((emotion, index) => (
                        <motion.div
                          key={emotion.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-700">{emotion.name}</span>
                            <span className="text-lg font-bold text-gray-900">{emotion.value}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${emotion.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${emotion.value}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedTab === "sentiment" && (
                  <motion.div
                    key="sentiment"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {metrics.map((metric, index) => (
                        <div key={metric.label} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">{metric.label}</div>
                            <div className={`text-sm font-semibold ${metric.color}`}>
                              {metric.change}
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-gray-900">{metric.value}{typeof metric.value === 'number' ? '%' : ''}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                        <h5 className="font-semibold text-blue-800">Sentiment Trend</h5>
                      </div>
                      <div className="h-32 flex items-end gap-1">
                        {[65, 70, 75, 80, 85, 90, 85].map((value, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${value}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t"
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mt-4">
                        <span>Start</span>
                        <span>Now</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedTab === "insights" && (
                  <motion.div
                    key="insights"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                        <div className="flex items-center gap-3 mb-4">
                          <ThumbsUp className="w-6 h-6 text-emerald-600" />
                          <h5 className="font-semibold text-emerald-800">Key Strength</h5>
                        </div>
                        <p className="text-emerald-700">
                          Agent showed excellent empathy when addressing customer concerns. This helped de-escalate frustration.
                        </p>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                        <div className="flex items-center gap-3 mb-4">
                          <AlertCircle className="w-6 h-6 text-amber-600" />
                          <h5 className="font-semibold text-amber-800">Improvement Opportunity</h5>
                        </div>
                        <p className="text-amber-700">
                          Consider asking more open-ended questions earlier to better understand customer needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Activity className="w-6 h-6 text-purple-600" />
                        <h5 className="font-semibold text-purple-800">Real-time Suggestions</h5>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Customer showed frustration at 0:30 - Suggest empathy statement</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Positive shift detected at 1:15 - Reinforcement opportunity</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>High engagement at 1:45 - Good time for upselling</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Demo Scenarios */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Demo Scenarios</h3>
              <div className="space-y-4">
                {scenarios.map((scenario, index) => (
                  <motion.button
                    key={scenario.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleScenarioChange(index)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      currentScenario === index
                        ? `bg-gradient-to-r ${scenario.color} text-white`
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{scenario.title}</div>
                        <div className={`text-sm ${currentScenario === index ? "text-white/90" : "text-gray-600"}`}>
                          {scenario.description}
                        </div>
                      </div>
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex justify-between items-center mt-3 text-sm">
                      <span>{scenario.duration}</span>
                      <span className={`px-2 py-1 rounded-full ${
                        currentScenario === index
                          ? "bg-white/20"
                          : "bg-gray-200"
                      }`}>
                        {scenario.sentiment}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-6">Live Statistics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200">Sentiment Accuracy</span>
                    <span className="text-xl font-bold">97.8%</span>
                  </div>
                  <div className="h-2 bg-blue-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                      initial={{ width: 0 }}
                      animate={{ width: "97.8%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200">Processing Speed</span>
                    <span className="text-xl font-bold">100ms</span>
                  </div>
                  <div className="h-2 bg-blue-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200">Emotions Detected</span>
                    <span className="text-xl font-bold">8</span>
                  </div>
                  <div className="flex gap-1">
                    {["😊", "😠", "😢", "😲", "😐", "😃", "🤔", "😌"].map((emoji, i) => (
                      <motion.span
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-2xl"
                      >
                        {emoji}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-200 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Ready to Transform Your Calls?</h4>
                <p className="text-gray-600 mb-6">
                  Start analyzing conversations with emotional intelligence today.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a personalized demo with our team to see how VoiceBloom AI can transform your customer conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Book a Demo
            </Link>
            <Link
              to="/features"
              className="px-8 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WatchDemo;