import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ChevronRight, 
  HelpCircle,
  Code2,
  Trophy,
  BrainCircuit,
  UserCheck
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_LIST, ACHIEVEMENTS_TIMELINE } from '../data/portfolioData';

export const ParshuramAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: "👋 Hi! I'm Parshuram's interactive portfolio assistant. Ask me anything about his college at BLDEA College of Engineering, web development projects, AI/ML models, hackathons, or how to hire him!"
    }
  ]);
  const [inputQuery, setInputQuery] = useState<string>('');

  const quickQuestions = [
    "Tell me about Snap Class",
    "Tell me about Fatima International School Website",
    "What is Parshuram's background?",
    "What are his hackathon achievements?",
    "How can I contact Parshuram?"
  ];

  const handleSend = (queryText: string) => {
    const q = queryText.trim().toLowerCase();
    if (!q) return;

    // Add user message
    const userMsg = { sender: 'user' as const, text: queryText };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');

    // Generate intelligent contextual response
    setTimeout(() => {
      let botReply = "Parshuram is a Computer Science undergraduate specializing in AI & Machine Learning at BLDEA College of Engineering, Vijayapur.";

      if (q.includes('snap class') || q.includes('attendance') || q.includes('biometric') || q.includes('face')) {
        botReply = "Snap Class is an AI-powered smart attendance system designed by Parshuram that replaces manual roll calls with Face Recognition (FaceID) and Voice Biometrics. It features student & teacher portals, QR check-in, real-time logging, and Supabase integration!";
      } else if (q.includes('fatima') || q.includes('school') || q.includes('international school')) {
        botReply = "Fatima International School Website is a modern, responsive educational web platform built with React, TypeScript, Vite, Tailwind CSS, Shadcn UI, and Supabase, showcasing admissions, academics, and dynamic school services.";
      } else if (q.includes('hackathon') || q.includes('hackvyuha') || q.includes('ai arena') || q.includes('hackaura')) {
        botReply = "Parshuram has participated in HackAura 2026 at VSM's SRKIT Nipani, AI Arena 2.0 with IEEE BLDEACET Student Branch, and served as an Organizing Team Member for HackVyuha 2025!";
      } else if (q.includes('cert') || q.includes('ibm') || q.includes('credential')) {
        botReply = "Parshuram holds an official AI Literacy Digital Credential from IBM SkillsBuild, along with HackAura 2026, AI Arena 2.0, and HackYuha 2025 credentials.";
      } else if (q.includes('college') || q.includes('bldea') || q.includes('education') || q.includes('university')) {
        botReply = "Parshuram is studying Computer Science and Engineering with a specialization in Artificial Intelligence & Machine Learning at BLDEA's V.P. Dr. P.G. Halakatti College of Engineering and Technology in Vijayapura, Karnataka.";
      } else if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('python')) {
        botReply = "Parshuram's core languages and tech stack include Python, JavaScript, TypeScript, React 18, Vite, Tailwind CSS, Supabase, PostgreSQL, Streamlit, Scikit-Learn, and Dlib.";
      } else if (q.includes('service') || q.includes('services') || q.includes('offer')) {
        botReply = "Parshuram offers Web Development, Front-End Development (React/Tailwind), Website Maintenance & Optimization, and Social Media Technical Content Creation.";
      } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('phone') || q.includes('linkedin')) {
        botReply = `You can email Parshuram directly at ${PERSONAL_INFO.email} or connect on LinkedIn (parashuram-prajapati-97659a32a) and Instagram (@its_me_parshuram_18). He is open to software engineering internships and projects!`;
      } else if (q.includes('about') || q.includes('who')) {
        botReply = "Parshuram Prajapati is a Web Developer & AI Enthusiast specializing in AI & Machine Learning at BLDEA College of Engineering, Vijayapur. He builds modern web applications and solves algorithmic challenges.";
      } else {
        botReply = "Parshuram specializes in modern Web Development (React/Tailwind), AI & Machine Learning, and Problem Solving in C++, Java, and Python. You can check his live projects and certificates or contact him directly!";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Launcher Trigger */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          id="assistant-launcher-btn"
          className="px-4 py-3 rounded-full bg-[#4F7CFF] text-white shadow-lg shadow-[#4F7CFF]/25 flex items-center gap-2 cursor-pointer font-bold text-xs border border-white/40 hover:bg-[#3d6bf0] transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Bot className="w-4 h-4" />
          <span className="hidden sm:inline">Ask Parshuram's AI</span>
        </motion.button>
      )}

      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[90vw] sm:w-96 rounded-[28px] bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Chat Header */}
            <div className="p-4 bg-[#4F7CFF] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs">Parshuram AI Assistant</h4>
                  <span className="text-[10px] text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online & Ready
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Message Scroll */}
            <div className="p-4 overflow-y-auto flex-1 space-y-3 min-h-[220px] max-h-[280px] bg-[#FAF9F6]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                      m.sender === 'user'
                        ? 'bg-[#4F7CFF] text-white rounded-tr-xs font-medium'
                        : 'bg-white text-slate-700 border border-slate-200/80 rounded-tl-xs shadow-2xs'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompts */}
            <div className="p-2 border-t border-slate-100 bg-white flex gap-1.5 overflow-x-auto">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[10px] font-semibold text-slate-600 whitespace-nowrap cursor-pointer transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-3 border-t border-slate-100 bg-white flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about projects, college, skills..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend(inputQuery);
                }}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#4F7CFF]"
              />
              <button
                onClick={() => handleSend(inputQuery)}
                className="p-2 rounded-xl bg-[#4F7CFF] text-white hover:bg-[#3d6bf0] transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
