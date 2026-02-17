import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Working Unsplash image URLs
  const projectImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Voice Analytics Dashboard",
      description: "Real-time conversation insights"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Emotion Detection",
      description: "AI-powered sentiment analysis"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Team Analytics",
      description: "Performance metrics & insights"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Live Monitoring",
      description: "24/7 conversation tracking"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Multi-language Support",
      description: "Global sentiment analysis"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, projectImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  // Stats with icons
  const stats = [
    { value: "250K+", label: "Daily Calls Analyzed", color: "from-blue-500 to-cyan-500" },
    { value: "97.8%", label: "Accuracy Rate", color: "from-emerald-500 to-green-500" },
    { value: "8.5K+", label: "Global Clients", color: "from-purple-500 to-pink-500" },
    { value: "50+", label: "Languages Supported", color: "from-orange-500 to-red-500" }
  ];

  // Enhanced features with gradients
  const features = [
    {
      icon: "🎯",
      title: "Real-Time Analysis",
      description: "Live voice processing with instant sentiment detection",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🧠",
      title: "AI Emotion Detection",
      description: "Advanced neural networks for accurate emotion recognition",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: "📊",
      title: "Sentiment Analytics",
      description: "Comprehensive insights and trend visualization",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🌐",
      title: "Multi-language Support",
      description: "Analyze conversations in 50+ global languages",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  // Testimonials with improvements
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "ZenCall",
      content: "VoxSentiment transformed our customer service approach. We can now proactively address customer concerns before they escalate.",
      improvement: "42% faster resolution time",
      avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      name: "Marcus Rivera",
      company: "SupportFirst",
      content: "The real-time insights helped us reduce escalations dramatically. Our team now has the emotional intelligence of seasoned experts.",
      improvement: "65% reduction in escalations",
      avatarColor: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      name: "Aisha Patel",
      company: "Global Connect",
      content: "Multi-language support made it perfect for our global team. We can now maintain consistent quality across all regions.",
      improvement: "38% increase in satisfaction",
      avatarColor: "bg-gradient-to-br from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/50">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Gradient Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-200/50"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-600">AI-Powered Voice Intelligence</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight"
              >
                <span className="block">Understand</span>
                <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Every Emotion
                </span>
                <span className="block">In Every</span>
                <span className="font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Conversation
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                Transform customer interactions with real-time voice sentiment analysis. 
                Detect emotions, track conversations, and deliver exceptional experiences 
                powered by advanced AI.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/signup"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative font-semibold text-lg">Start Free Trial</span>
                  <svg className="relative w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  to="/demo"
                  className="group px-8 py-4 bg-white text-gray-900 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span className="font-medium">View Live Demo</span>
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/50"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Enhanced Image Slideshow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={projectImages[currentImageIndex].url}
                    alt={projectImages[currentImageIndex].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-lg">📊</span>
                      </div>
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-1">
                          {projectImages[currentImageIndex].title}
                        </h3>
                        <p className="text-gray-200">
                          {projectImages[currentImageIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Navigation Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/30">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center space-x-3 mt-6">
                {projectImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsPlaying(false);
                    }}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-blue-500 ring-offset-2 scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-blue-500/20" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6">
              <span className="text-blue-600 font-medium">Powerful Features</span>
            </div>
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Everything You Need for
              <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Emotional Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools to understand, analyze, and improve every customer conversation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full mb-6">
              <span className="text-emerald-600 font-medium">Customer Success Stories</span>
            </div>
            <h2 className="text-5xl font-light text-gray-900 mb-6">
              Trusted by Leading
              <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Teams Worldwide</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Avatar */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-14 h-14 rounded-full ${testimonial.avatarColor} flex items-center justify-center`}>
                      <span className="text-white text-xl">👤</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative">
                    <svg className="absolute -top-6 -left-2 w-12 h-12 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-8 pt-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Improvement Badge */}
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
                    <span className="text-emerald-600 font-bold">{testimonial.improvement}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/30 mx-auto mb-8 flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                Customer Conversations?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful teams using emotional intelligence 
              to build stronger customer relationships and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/signup"
                className="group relative px-10 py-5 bg-gradient-to-r from-white to-gray-100 text-gray-900 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               
                <svg className="relative w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/demo"
                className="group px-10 py-5 bg-transparent text-white rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-3"
              >
                
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "🔒", label: "Enterprise Security", desc: "SOC 2 Certified" },
                { icon: "⚡", label: "Fast Setup", desc: "Under 5 Minutes" },
                { icon: "📈", label: "Proven ROI", desc: "95% Success Rate" },
                { icon: "🎯", label: "24/7 Support", desc: "Always Available" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="text-white font-medium mb-1">{item.label}</div>
                  <div className="text-white/70 text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}