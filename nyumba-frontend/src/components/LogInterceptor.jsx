import React, { useState } from 'react';
import { Search, ShieldAlert, SlidersHorizontal, Terminal, RefreshCw } from 'lucide-react';

function LogInterceptor() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  // Hardcoded mock dataset to keep operations completely local inside the frontend
  const rawLogs = [
    { timestamp: '00:41:12', node: 'NET-ROUTER-A', level: 'INFO', message: 'Inbound secure gateway port handshake validated successfully' },
    { timestamp: '00:41:55', node: 'DB-SYNC-POOL', level: 'WARN', message: 'Database connection latency spiked above thresholds [142ms]' },
    { timestamp: '00:42:01', node: 'AUTH-SHIELD', level: 'INFO', message: 'Administrative user session authorization refreshed for token node_root' },
    { timestamp: '00:43:19', node: 'MPESA-HOOK-V2', level: 'CRITICAL', message: 'Callback handshake failure timed out on endpoint response payload' },
    { timestamp: '00:44:02', node: 'ASSET-ENGINE', level: 'INFO', message: 'Structural calculations initialized for regional real estate parcels' }
  ];

  // Logic to instantly filter rows based on frontend input states
  const filteredLogs = rawLogs.filter(log => {
    const matchesSearch = log.node.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'ALL' || log.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Module Title Context */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>SYSTEM_LOG_INTERCEPTOR</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Query real-time network stream packets, warning alerts, and execution stacks.</p>
      </div>

      {/* Control Interceptor Strip (Search input + Filter buttons) */}
      <div style={{ 
        background: '#111622', border: '1px solid rgba(255,255,255,0.1)', 
        padding: '1.25rem 1.5rem', borderRadius: '8px', 
        display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' 
      }}>
        
        {/* Dynamic Search Box Layout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#05070a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.25rem 0.75rem', minWidth: '300px' }}>
          <Search size={16} color="#708099" />
          <input 
            type="text" 
            placeholder="Search container log entries..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#f1f5f9', outline: 'none', padding: '0.5rem 0', width: '100%', fontSize: '0.85rem' }}
          />
        </div>

        {/* Category Selector Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={14} color="#708099" style={{ marginRight: '0.25rem' }} />
          {['ALL', 'INFO', 'WARN', 'CRITICAL'].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              style={{
                background: selectedLevel === level ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255,255,255,0.02)',
                color: selectedLevel === level ? '#00e5ff' : '#94a3b8',
                border: selectedLevel === level ? '1px solid #00e5ff' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px', padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'monospace'
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Structured Log Stack Table Grid */}
      <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.01)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={14} color="#00e5ff" />
          <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>LIVE_INTERCEPTOR_STREAM ({filteredLogs.length} rows loaded)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredLogs.length > 0 ? (
            filteredLogs.map((log, idx) => (
              <div key={idx} style={{ 
                display: 'grid', gridTemplateColumns: '100px 140px 100px 1fr', gap: '1rem', 
                alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)' 
              }}>
                <span className="mono-text" style={{ fontSize: '0.8rem', color: '#708099' }}>{log.timestamp}</span>
                <span className="mono-text" style={{ fontSize: '0.8rem', color: '#00e5ff', fontWeight: 600 }}>{log.node}</span>
                
                {/* Visual Pill Badge matching log severity */}
                <div>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.4rem', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.05)',
                    color: log.level === 'INFO' ? '#10b981' : log.level === 'WARN' ? '#f59e0b' : '#ef4444',
                    background: log.level === 'INFO' ? 'rgba(16,185,129,0.1)' : log.level === 'WARN' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)'
                  }} className="mono-text">
                    {log.level}
                  </span>
                </div>

                <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{log.message}</span>
              </div>
            ))
          ) : (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#708099', fontSize: '0.9rem' }}>
              No stream logs match your parameters. Change filter selections to reset data arrays.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default LogInterceptor;
