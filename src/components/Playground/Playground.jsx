import React, { useState } from 'react';

const Playground = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your AI assistant. How can I help you explore today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock API response time
    setTimeout(() => {
      const responses = [
        "That's an excellent observation! The trajectory of generative AI is truly fascinating.",
        "I can certainly help with that. Here is a simulated response based on your prompt parameters.",
        "As an artificial intelligence, my logic circuits find that query highly stimulating.",
        "Accessing simulated database... Okay, here are the results you requested!",
        "This is a mocked response from the Playground. It demonstrates how a real model integration would feel."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">AI <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">Playground</span></h2>
        <p className="font-medium text-zinc-400 mt-2">Test drive our simulated intelligence interface.</p>
      </div>

      <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden flex flex-col h-[600px] hover:border-cyan-500/20 transition-all duration-300 relative z-10">
        {/* Header */}
        <div className="bg-zinc-950/80 p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">Nexus API <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30 font-normal uppercase tracking-wider">Beta</span></h2>
              <p className="text-xs text-cyan-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Systems Online</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-linear-to-r from-cyan-600 to-cyan-700 text-white rounded-tr-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-zinc-800/80 text-zinc-300 rounded-tl-sm border border-white/5 shadow-md flex items-start gap-3'
              }`}>
                {msg.role === 'assistant' && (
                   <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                   </span>
                )}
                <span>{msg.content}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-800/80 rounded-2xl rounded-tl-sm p-4 border border-white/5 flex gap-1.5 items-center h-12 shadow-md">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-zinc-950/80 border-t border-white/5">
          <form onSubmit={handleSend} className="flex gap-3 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Initialize prompt sequence..."
              className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-zinc-800 disabled:border-zinc-700 disabled:text-zinc-500 transition-colors px-6 py-3 rounded-xl font-bold text-white shadow-[0_0_10px_rgba(34,211,238,0.2)] flex items-center justify-center border border-transparent disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Playground;
