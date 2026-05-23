import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';

function AIAssistantDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'SYSTEM_ONLINE // Operational intelligence node connected. How can I assist with Project 1 logs today?', time: '00:00:01' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Keep chat context focused at bottom on new lines
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userTime = new Date().toTimeString().split(' ')[0];
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage,
      time: userTime
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Mock response generation matrix tailored for Project 1's workflow
    setTimeout(() => {
      const botTime = new Date().toTimeString().split(' ')[0];
      let responseText = "INTELLIGENCE_ROUTING_EXCEPTION: Prompt context evaluated but no active backend container found. Frontend mocking engine active.";
      
      const lowerInput = inputMessage.toLowerCase();
      if (lowerInput.includes('asset') || lowerInput.includes('ledger')) {
        responseText = "INTEL_REPORT // Asset Registry currently maps 3 secure operational matrices. Total valuation caps at KES 56,700,000 across core sub-nodes.";
      } else if (lowerInput.includes('invoice') || lowerInput.includes('status')) {
        responseText = "BILLING_SYSTEM_WARN // 4 system routing requests are holding pending allocation verification records. Awaiting secure admin clearance keys.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        responseText = "SYSTEM_READY // Security handshake passed. Enter administrative query patterns regarding operations or asset statuses.";
      }

      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        sender: 'bot',
        text: responseText,
        time: botTime
      }]);
      setIsTyping(false);
    }, 1100);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '420px',
      maxWidth: '100vw',
      height: '100vh',
      background: 'rgba(10, 12, 16, 0.95)',
      backdropFilter: 'blur(16px)',
      borderLeft: '1px solid var(--border-color)',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
      animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
    }}>
      
      {/* Drawer Title Block Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ color: 'var(--accent-gold)', display: 'flex' }}><Sparkles size={18} /></div>
          <div>
            <h3 className="mono-text" style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-primary)', fontWeight: 700 }}>CORE_AI_ASSISTANT</h3>
            <span className="mono-text" style={{ fontSize: '0.65rem', color: 'var(--accent-blue)', display: 'block', fontWeight: 700 }}>SESSION_ISOLATED // VER_2.6</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.25rem', display: 'flex', borderRadius: '4px', border: '1px solid transparent' }}
          onMouseEnter={(e) => e.target.style.borderColor = 'var(--border-color)'}
          onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}
        >
          <X size={18} />
        </button>
      </div>

      {/* Main Messaging Interface Streams */}
      <div 
        ref={scrollRef}
        style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
      >
        {messages.map((msg) => (
          <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }} className="mono-text">
              {msg.sender === 'bot' ? <Bot size={12} color="var(--accent-gold)" /> : <User size={12} color="var(--accent-blue)" />}
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
                {msg.sender === 'bot' ? 'SYS_INTELLIGENCE' : 'ACTIVE_OPERATOR'} • {msg.time}
              </span>
            </div>
            <div style={{
              maxWidth: '85%',
              padding: '0.85rem 1.1rem',
              borderRadius: '6px',
              fontSize: '0.85rem',
              lineHeight: '1.5',
              background: msg.sender === 'user' ? 'rgba(0, 229, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
              border: msg.sender === 'user' ? '1px solid rgba(0, 229, 255, 0.2)' : '1px solid var(--border-color)',
              color: msg.sender === 'user' ? 'var(--text-primary)' : 'var(--text-primary)',
              fontFamily: msg.sender === 'bot' ? 'var(--font-mono)' : 'inherit'
            }}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Dynamic Process Pulse Notification */}
        {isTyping && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }} className="mono-text">
              <Bot size={12} color="var(--accent-gold)" />
              <span style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontWeight: 700 }}>EVALUATING_INFERENCE_DATA...</span>
            </div>
            <div style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '4px', display: 'flex', gap: '0.25rem' }}>
              <span className="typing-dot"></span>
              <span className="typing-dot" style={{ animationDelay: '0.2s' }}></span>
              <span className="typing-dot" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Form Action Input Matrix Area */}
      <form 
        onSubmit={handleSendMessage}
        style={{ padding: '1.25rem', borderTop: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '0.75rem' }}
      >
        <input 
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Query network assets or system status configs..."
          style={{
            flex: 1,
            padding: '0.75rem 1rem',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            fontSize: '0.85rem',
            outline: 'none',
            transition: 'var(--transition-smooth)'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
        />
        <button 
          type="submit"
          style={{
            padding: '0.75rem',
            background: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default AIAssistantDrawer;
