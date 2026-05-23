import React from 'react';
import { Shield, Cpu, LogOut } from 'lucide-react';

function Navbar({ currentSession, onActionLogout, onNavigate, activeView }) {
  const activeRole = currentSession ? currentSession.role : 'UNAUTHORIZED';

  const linkStyle = (viewName) => ({
    color: activeView === viewName ? 'var(--accent-gold)' : 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: '0.5px',
    transition: 'var(--transition-smooth)'
  });

  return (
    <nav className="glass-panel" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, height: '70px', display: 'flex', alignItems: 'center', justifyProject: 'space-between', padding: '0 2rem' }}>
      
      {/* Brand Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
        <Shield size={22} color="var(--accent-gold)" />
        <span className="mono-text" style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
          PROJECT_1 // <span style={{ color: 'var(--accent-gold)' }}>D888</span>
        </span>
      </div>

      {/* Center Navigation Hub Controls */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <span style={linkStyle('home')} onClick={() => onNavigate('home')} className="mono-text">SYSTEM_HOME</span>
        
        {/* Unlocked views when authenticated */}
        <span style={linkStyle('dashboard')} onClick={() => onNavigate('dashboard')} className="mono-text">COMMAND_CENTER</span>
        <span style={linkStyle('assets')} onClick={() => onNavigate('assets')} className="mono-text">ASSET_LEDGER</span>
        <span style={linkStyle('billing')} onClick={() => onNavigate('billing')} className="mono-text">BILLING_RECORDS</span>
      </div>

      {/* Identity Configurations */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="glass-panel" style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', borderColor: currentSession ? 'rgba(0, 229, 255, 0.2)' : 'rgba(239, 68, 68, 0.2)' }}>
          <Cpu size={12} color={currentSession ? "var(--accent-blue)" : "#ef4444"} />
          <span className="mono-text" style={{ color: currentSession ? "var(--accent-blue)" : "#ef4444", fontWeight: 700 }}>
            {activeRole.toUpperCase()}
          </span>
        </div>
        {currentSession && (
          <LogOut size={16} style={{ cursor: 'pointer', color: '#ef4444' }} onClick={onActionLogout} title="Terminate Security Session" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
