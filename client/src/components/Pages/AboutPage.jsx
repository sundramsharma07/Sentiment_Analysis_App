import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutPage() {
  const [activeTeam, setActiveTeam] = useState(0);
  
  const teamMembers = [
    {
      name: "Sundram Kumar",
      role: "Lead UI /UX Designer",
      bio: "Passionate about crafting intuitive user experiences. 10 years designing for top tech firms, now focused on making emotional AI accessible and engaging.",
      avatar: "👩‍🔬",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Himanshu Shekher",
      role: "Frontend Developer",
      bio: "React wizard with a knack for performance optimization. Built scalable web apps for Fortune 500 companies before joining VoiceBloom to revolutionize emotional AI interfaces.",
      avatar: "👨‍💼",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Himanshu Shekher",
      role: "Backend Developer",
      bio: "Expert in building robust, scalable backend systems. Former AWS solutions architect with deep experience in real-time data processing and AI integrations.",
      avatar: "🛠️",
      color: "from-amber-500 to-orange-500"
  
      
    },
    
  ];

  const milestones = [
    { year: "2025 ", title: "Started", desc: "Started with a vision to humanize AI communication" },
    { year: "2025", title: "First Prototype", desc: "Built initial emotion detection algorithms with 85% accuracy" },
    { year: "2025", title: " Mentorship", desc: "Gained Mentorship with multiple faculties." },
    { year: "2025", title: "Platform Launch", desc: "Released VoiceBloom AI to public with 50+ enterprise clients" },
    { year: "2025", title: "AI Breakthrough", desc: "Achieved 94% accuracy across 20+ languages" }
  ];

  const values = [
    {
      title: "Human-First AI",
      desc: "Technology should enhance human connection, not replace it.",
      icon: "❤️"
    },
    {
      title: "Ethical Intelligence",
      desc: "Privacy and consent are non-negotiable in emotional analysis.",
      icon: "🛡️"
    },
    {
      title: "Cultural Intelligence",
      desc: "Emotions transcend borders but are expressed differently.",
      icon: "🌍"
    },
    {
      title: "Continuous Learning",
      desc: "Our AI grows wiser with every conversation analyzed.",
      icon: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 rounded-b-full"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded-full mb-8 border border-pink-100">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
            <span className="text-pink-600 font-semibold">Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
              More Than Just AI
            </span>
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
              It's Emotional Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            We believe every conversation carries emotional truth. Founded in 2020, VoiceBloom AI was born 
            from a simple idea: What if technology could understand not just what we say, but how we feel?
            Today, we're transforming how businesses connect with emotions.
          </p>
          
          
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-2xl text-white mb-6">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To bridge the emotional gap in digital communication. We're building a world where 
                  technology doesn't just process words, but understands hearts—making every interaction 
                  more meaningful, empathetic, and human.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-2xl text-white mb-6">
                  👁️
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To create the global standard for emotional intelligence in technology. We envision 
                  a future where every digital interaction is enhanced by emotional awareness, leading 
                  to better understanding between people and organizations worldwide.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                The Problem We Solve
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">The Emotional Blindspot</h3>
                    <p className="text-gray-600">
                      68% of customer churn happens due to emotional disconnect. Businesses hear words 
                      but miss the feelings behind them.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lost in Translation</h3>
                    <p className="text-gray-600">
                      Tone, pace, and emotion carry 38% of communication meaning. Traditional analysis 
                      tools ignore these critical cues.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reactive vs Proactive</h3>
                    <p className="text-gray-600">
                      Most companies react to problems. We help predict emotional patterns before they 
                      become issues, saving relationships and revenue.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white mt-8">
                <div className="text-3xl font-bold mb-4">2.4M+</div>
                <div className="text-lg">Conversations transformed into emotional insights</div>
                <div className="text-sm text-gray-400 mt-2">And counting every second</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experts in AI, psychology, and customer experience united by one mission: 
              to make technology emotionally intelligent.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group cursor-pointer ${activeTeam === index ? 'scale-105' : ''}`}
                onClick={() => setActiveTeam(index)}
                onMouseEnter={() => setActiveTeam(index)}
              >
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${activeTeam === index ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10`}></div>
                  <div className="relative p-8">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                    <div className={`text-center font-semibold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${member.color}`}>
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeam(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTeam === index ? 'w-8 bg-gradient-to-r from-pink-500 to-rose-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">Journey</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                      <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're a business leader, developer, or AI enthusiast, there's a place for you 
            in our journey to make technology emotionally intelligent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/careers"
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-bold text-lg shadow-xl hover:shadow-2xl"
            >
              Explore Careers
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}