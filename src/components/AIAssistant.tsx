"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  RefreshCcw,
  WifiOff,
  CheckCircle,
  Headphones,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomSelect from "./CustomSelect";

type ViewState =
  | "welcome"
  | "chat"
  | "inquiry"
  | "handoff"
  | "success"
  | "error"
  | "offline";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  isStreaming?: boolean;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ViewState>("welcome");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [selectedGoal, setSelectedGoal] = useState("Web Development");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isStreaming, view]);

  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);
    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  }, []);

  useEffect(() => {
    if (!isOnline && isOpen) setView("offline");
    else if (isOnline && view === "offline") setView("welcome");
  }, [isOnline, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isStreaming) return;

    if (view !== "chat") setView("chat");

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://jerries56.app.n8n.cloud/webhook/ce24da35-103e-45dc-942d-708ca2745a5e/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          timestamp: new Date().toISOString(),
          context: "UNIFOTEC-WEB Portfolio Website"
        }),
      });

      if (!response.ok) {
        // Fallback for static demo if webhook is intentionally disabled/down
        console.warn("Webhook unreachable, using fallback response");
        setIsTyping(false);
        startStreaming("I'm currently operating in offline mode. For a live technical roadmap, please contact us at info@unifotec-web.com.");
        return;
      }

      const data = await response.json();

      // Parse response from n8n (handling various possible return formats)
      let aiText = "";
      if (Array.isArray(data)) {
        aiText = data[0]?.output || data[0]?.response || data[0]?.text;
      } else {
        aiText = data.output || data.response || data.text || data.message;
      }

      if (!aiText) aiText = "Request processed successfully. How else can I assist your digital growth?";

      setIsTyping(false);
      startStreaming(aiText);
    } catch (error) {
      console.error("Webhook Communication Failure:", error);
      setIsTyping(false);
      startStreaming("I'm sorry, I encountered a temporary connection failure while reaching my neural core. Please try again or contact us directly at info@unifotec-web.com.");
    }
  };

  const startStreaming = (fullText: string) => {
    setIsStreaming(true);
    const id = Date.now().toString();
    let currentText = "";
    const words = fullText.split(" ");
    let i = 0;

    const interval = setInterval(() => {
      if (i < words.length) {
        currentText += (i === 0 ? "" : " ") + words[i];
        setMessages(prev => {
          const filtered = prev.filter(m => m.id !== id);
          return [...filtered, {
            id,
            text: currentText,
            sender: "ai",
            timestamp: new Date(),
            isStreaming: true
          }];
        });
        i++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
        setMessages(prev => prev.map(m => m.id === id ? { ...m, isStreaming: false } : m));
      }
    }, 80);
  };

  const MotionDiv = motion.div;
  const MotionSpan = motion.span;

  // Soundwave Animation bars
  const WaveForm = () => (
    <div className="flex items-end space-x-[2px] h-3 sm:h-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <MotionDiv
          key={i}
          animate={{ height: [3, 10, 3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
          className="w-[2px] bg-primary rounded-full shadow-[0_0_8px_#005FFF]"
        />
      ))}
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#020617] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.6)] w-[calc(100vw-32px)] sm:w-[440px] h-[480px] sm:h-[580px] max-h-[calc(100vh-140px)] border border-white/10 flex flex-col overflow-hidden mb-6"
          >
            {/* Professional Header inspired by Image */}
            <div className="bg-[#0F172A]/80 backdrop-blur-xl p-4 sm:p-6 text-white relative overflow-hidden border-b border-white/5 shrink-0">
              {/* Glowing Background effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-5">
                  {/* Glowing Avatar Container */}
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-20 sm:h-14 rounded-2xl border-2 border-primary/30 shadow-[0_0_20px_rgba(0,95,255,0.3)] overflow-hidden bg-dark">
                      <img
                        src="/logo.jpeg"
                        alt="logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#10B981] border-2 border-[#0F172A] rounded-full shadow-[0_0_10px_#10B981]"></div>
                  </div>

                  <div>
                    <h3 className="font-black text-base sm:text-xl tracking-tight flex items-center gap-3">
                      UNIFOTEC AI
                      <WaveForm />
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[9px] text-primary font-bold uppercase tracking-[0.2em] bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                        Neural Link Active
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/30 hover:text-white transition-all p-3 hover:bg-white/5 rounded-2xl border border-white/5"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content Area - Professional Dark Theme */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 bg-[#020617] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/5 hover:scrollbar-thumb-white/10">
              <AnimatePresence mode="wait">

                {view === "offline" && (
                  <MotionDiv key="offline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-[2rem] border border-red-500/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                      <WifiOff className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Sync Interface Lost</h4>
                    <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">Neural link interrupted. Re-establish connection to continue development.</p>
                    <button onClick={() => window.location.reload()} className="bg-white text-dark px-10 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                      <RefreshCcw className="w-4 h-4" /> Restart Sync
                    </button>
                  </MotionDiv>
                )}

                {view === "welcome" && (
                  <MotionDiv key="welcome" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 sm:space-y-8">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md text-center">
                      <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                        UNIFOTEC-WEB assistant, <br />
                        <span className="text-primary">how can I assist you?</span>
                      </h4>
                    </div>
                  </MotionDiv>
                )}

                {view === "chat" && (
                  <MotionDiv key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] p-5 rounded-3xl text-sm font-medium leading-relaxed shadow-lg ${
                          msg.sender === "user"
                            ? "bg-primary text-white rounded-tr-none shadow-[0_10px_20px_rgba(0,95,255,0.2)]"
                            : "bg-white/10 text-white border border-white/10 rounded-tl-none backdrop-blur-md"
                        }`}>
                          {msg.text}
                          {msg.isStreaming && <MotionSpan animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-1.5 h-4 bg-primary ml-1 align-middle" />}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none flex gap-1.5 items-center">
                          {[0, 150, 300].map((d) => (
                            <div key={d} className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }}></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </MotionDiv>
                )}

                {view === "inquiry" && (
                  <MotionDiv key="inquiry" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                    <div className="text-center">
                       <h4 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">Discovery Protocol</h4>
                       <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">Project Parameters Required</p>
                    </div>
                    <div className="space-y-6 bg-white/5 p-8 rounded-[2rem] border border-white/10">
                       <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Project Identifier</label>
                          <input type="text" placeholder="e.g. Enterprise CRM 2.0" className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-primary text-white font-medium transition-all shadow-inner" />
                       </div>

                       <CustomSelect
                         label="Primary Capability"
                         options={["Web Development", "Mobile App", "Automation", "Cloud Infrastructure"]}
                         value={selectedGoal}
                         onChange={setSelectedGoal}
                       />

                       <button onClick={() => setView("success")} className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,95,255,0.3)] hover:bg-primary-dark transition-all uppercase tracking-widest text-xs">
                          Validate & Submit
                       </button>
                       <button onClick={() => setView("welcome")} className="w-full text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Abort Mission</button>
                    </div>
                  </MotionDiv>
                )}

                {view === "handoff" && (
                   <MotionDiv key="handoff" className="h-full flex flex-col items-center justify-center text-center space-y-8">
                     <div className="w-24 h-24 bg-primary/10 text-primary rounded-full border border-primary/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full animate-ping bg-primary/20"></div>
                        <Headphones className="w-12 h-12 relative z-10" />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-white mb-3 tracking-tight uppercase">Architect Link Initiated</h4>
                       <p className="text-slate-400 text-sm font-medium leading-relaxed">Securing a direct line with our Lead Engineering Partner. Please hold frequency...</p>
                     </div>
                     <div className="w-full max-w-[240px] h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4, ease: "linear" }} className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_#005FFF]" />
                     </div>
                     <button onClick={() => setView("chat")} className="text-primary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Remain in AI Sandbox</button>
                   </MotionDiv>
                )}

                {view === "success" && (
                  <MotionDiv key="success" className="h-full flex flex-col items-center justify-center text-center space-y-8">
                    <div className="w-24 h-24 bg-emerald-500/10 text-accent rounded-full border border-accent/20 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">Data Packet Received</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">System scan complete. A solutions architect will transmit a custom technical proposal within 2 cycles (hours).</p>
                    </div>
                    <button onClick={() => setView("welcome")} className="bg-white text-dark px-12 py-3.5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl hover:bg-primary hover:text-white transition-all">
                      Terminate Session
                    </button>
                  </MotionDiv>
                )}

              </AnimatePresence>
            </div>

            {/* Professional Input Area */}
            {(view === "chat" || view === "welcome") && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-white/5 bg-[#0F172A]/50 backdrop-blur-2xl shrink-0">
                <form onSubmit={handleSend} className="flex items-center space-x-3 sm:space-x-4 bg-white/5 p-2 rounded-[2rem] border border-white/10 focus-within:border-primary/50 transition-all shadow-2xl relative group">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Input command or query..."
                    className="flex-1 bg-transparent px-4 sm:px-5 py-2 sm:py-3 text-sm font-medium text-white focus:outline-none placeholder:text-slate-500"
                    disabled={isStreaming}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isStreaming}
                    className="bg-primary hover:bg-primary-dark text-white p-3 rounded-[1.5rem] disabled:opacity-20 transition-all shadow-[0_0_30px_rgba(0,95,255,0.4)] group-hover:scale-105 active:scale-95"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            )}
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button - Simplified & Fixed */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0F172A] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-2 border-primary/30 relative flex items-center justify-center overflow-hidden group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              className="relative z-10"
            >
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-full h-full relative"
            >
              <img
                src="/ai-assistant.png"
                alt="ai assistant"
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] transition-transform duration-500 group-hover:scale-110"
              />
              {/* Online Indicator */}
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-[#10B981] border-2 border-[#0F172A] rounded-full shadow-[0_0_8px_#10B981]"></div>
              {/* Ping effect for attention */}
              <div className="absolute inset-0 bg-primary/10 animate-pulse pointer-events-none"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>
    </div>
  );
};

export default AIAssistant;
