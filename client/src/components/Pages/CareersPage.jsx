import { Link } from "react-router-dom";
import { useState } from "react";

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote (India)",
      experience: "5+ years",
      status: "active",
      description: "Lead the development of our emotion recognition algorithms and improve sentiment analysis accuracy.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Audio Processing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Bengaluru, India",
      experience: "3+ years",
      status: "active",
      description: "Build beautiful, responsive interfaces for our emotional intelligence dashboard.",
      skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Next.js"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "4+ years",
      status: "active",
      description: "Design intuitive experiences that make emotional data accessible and actionable.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "UX Writing"],
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      type: "Full-time",
      location: "Mumbai, India",
      experience: "3+ years",
      status: "active",
      description: "Help clients transform customer conversations into emotional insights.",
      skills: ["CRM", "Data Analysis", "Client Relations", "Training", "SaaS"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote (India)",
      experience: "4+ years",
      status: "active",
      description: "Build and scale our infrastructure for real-time voice processing.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      color: "from-rose-500 to-red-500"
    },
    {
      id: 6,
      title: "AI Research Intern",
      department: "Research",
      type: "Internship",
      location: "Hybrid (Bengaluru)",
      experience: "Student",
      status: "active",
      description: "Contribute to cutting-edge research in emotion recognition and sentiment analysis.",
      skills: ["Python", "Machine Learning", "Research", "Data Analysis"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries with stock options",
      icon: "💰"
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours",
      icon: "🏠"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: "💪"
    },
    {
      title: "Learning Budget",
      description: "Annual budget for courses, books, and conferences",
      icon: "📚"
    },
    {
      title: "Cutting-Edge Tech",
      description: "Work with the latest AI/ML technologies",
      icon: "🤖"
    },
    {
      title: "Impactful Work",
      description: "Solve meaningful problems in emotional intelligence",
      icon: "✨"
    }
  ];

  const cultureValues = [
    {
      title: "Empathy First",
      description: "We practice what we preach - emotional intelligence starts with us",
      icon: "❤️"
    },
    {
      title: "Continuous Growth",
      description: "We believe in learning, experimenting, and evolving together",
      icon: "🌱"
    },
    {
      title: "Authentic Communication",
      description: "Radical transparency and open dialogue across all levels",
      icon: "💬"
    },
    {
      title: "Customer Obsession",
      description: "Everything we build starts with understanding user emotions",
      icon: "🎯"
    }
  ];

  const filteredJobs = activeCategory === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => 
        activeCategory === "active" ? job.status === "active" : 
        job.department.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 rounded-b-full"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded-full mb-8 border border-pink-100">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
            <span className="text-pink-600 font-semibold">We're Hiring</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">
              Build the Future of
            </span>
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
              Emotional Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
            Join us in creating technology that understands human emotions. 
            We're building tools that transform conversations into meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#openings"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </a>
            <Link
              to="/about"
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">VoiceBloom</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just building software. We're pioneering emotional intelligence technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">Culture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide how we work, collaborate, and grow together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {cultureValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-3xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 border border-pink-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Diversity & Inclusion
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe emotional intelligence thrives in diverse environments. 
                  We actively seek different perspectives, backgrounds, and experiences 
                  to build technology that understands everyone.
                </p>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Equal opportunity employer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Inclusive workplace</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    12+
                  </div>
                  <div className="text-gray-700">Countries represented</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    45%
                  </div>
                  <div className="text-gray-700">Women in tech roles</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    8
                  </div>
                  <div className="text-gray-700">Languages spoken</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-700">Remote-friendly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Open <span className="text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of passionate engineers, designers, and researchers.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              All Positions
            </button>
            <button
              onClick={() => setActiveCategory("engineering")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === "engineering"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              Engineering
            </button>
            <button
              onClick={() => setActiveCategory("design")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === "design"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveCategory("customer success")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === "customer success"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              Customer Success
            </button>
            <button
              onClick={() => setActiveCategory("research")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === "research"
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              Research
            </button>
          </div>
          
          {/* Job Listings */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-sm text-gray-700 mb-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {job.status === "active" ? "Actively Hiring" : "Closed"}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 transition-all duration-300">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{job.description}</p>
                  </div>
                  <div className="lg:text-right flex-shrink-0">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${job.color} text-white rounded-xl text-sm font-semibold mb-3`}>
                      {job.type}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Job Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600">📍</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium text-gray-900">{job.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600">📅</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-medium text-gray-900">{job.experience}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600">🏢</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Department</div>
                        <div className="font-medium text-gray-900">{job.department}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600">🎯</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Type</div>
                        <div className="font-medium text-gray-900">{job.type}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <div className="text-sm text-gray-500 mb-3">Required Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <a
                    href={`mailto:careers@voicebloom.ai?subject=Application for ${job.title}`}
                    className="block w-full py-4 text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No positions found</h3>
              <p className="text-gray-600 mb-8">
                We don't have any openings in this category right now. 
                Check back soon or apply for our general talent pool.
              </p>
              <a
                href="mailto:careers@voicebloom.ai?subject=Talent Pool Application"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                Join Talent Pool
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">Hiring Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, respectful, and designed to bring out your best.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-pink-200 to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application Review</h3>
              <p className="text-gray-600">
                We review your application within 48 hours and provide updates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Chat</h3>
              <p className="text-gray-600">
                30-minute conversation about your experience and aspirations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills Assessment</h3>
              <p className="text-gray-600">
                Practical exercise relevant to the role you're applying for.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Interviews</h3>
              <p className="text-gray-600">
                Meet the team and learn about our work culture and projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/40 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Build With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Even if you don't see the perfect role, we're always looking for 
              talented people passionate about emotional intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:careers@voicebloom.ai?subject=General Application"
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-bold text-lg shadow-xl hover:shadow-2xl"
              >
                Send General Application
              </a>
              
              <Link
                to="/contact"
                className="px-10 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Contact Careers Team
              </Link>
            </div>
            
            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-gray-600 mb-6">
                Have questions? We're here to help.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center">
                    <span className="text-pink-600">📧</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium text-gray-900">careers@voicebloom.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-violet-100 flex items-center justify-center">
                    <span className="text-purple-600">💼</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="font-medium text-gray-900">@voicebloom-ai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}