import { useState } from "react";

export default function FeaturesPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const features = [
    {
      title: "Real-Time Voice Sentiment Detection",
      description: "Analyze conversations as they happen with millisecond precision. Our AI processes voice data instantly, detecting emotional shifts and sentiment changes in real-time across all communication channels.",
      icon: "🎤",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Emotion Classification",
      description: "Advanced AI classifies emotions into 8 distinct categories: joy, anger, sadness, surprise, fear, disgust, calmness, and confusion with 94% accuracy across multiple languages.",
      icon: "😊",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Upload or Record Audio",
      description: "Seamlessly upload existing audio files or record live conversations. Supports all major formats including MP3, WAV, M4A, and live streaming integration.",
      icon: "📁",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Detailed Analytics Dashboard",
      description: "Interactive dashboards with comprehensive metrics, trend analysis, and visualizations that turn complex emotional data into actionable insights.",
      icon: "📊",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Export Reports",
      description: "Generate and export detailed reports in PDF, CSV, or Excel formats. Schedule automated reports and share insights across your organization effortlessly.",
      icon: "📥",
      color: "from-rose-500 to-red-500"
    },
    {
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption, GDPR compliance, SOC 2 certification, and military-grade security protocols to protect your sensitive voice data.",
      icon: "🔒",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white mb-8 shadow-lg">
            <span className="text-xl">✨</span>
            <span className="font-semibold">Powerful Features</span>
            <span className="text-xl">✨</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
              Understand Emotions
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of tools designed to transform voice conversations 
            into meaningful emotional intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Number */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})` }}>
                    0{index + 1}
                  </div>
                </div>
                
                {/* Hover Indicator */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                99.7%
              </div>
              <div className="text-xl font-semibold mb-2">Accuracy Rate</div>
              <div className="text-gray-300">Industry-leading sentiment detection accuracy</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                24/7
              </div>
              <div className="text-xl font-semibold mb-2">Real-time Processing</div>
              <div className="text-gray-300">Continuous analysis without interruptions</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                20+
              </div>
              <div className="text-xl font-semibold mb-2">Languages Supported</div>
              <div className="text-gray-300">Global coverage with multi-language support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}