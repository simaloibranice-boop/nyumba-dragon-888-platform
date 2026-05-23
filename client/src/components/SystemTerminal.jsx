import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2 } from 'lucide-react';

function SystemTerminal() {
  const [history, setHistory] = useState([
    { text: 'PROJECT_ONE Diagnostics Shell v4.0.2-Build2026', type: 'system' },
    { text: 'Type "help" to list available systemic overrides.', type: 'info' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  // Auto-scroll anchor point mechanism
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    // Echo user's input back into layout rows
    let currentLog = [...history, { text: `operator@project_one:~$ ${input}`, type: 'user' }];

    // Simple textual router parser engine
    switch (cleanCmd) {
      case 'help':
        currentLog.push(
          { text: '--- AVAILABLE COMMAND MATRIX ---', type: 'system' },
          { text: '  status           - Pull live environment health metrics.', type: 'info' },
          { text: '  system --optimize- Flush cache allocations & stabilize node arrays.', type: 'info' },
          { text: '  clear            - Wipe active terminal terminal screen log array.', type: 'info' }
        );
        break;
      case 'status':
        currentLog.push(
          { text: '➔ SECURE GATEWAY TUNNEL: ACTIVE [PORT 5173]', type: 'success' },
          { text: '➔ REGIONAL METRIC CACHE: NOMINAL (Ksh 492,600 BAL)', type: 'success' },
          { text: '➔ LATENCY STABILIZER: ONLINE [34.2ms MEAN]', type: 'success' }
        );
        break;
      case 'system --optimize':
        currentLog.push(
          { text: '⚡ INITIALIZING SYSTEM FLUSH SEQUENCE...', type: 'warning' },
          { text: '✔ Compiling dynamic layout assets... Done.', type: 'info' },
          { text: '✔ Refreshing active memory telemetry boundaries... Done.', type: 'success' },
          { text: '➔ OPTIMIZATION COMPLETE. SYSTEM STATUS: EXCELLENT.', type: 'success' }
        );
        break;
      case 'clear':
        currentLog = [];
        break;
      default:
        currentLog.push({ text: `ERR: Command token "${input}" not recognized by system core shell architecture.`, type: 'error' });
    }

    setHistory(currentLog);
    setInput('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>INTERACTIVE_SHELL_DIAGNOSTICS</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Issue low-level instruction commands directly into the runtime dashboard infrastructure layers.</p>
      </div>

      {/* Terminal Viewplane Container Block */}
      <div style={{ background: '#05070a', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '1.5rem', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', gap: '0.75rem', minHeight: '360px', maxHeight: '500px', overflowY: 'auto', boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.8)' }}>
        
        {/* Render History Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', flex: 1 }}>
          {history.map((line, idx) => {
            let logColor = '#e2e8f0'; // Default text color
            if (line.type === 'user') logColor = '#94a3b8';
            if (line.type === 'success') logColor = '#10b981';
            if (line.type === 'warning') logColor = '#d6af37';
            if (line.type === 'error') logColor = '#ef4444';
            if (line.type === 'system') logColor = '#00e5ff';

            return (
              <div key={idx} style={{ color: logColor, whiteSpace: 'pre-wrap', lineHeight: '1.4' }}>
                {line.text}
              </div>
            );
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Pipeline Control Row */}
        <form onSubmit={handleCommandSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginTop: 'auto' }}>
          <span style={{ color: '#00e5ff', fontSize: '0.85rem', fontWeight: 700 }}>operator@project_one:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type code script instruction string here..."
            style={{ flex: 1, background: 'transparent', border: 'none', color: '#00e5ff', fontSize: '0.85rem', outline: 'none', padding: '0.2rem 0', fontFamily: 'monospace' }}
            autoFocus
          />
          <CornerDownLeft size={14} color="#708099" />
        </form>
      </div>

    </div>
  );
}

export default SystemTerminal;
