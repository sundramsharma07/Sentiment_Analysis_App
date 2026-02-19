import { useState, useRef, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

import api from "../../api/api";
import {
  Upload,
  Mic,
  Users,
  BarChart3,
  History,
  UserPlus,
  FileAudio,
  Volume2,
  Download,
  Filter,
  Search,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  Menu as MenuIcon,
  X,
  ChevronRight,
  Activity,
  Target,
  ThumbsUp,
  ThumbsDown,
  Meh,
  RefreshCw,
  User,
  Mail,
  Phone,
  Globe as GlobeIcon,
  FileText,
  Play,
  StopCircle,
  AlertCircle,
  CheckCircle
} from "lucide-react";



export default function EnhancedSentimentAnalysisDashboard() {
  // State for sidebar and navigation
  const { isLoaded, isSignedIn } = useUser();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  // Audio upload states
  const [audio, setAudio] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  
  // Microphone recording states
  const [recording, setRecording] = useState(false);
  const [micResult, setMicResult] = useState(null);
  const [activeTab, setActiveTab] = useState("upload");
  const [history, setHistory] = useState([]);
  
  // Customer management
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  
  // Dashboard stats from API
  const [dashboardStats, setDashboardStats] = useState({
    total: 0,
    positive: 0,
    negative: 0,
    neutral: 0,
    avgConfidence: 0
  });
  
  // Chart data
  const [sentimentDistribution, setSentimentDistribution] = useState([0, 0, 0]);
  const [weeklyTrend, setWeeklyTrend] = useState([0, 0, 0, 0, 0, 0, 0]);
  
  // Audio visualization
  const [audioLevels, setAudioLevels] = useState([]);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const animationRef = useRef(null);

  // Add sample Indian customer names for testing
  const indianNames = [
    "Rajesh Kumar", "Priya Sharma", "Amit Patel", "Deepika Singh", "Vikram Mehta",
    "Anjali Gupta", "Rahul Verma", "Sneha Reddy", "Karthik Iyer", "Pooja Joshi",
    "Arun Choudhary", "Swati Mishra", "Manoj Tiwari", "Neha Desai", "Sanjay Nair"
  ];

  // Fetch all data on mount
  useEffect(() => {
  if (!isLoaded || !isSignedIn) return;

  const load = async () => {
    await fetchAllData();
    initializeAudioVisualization();
  };

  load();
}, [isLoaded, isSignedIn]);


  const fetchAllData = async () => {
    try {
      await Promise.all([
        fetchHistory(),
        fetchDashboardStats(),
        fetchCustomers()
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await api.get("/sentiment/history");
      setHistory(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch history:", err);
      // For demo, create sample data
      const sampleHistory = Array.from({ length: 8 }, (_, i) => ({
        _id: `sample-${i}`,
        customerName: indianNames[i % indianNames.length],
        sentiment: i % 3 === 0 ? "positive" : i % 3 === 1 ? "negative" : "neutral",
        confidence: 0.7 + (i * 0.03),
        createdAt: new Date(Date.now() - i * 3600000).toISOString(),
        file: i % 2 === 0 ? "mic-recording.webm" : "audio-file.mp3",
        method: i % 2 === 0 ? "recording" : "upload"
      }));
      setHistory(sampleHistory);
    }
  };

  const fetchDashboardStats = async () => {
    try {
      const res = await api.get("/sentiment/stats");
      const stats = res.data.stats || res.data;
      setDashboardStats(stats);
      
      if (stats.total > 0) {
        const distribution = [
          Math.round((stats.positive / stats.total) * 100),
          Math.round((stats.negative / stats.total) * 100),
          Math.round((stats.neutral / stats.total) * 100)
        ];
        setSentimentDistribution(distribution);
        
        const trend = Array(7).fill(0).map(() => Math.floor(Math.random() * 30) + 50);
        setWeeklyTrend(trend);
      }
    } catch (err) {
      console.error("Failed to fetch stats:", err);
      // Demo stats
      const demoStats = {
        total: 156,
        positive: 89,
        negative: 42,
        neutral: 25,
        avgConfidence: 82.5
      };
      setDashboardStats(demoStats);
      setSentimentDistribution([57, 27, 16]);
      setWeeklyTrend([65, 72, 68, 75, 80, 78, 82]);
    }
  };

  const fetchCustomers = async () => {
    try {
      // In a real app, fetch customers from API
      // For demo, create sample customers with Indian names
      const sampleCustomers = indianNames.map((name, index) => ({
        id: `cust-${index}`,
        name: name,
        email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
        phone: `+91 ${Math.floor(9000000000 + Math.random() * 99999999)}`,
        dateAdded: new Date(Date.now() - index * 86400000).toISOString(),
        totalAnalyses: Math.floor(Math.random() * 20) + 5,
        positiveCount: Math.floor(Math.random() * 15) + 3,
        negativeCount: Math.floor(Math.random() * 8) + 1,
        neutralCount: Math.floor(Math.random() * 5) + 1,
        satisfactionScore: Math.floor(Math.random() * 40) + 60,
        analysisHistory: Array.from({ length: Math.floor(Math.random() * 5) + 2 }, (_, i) => ({
          id: `analysis-${index}-${i}`,
          sentiment: i % 3 === 0 ? "positive" : i % 3 === 1 ? "negative" : "neutral",
          confidence: 0.65 + (Math.random() * 0.3),
          date: new Date(Date.now() - i * 86400000).toISOString(),
          method: i % 2 === 0 ? "recording" : "upload",
          fileName: i % 2 === 0 ? `recording-${index}-${i}.webm` : `audio-${index}-${i}.mp3`
        }))
      }));
      setCustomers(sampleCustomers);
    } catch (err) {
      console.error("Failed to fetch customers:", err);
    }
  };

  const initializeAudioVisualization = () => {
    const levels = Array.from({ length: 40 }, () => Math.random() * 30 + 10);
    setAudioLevels(levels);
  };

  const updateAudioVisualization = () => {
    if (recording) {
      const newLevels = audioLevels.map(level => 
        Math.min(100, Math.max(10, level + (Math.random() * 20 - 10)))
      );
      setAudioLevels(newLevels);
      animationRef.current = requestAnimationFrame(updateAudioVisualization);
    }
  };

  // Check if customer is selected before analysis
  const checkCustomerBeforeAnalysis = () => {
    if (!selectedCustomer) {
      setShowCustomerModal(true);
      return false;
    }
    return true;
  };

  // Upload audio analysis
  const analyzeAudio = async () => {
    if (!audio) {
      alert("Please select an audio file first");
      return;
    }
    if (!checkCustomerBeforeAnalysis()) return;
    
    const formData = new FormData();
    formData.append("audio", audio);
    formData.append("customerId", selectedCustomer.id);
    formData.append("customerName", selectedCustomer.name);
    
    try {
      setUploadLoading(true);
      const res = await api.post("/sentiment/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      
      const result = res.data;
      setUploadResult(result);
      
      // Update customer stats
      updateCustomerAnalysis(selectedCustomer.id, result);
      
      await fetchAllData();
    } catch (err) {
      console.error("Error analyzing audio:", err);
      alert("Error analyzing audio. Please try again.");
    } finally {
      setUploadLoading(false);
    }
  };

  // Handle microphone recording
  const startRecording = async () => {
    if (!checkCustomerBeforeAnalysis()) return;
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });
      
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = e => audioChunksRef.current.push(e.data);
      
      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm;codecs=opus" });
        const formData = new FormData();
        formData.append("audio", blob, "mic-recording.webm");
        formData.append("customerId", selectedCustomer.id);
        formData.append("customerName", selectedCustomer.name);
        
        try {
          const res = await api.post("/sentiment/analyze", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          });
          
          const result = res.data;
          setMicResult(result);
          
          // Update customer stats
          updateCustomerAnalysis(selectedCustomer.id, result);
          
          await fetchAllData();
        } catch (error) {
          console.error("Error analyzing recording:", error);
          alert("Error analyzing recording");
        }
        
        stream.getTracks().forEach(track => track.stop());
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };

      mediaRecorderRef.current.start();
      setRecording(true);
      updateAudioVisualization();
    } catch (error) {
      console.error("Microphone access denied:", error);
      alert("Please allow microphone access to use this feature.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
      setRecording(false);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  // Add new customer
  const addCustomer = () => {
    if (!newCustomer.name.trim()) {
      alert("Please enter customer name");
      return;
    }
    
    const customer = {
      id: Date.now(),
      ...newCustomer,
      dateAdded: new Date().toISOString(),
      totalAnalyses: 0,
      positiveCount: 0,
      negativeCount: 0,
      neutralCount: 0,
      satisfactionScore: 0,
      analysisHistory: []
    };
    
    setCustomers(prev => [customer, ...prev]);
    setNewCustomer({ name: "", email: "", phone: "" });
    setShowAddCustomer(false);
    setSelectedCustomer(customer);
  };

  // Update customer analysis history and stats
  const updateCustomerAnalysis = (customerId, analysisResult) => {
    setCustomers(prev => prev.map(customer => {
      if (customer.id === customerId) {
        const sentiment = analysisResult.sentiment?.toLowerCase();
        const newPositiveCount = sentiment === 'positive' ? customer.positiveCount + 1 : customer.positiveCount;
        const newNegativeCount = sentiment === 'negative' ? customer.negativeCount + 1 : customer.negativeCount;
        const newNeutralCount = sentiment === 'neutral' ? customer.neutralCount + 1 : customer.neutralCount;
        const totalAnalyses = customer.totalAnalyses + 1;
        
        // Calculate satisfaction score (0-100)
        const satisfactionScore = totalAnalyses > 0 
          ? Math.round((newPositiveCount / totalAnalyses) * 100)
          : 0;
        
        return {
          ...customer,
          totalAnalyses,
          positiveCount: newPositiveCount,
          negativeCount: newNegativeCount,
          neutralCount: newNeutralCount,
          satisfactionScore,
          analysisHistory: [
            {
              id: Date.now(),
              ...analysisResult,
              date: new Date().toISOString(),
              method: analysisResult.file?.includes('mic') ? 'recording' : 'upload',
              fileName: analysisResult.file?.includes('mic') ? 'recording.webm' : 'audio-file.mp3'
            },
            ...customer.analysisHistory
          ].slice(0, 10) // Keep only last 10 analyses
        };
      }
      return customer;
    }));
  };

  // Helper functions
  const getSentimentColor = (sentiment) => {
    const lowerSentiment = sentiment?.toLowerCase();
    switch(lowerSentiment) {
      case "positive": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "negative": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getSentimentIcon = (sentiment) => {
    const lowerSentiment = sentiment?.toLowerCase();
    switch(lowerSentiment) {
      case "positive": return <ThumbsUp className="w-4 h-4" />;
      case "negative": return <ThumbsDown className="w-4 h-4" />;
      default: return <Meh className="w-4 h-4" />;
    }
  };

  const getSentimentEmoji = (sentiment) => {
    const lowerSentiment = sentiment?.toLowerCase();
    switch(lowerSentiment) {
      case "positive": return "😊";
      case "negative": return "😞";
      default: return "😐";
    }
  };

  const getSentimentExplanation = (sentiment) => {
    const lowerSentiment = sentiment?.toLowerCase();
    switch(lowerSentiment) {
      case "positive": return "Positive sentiment indicates satisfaction, happiness, or approval in the audio.";
      case "negative": return "Negative sentiment indicates dissatisfaction, anger, or disapproval in the audio.";
      default: return "Neutral sentiment indicates mixed or no clear emotional tone in the audio.";
    }
  };

  const formatConfidence = (confidence) => {
    return typeof confidence === 'number' 
      ? (confidence * 100).toFixed(0) 
      : "0";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Calculate chart heights
  const chartHeight = 200;
  const maxTrendValue = Math.max(...weeklyTrend, 1);
  const barHeights = weeklyTrend.map(value => (value / maxTrendValue) * (chartHeight - 40));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SentimentPro
                </h1>
                <p className="text-xs text-gray-500">Voice Analysis Suite</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`flex items-center w-full p-3 rounded-xl transition-all ${
                activeMenu === "dashboard"
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              <span className="font-medium">Dashboard</span>
              {activeMenu === "dashboard" && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>

            <button
              onClick={() => setActiveMenu("customers")}
              className={`flex items-center w-full p-3 rounded-xl transition-all ${
                activeMenu === "customers"
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Users className="w-5 h-5 mr-3" />
              <span className="font-medium">Customers</span>
              {activeMenu === "customers" && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>

            <button
              onClick={() => setActiveMenu("analysis")}
              className={`flex items-center w-full p-3 rounded-xl transition-all ${
                activeMenu === "analysis"
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Activity className="w-5 h-5 mr-3" />
              <span className="font-medium">Sentiment Analysis</span>
              {activeMenu === "analysis" && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>

            <button
              onClick={() => setActiveMenu("records")}
              className={`flex items-center w-full p-3 rounded-xl transition-all ${
                activeMenu === "records"
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <History className="w-5 h-5 mr-3" />
              <span className="font-medium">Analysis Records</span>
              {activeMenu === "records" && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <button className="flex items-center w-full p-3 text-gray-600 rounded-xl hover:bg-gray-50">
                <Settings className="w-5 h-5 mr-3" />
                <span className="font-medium">Settings</span>
              </button>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-gray-600 rounded-lg hover:bg-gray-100"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
              <h1 className="text-2xl font-bold text-gray-800">
                {activeMenu === "dashboard" && "Dashboard"}
                {activeMenu === "customers" && "Customers"}
                {activeMenu === "analysis" && "Sentiment Analysis"}
                {activeMenu === "records" && "Analysis Records"}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={fetchAllData}
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Data
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {activeMenu === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Analyses</p>
                      <p className="text-3xl font-bold text-gray-800 mt-2">{dashboardStats.total}</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600" style={{ width: '100%' }} />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Positive</p>
                      <p className="text-3xl font-bold text-emerald-600 mt-2">{dashboardStats.positive}</p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl">
                      <ThumbsUp className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-500" 
                      style={{ width: `${(dashboardStats.positive / Math.max(dashboardStats.total, 1)) * 100}%` }} 
                    />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Negative</p>
                      <p className="text-3xl font-bold text-red-600 mt-2">{dashboardStats.negative}</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-xl">
                      <ThumbsDown className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500" 
                      style={{ width: `${(dashboardStats.negative / Math.max(dashboardStats.total, 1)) * 100}%` }} 
                    />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Avg Confidence</p>
                      <p className="text-3xl font-bold text-purple-600 mt-2">
  {dashboardStats.avgConfidence ? dashboardStats.avgConfidence.toFixed(1) : '0'}%
</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500" 
                      style={{ width: `${dashboardStats.avgConfidence}%` }} 
                    />
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sentiment Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Sentiment Distribution</h2>
                    <Filter className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-64 flex items-end justify-center gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-12 bg-gradient-to-t from-emerald-500 to-emerald-600 rounded-t-xl transition-all hover:scale-105"
                        style={{ height: `${sentimentDistribution[0] * 2}px` }}
                      />
                      <span className="mt-2 text-lg font-bold text-gray-800">{sentimentDistribution[0]}%</span>
                      <span className="text-emerald-600 text-sm font-medium">Positive</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-12 bg-gradient-to-t from-red-500 to-red-600 rounded-t-xl transition-all hover:scale-105"
                        style={{ height: `${sentimentDistribution[1] * 2}px` }}
                      />
                      <span className="mt-2 text-lg font-bold text-gray-800">{sentimentDistribution[1]}%</span>
                      <span className="text-red-600 text-sm font-medium">Negative</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-12 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-xl transition-all hover:scale-105"
                        style={{ height: `${sentimentDistribution[2] * 2}px` }}
                      />
                      <span className="mt-2 text-lg font-bold text-gray-800">{sentimentDistribution[2]}%</span>
                      <span className="text-blue-600 text-sm font-medium">Neutral</span>
                    </div>
                  </div>
                </div>

                {/* Weekly Trend */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Weekly Trend</h2>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="h-64 flex items-end justify-between gap-2 mb-6">
                    {barHeights.map((height, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div className="relative w-full">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-xl transition-all hover:opacity-80"
                            style={{ height: `${height}px` }}
                          />
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                            {["M", "T", "W", "T", "F", "S", "S"][index]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Analyses Table */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Recent Analyses</h2>
                  <button 
                    onClick={fetchHistory}
                    className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-200">
                        <th className="pb-3 font-medium">Customer Name</th>
                        <th className="pb-3 font-medium">Date & Time</th>
                        <th className="pb-3 font-medium">Sentiment Detected</th>
                        <th className="pb-3 font-medium">Confidence Score</th>
                        <th className="pb-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="py-8 text-center text-gray-500">
                            No analyses yet. Upload or record audio to get started!
                          </td>
                        </tr>
                      ) : (
                        history.slice(0, 5).map((item) => (
                          <tr key={item._id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4">
                              <div className="flex items-center">
                                <User className="w-4 h-4 text-gray-400 mr-3" />
                                <span className="font-medium text-gray-800">
                                  {item.customerName || "Unknown Customer"}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 text-gray-600">{formatDate(item.createdAt)}</td>
                            <td className="py-4">
                              <div className="flex items-center gap-2">
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSentimentColor(item.sentiment)}`}>
                                  {getSentimentIcon(item.sentiment)}
                                  <span className="ml-2 capitalize">{item.sentiment?.toLowerCase()}</span>
                                </div>
                                <span className="text-lg">{getSentimentEmoji(item.sentiment)}</span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {getSentimentExplanation(item.sentiment)}
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center">
                                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-3">
                                  <div 
                                    className={`h-full ${
                                      item.sentiment?.toLowerCase() === 'positive' ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                                      item.sentiment?.toLowerCase() === 'negative' ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                                      'bg-gradient-to-r from-blue-500 to-cyan-500'
                                    }`}
                                    style={{ width: `${formatConfidence(item.confidence)}%` }}
                                  />
                                </div>
                                <span className="font-bold text-gray-800">{formatConfidence(item.confidence)}%</span>
                              </div>
                            </td>
                            <td className="py-4">
                              <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                                <Download className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === "customers" && (
            <div className="space-y-6">
              {/* Customer Management Header */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Customer Management</h2>
                    <p className="text-gray-600 mt-1">Manage your customer database and analysis history</p>
                  </div>
                  <button
                    onClick={() => setShowAddCustomer(true)}
                    className="flex items-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add New Customer
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search customers by name, email, or phone..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Add Customer Modal */}
                {showAddCustomer && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Add Customer Name</h3>
                        <button
                          onClick={() => setShowAddCustomer(false)}
                          className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Customer Name *
                          </label>
                          <input
                            type="text"
                            value={newCustomer.name}
                            onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Customer Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={newCustomer.email}
                            onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="customer@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={newCustomer.phone}
                            onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="flex space-x-3 pt-4">
                          <button
                            onClick={addCustomer}
                            className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg"
                          >
                            Add New Customer
                          </button>
                          <button
                            onClick={() => setShowAddCustomer(false)}
                            className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Customers List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {customers.length === 0 ? (
                    <div className="col-span-3 text-center py-12">
                      <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-gray-600 mb-2">No Customers Yet</h3>
                      <p className="text-gray-500 mb-6">Add your first customer to start analyzing their sentiment</p>
                      <button
                        onClick={() => setShowAddCustomer(true)}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg"
                      >
                        <UserPlus className="w-5 h-5 mr-2" />
                        Add First Customer
                      </button>
                    </div>
                  ) : (
                    customers.map(customer => (
                      <div
                        key={customer.id}
                        className={`bg-white border rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer ${
                          selectedCustomer?.id === customer.id
                            ? 'border-blue-500 ring-2 ring-blue-100'
                            : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedCustomer(customer)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                            <User className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-right">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {customer.totalAnalyses} Analysis
                            </span>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{customer.name}</h3>
                        {customer.email && (
                          <div className="flex items-center text-gray-600 text-sm mb-1">
                            <Mail className="w-4 h-4 mr-2" />
                            {customer.email}
                          </div>
                        )}
                        {customer.phone && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <Phone className="w-4 h-4 mr-2" />
                            {customer.phone}
                          </div>
                        )}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500">
                              Satisfaction: <span className="font-bold">{customer.satisfactionScore}%</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(customer.dateAdded).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Selected Customer Details */}
              {selectedCustomer && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mr-4">
                        <User className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{selectedCustomer.name}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          {selectedCustomer.email && (
                            <div className="flex items-center text-gray-600">
                              <Mail className="w-4 h-4 mr-2" />
                              {selectedCustomer.email}
                            </div>
                          )}
                          {selectedCustomer.phone && (
                            <div className="flex items-center text-gray-600">
                              <Phone className="w-4 h-4 mr-2" />
                              {selectedCustomer.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCustomer(null)}
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Customer Analysis Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-500">Total Analyses</div>
                      <div className="text-2xl font-bold text-gray-800 mt-1">{selectedCustomer.totalAnalyses}</div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <div className="text-sm text-emerald-600">Positive</div>
                      <div className="text-2xl font-bold text-emerald-700 mt-1">{selectedCustomer.positiveCount}</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="text-sm text-red-600">Negative</div>
                      <div className="text-2xl font-bold text-red-700 mt-1">{selectedCustomer.negativeCount}</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-blue-600">Satisfaction</div>
                      <div className="text-2xl font-bold text-blue-700 mt-1">{selectedCustomer.satisfactionScore}%</div>
                    </div>
                  </div>

                  {/* Customer Recordings List */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Recordings List</h4>
                    {selectedCustomer.analysisHistory && selectedCustomer.analysisHistory.length > 0 ? (
                      <div className="space-y-3">
                        {selectedCustomer.analysisHistory.map(analysis => (
                          <div key={analysis.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${getSentimentColor(analysis.sentiment)}`}>
                                {getSentimentIcon(analysis.sentiment)}
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  {analysis.method === 'recording' ? 'Recording' : 'Upload'}: {analysis.fileName}
                                </p>
                                <p className="text-sm text-gray-500">{formatDate(analysis.date)}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {getSentimentExplanation(analysis.sentiment)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className={`font-bold ${
                                analysis.sentiment?.toLowerCase() === 'positive' ? 'text-emerald-600' :
                                analysis.sentiment?.toLowerCase() === 'negative' ? 'text-red-600' :
                                'text-blue-600'
                              }`}>
                                {formatConfidence(analysis.confidence)}%
                              </span>
                              <div className="flex items-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                                  <Play className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                                  <Download className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <FileAudio className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>No recordings yet for this customer</p>
                      </div>
                    )}
                  </div>

                  {/* Customer Actions */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => {
                        setActiveMenu("analysis");
                        setActiveTab("mic");
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg"
                    >
                      <Mic className="w-5 h-5 inline mr-2" />
                      Live Recording
                    </button>
                    <button 
                      onClick={() => {
                        setActiveMenu("analysis");
                        setActiveTab("upload");
                      }}
                      className="flex-1 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50"
                    >
                      <Upload className="w-5 h-5 inline mr-2" />
                      Upload Audio File
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeMenu === "analysis" && (
            <div className="max-w-4xl mx-auto">
              {/* Customer Required Modal */}
              {showCustomerModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-red-100 rounded-xl">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Please select or add a customer first</h3>
                        <p className="text-gray-600">Customer name is required for analysis</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => {
                            setShowCustomerModal(false);
                            setActiveMenu("customers");
                            setShowAddCustomer(true);
                          }}
                          className="py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg"
                        >
                          Add New Customer
                        </button>
                        <button
                          onClick={() => {
                            setShowCustomerModal(false);
                            setActiveMenu("customers");
                          }}
                          className="py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50"
                        >
                          Select Customer
                        </button>
                      </div>
                      <button
                        onClick={() => setShowCustomerModal(false)}
                        className="w-full py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Customer Selection Banner */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Sentiment Analysis</h2>
                      <p className="text-gray-600 mt-1">
                        {selectedCustomer 
                          ? `Analyzing sentiment for ${selectedCustomer.name}`
                          : "Select a customer to begin analysis"}
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveMenu("customers")}
                      className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      {selectedCustomer ? "Change Customer" : "Select Customer"}
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-gray-200 mb-8">
                    <button
                      onClick={() => setActiveTab("upload")}
                      className={`flex-1 py-4 text-center font-medium transition-all ${
                        activeTab === "upload" 
                          ? "text-blue-600 border-b-2 border-blue-500" 
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Upload className="w-5 h-5" />
                        Upload Audio File
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab("mic")}
                      className={`flex-1 py-4 text-center font-medium transition-all ${
                        activeTab === "mic" 
                          ? "text-purple-600 border-b-2 border-purple-500" 
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Mic className="w-5 h-5" />
                        Live Recording
                      </div>
                    </button>
                  </div>

                  {/* Upload Tab */}
                  {activeTab === "upload" && (
                    <div className="space-y-6">
                      <div
                        className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all ${
                          dragOver 
                            ? "border-blue-500 bg-blue-50" 
                            : "border-gray-300 hover:border-gray-400 bg-gray-50"
                        }`}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setDragOver(false);
                          const file = e.dataTransfer.files[0];
                          if (file?.type.startsWith('audio/')) setAudio(file);
                        }}
                      >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6">
                          <Upload className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          Upload Audio File
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                          Drag & drop your audio file here, or click to browse supported formats
                        </p>
                        
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) => setAudio(e.target.files?.[0] || null)}
                          className="hidden"
                          id="audio-upload"
                        />
                        <label
                          htmlFor="audio-upload"
                          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg cursor-pointer transition-all"
                        >
                          <Upload className="w-5 h-5" />
                          Browse Files
                        </label>
                        
                        <div className="mt-6 text-sm text-gray-500">
                          Supports: MP3, WAV, WEBM, OGG, M4A, AAC, FLAC (Max 50MB)
                        </div>
                      </div>

                      {/* Selected File Preview */}
                      {audio && (
                        <div className="animate-fadeIn">
                          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-blue-100 rounded-xl">
                                <FileAudio className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-bold text-gray-800">{audio.name}</p>
                                <p className="text-sm text-gray-500">
                                  {(audio.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setAudio(null)}
                              className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Analyze Button */}
                      <button
                        onClick={analyzeAudio}
                        disabled={uploadLoading || !audio}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                          uploadLoading
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : !audio
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:scale-[1.02]"
                        }`}
                      >
                        {uploadLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            Analyzing Audio...
                          </>
                        ) : (
                          <>
                            <Activity className="w-6 h-6" />
                            Analyze Sentiment
                          </>
                        )}
                      </button>

                      {/* Upload Results - More Concise Display */}
                      {uploadResult && (
                        <div className="animate-fadeIn">
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                              <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
                              <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-xl font-bold text-lg ${getSentimentColor(uploadResult.sentiment)}`}>
                                  <div className="flex items-center gap-2">
                                    {getSentimentIcon(uploadResult.sentiment)}
                                    <span className="capitalize">{uploadResult.sentiment?.toLowerCase()}</span>
                                    <span className="text-2xl ml-2">{getSentimentEmoji(uploadResult.sentiment)}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Concise Sentiment Summary */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <p className="text-gray-600">Customer Name</p>
                                  <p className="text-xl font-bold text-gray-800">{selectedCustomer?.name}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-gray-600">Confidence Score</p>
                                  <p className="text-3xl font-bold text-blue-600">
                                    {formatConfidence(uploadResult.confidence)}%
                                  </p>
                                </div>
                              </div>
                              
                              <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div 
                                  className={`h-full rounded-full transition-all duration-1000 ${
                                    uploadResult.sentiment?.toLowerCase() === 'positive' ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                                    uploadResult.sentiment?.toLowerCase() === 'negative' ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                                    'bg-gradient-to-r from-blue-500 to-cyan-500'
                                  }`}
                                  style={{ width: `${formatConfidence(uploadResult.confidence)}%` }}
                                />
                              </div>
                              
                              <div className="text-sm text-gray-500 mt-4">
                                {getSentimentExplanation(uploadResult.sentiment)}
                              </div>
                              
                              <div className="flex justify-between text-sm text-gray-600 mt-6">
                                <div>
                                  <p className="font-medium">Analysis Type</p>
                                  <p>Voice Sentiment</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">Timestamp</p>
                                  <p>{new Date().toLocaleTimeString()}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Microphone Tab */}
                  {activeTab === "mic" && (
                    <div className="space-y-8">
                      {/* Audio Visualizer */}
                      <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                        <div className="flex items-center justify-center h-48 mb-6">
                          {recording ? (
                            <div className="flex items-center justify-center gap-1">
                              {audioLevels.map((level, i) => (
                                <div
                                  key={i}
                                  className="w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full transition-all duration-100"
                                  style={{
                                    height: `${level}px`,
                                    animationDelay: `${i * 50}ms`
                                  }}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                                <Mic className="w-16 h-16 text-purple-400" />
                              </div>
                              <p className="text-gray-600">Ready to Record</p>
                            </div>
                          )}
                        </div>

                        {/* Recording Controls */}
                        <div className="flex flex-col items-center gap-6">
                          <button
                            onClick={recording ? stopRecording : startRecording}
                            className={`relative group flex items-center justify-center w-24 h-24 rounded-full transition-all duration-300 ${
                              recording
                                ? "bg-gradient-to-br from-red-500 to-pink-600 shadow-lg shadow-red-500/30"
                                : "bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-500/30"
                            }`}
                          >
                            <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/30 transition-all"></div>
                            {recording ? (
                              <div className="relative">
                                <div className="absolute inset-0 animate-ping bg-red-400 rounded-full w-6 h-6"></div>
                                <StopCircle className="w-12 h-12 text-white relative" />
                              </div>
                            ) : (
                              <Mic className="w-12 h-12 text-white" />
                            )}
                          </button>

                          <div className="text-center">
                            <p className="text-xl font-bold text-gray-800">
                              {recording ? "Recording in progress..." : "Ready to Record"}
                            </p>
                            <p className="text-gray-600 mt-2">
                              {recording ? "Click to stop and analyze" : "Click microphone to start recording"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Microphone Results - More Concise */}
                      {micResult && (
                        <div className="animate-fadeIn">
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 p-6">
                            <div className="flex items-center justify-between mb-6">
                              <div>
                                <h3 className="font-bold text-gray-800 text-xl">Recording Analysis Complete</h3>
                                <p className="text-gray-600">Voice sentiment detected from microphone</p>
                              </div>
                              <div className={`p-3 rounded-xl font-bold ${getSentimentColor(micResult.sentiment)}`}>
                                <div className="flex items-center gap-2">
                                  {getSentimentIcon(micResult.sentiment)}
                                  <span className="capitalize">{micResult.sentiment?.toLowerCase()}</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <p className="text-gray-600">Customer Name</p>
                                  <p className="text-xl font-bold text-gray-800">{selectedCustomer?.name}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-gray-600">Confidence Score</p>
                                  <p className="text-3xl font-bold text-purple-600">
                                    {formatConfidence(micResult.confidence)}%
                                  </p>
                                </div>
                              </div>
                              
                              <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div 
                                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                                  style={{ width: `${formatConfidence(micResult.confidence)}%` }}
                                />
                              </div>
                              
                              <div className="text-sm text-gray-500 mt-4">
                                {getSentimentExplanation(micResult.sentiment)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeMenu === "records" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Analysis Records</h2>
                    <p className="text-gray-600 mt-1">Complete history of all sentiment analyses</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search records..."
                        className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <select className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Sentiments</option>
                      <option>Positive Only</option>
                      <option>Negative Only</option>
                      <option>Neutral Only</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Customer Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date & Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Method</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Sentiment Detected</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Confidence Score</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {history.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-6 py-12 text-center">
                            <FileAudio className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-600 mb-2">No analysis records yet</h3>
                            <p className="text-gray-500">Start analyzing audio to see records here</p>
                          </td>
                        </tr>
                      ) : (
                        history.map((item) => (
                          <tr key={item._id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-3">
                                  <User className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="font-medium text-gray-800">
                                  {item.customerName || "Unknown Customer"}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{formatDate(item.createdAt)}</td>
                            <td className="px-6 py-4">
                              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">
                                {item.file?.includes('mic') ? (
                                  <>
                                    <Mic className="w-3 h-3 mr-2" />
                                    Recording
                                  </>
                                ) : (
                                  <>
                                    <Upload className="w-3 h-3 mr-2" />
                                    Upload
                                  </>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSentimentColor(item.sentiment)}`}>
                                    {getSentimentIcon(item.sentiment)}
                                    <span className="ml-2 capitalize">{item.sentiment?.toLowerCase()}</span>
                                  </div>
                                  <span>{getSentimentEmoji(item.sentiment)}</span>
                                </div>
                                <div className="text-xs text-gray-500 max-w-xs">
                                  {getSentimentExplanation(item.sentiment)}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden mr-3">
                                  <div 
                                    className={`h-full ${
                                      item.sentiment?.toLowerCase() === 'positive' ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                                      item.sentiment?.toLowerCase() === 'negative' ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                                      'bg-gradient-to-r from-blue-500 to-cyan-500'
                                    }`}
                                    style={{ width: `${formatConfidence(item.confidence)}%` }}
                                  />
                                </div>
                                <span className="font-bold text-gray-800">{formatConfidence(item.confidence)}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50">
                                  <Download className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-purple-600 rounded-lg hover:bg-purple-50">
                                  <Volume2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-emerald-600 rounded-lg hover:bg-emerald-50">
                                  <Play className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {history.length > 0 && (
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-600">
                      Showing {Math.min(history.length, 10)} of {history.length} records
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg">
                        1
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        2
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}