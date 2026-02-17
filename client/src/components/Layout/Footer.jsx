import { Link, useLocation } from "react-router-dom";
import { 
  Mic, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Send,
  Shield,
  Globe,
  FileText,
  Heart
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  // Don't show footer on dashboard pages
  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
      // Add your subscription logic here
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white group-hover:text-pink-500 transition-colors duration-200">
                  VoiceBloom AI
                </div>
                <div className="text-xs text-gray-400">
                  Emotional Intelligence Platform
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transform conversations with AI-powered sentiment analysis. 
              Understand emotions, improve experiences, make data-driven decisions.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium text-gray-200">Stay Updated</span>
              </div>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200 text-sm font-medium"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/features", label: "Features" },
                { to: "/pricing", label: "Pricing" },
                { to: "/demo", label: "Live Demo" },
                { to: "/docs", label: "Documentation" },
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-pink-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/blog", label: "Blog" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-sm text-gray-300">support@voicebloom.ai</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="text-sm text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="text-sm text-gray-300">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <div className="flex space-x-3">
                {[
                  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
                  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
                  { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
                  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left side - Copyright */}
            <div className="text-sm text-gray-500">
              © {currentYear} VoiceBloom AI. All rights reserved.
            </div>

            {/* Middle - Compliance badges */}
            <div className="flex items-center space-x-4">
              {[
                { icon: <Shield className="w-4 h-4" />, label: "SOC 2" },
                { icon: <Globe className="w-4 h-4" />, label: "GDPR" },
                { icon: <FileText className="w-4 h-4" />, label: "HIPAA" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center space-x-1 text-xs text-gray-500">
                  {badge.icon}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Right side - Legal links */}
            <div className="flex space-x-6 text-sm">
              {[
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
                { to: "/cookies", label: "Cookies" },
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-pink-500 fill-current" />
              <span>for better conversations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}