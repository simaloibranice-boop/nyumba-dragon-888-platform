import React from 'react';
import { Shield, ShieldCheck, Zap, Globe, BarChart3, ChevronRight } from 'lucide-react';

function LandingPage({ onEnterPortal }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      
      {/* 1. Hero Structural Identification Area */}
      <section style={{ textAlign: 'center', padding: '4rem 0 5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'rgba(214, 175, 55, 0.05)', border: '1px solid var(--accent-gold)', borderRadius: '20px', marginBottom: '1.5rem', gap: '0.5rem', alignItems: 'center' }}>
          <ShieldCheck size={14} color="var(--accent-gold)" />
          <span className="mono-text" style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '1px' }}>ENTERPRISE_GRADE_INFRASTRUCTURE</span>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: 300, letterSpacing: '-1px', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          The Intelligent Digital Ecosystem <br />
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Engineered for Power & Scale.</span>
        </h1>
        
        <p style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          Project 1 consolidates multi-service logistical operations, real-time analytics auditing, and elite security parameters into a single high-speed infrastructure. Built for regional development and future expansion.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={onEnterPortal}
            style={{ padding: '0.85rem 2rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', transition: 'var(--transition-smooth)' }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            ACCESS COMMAND TERMINAL <ChevronRight size={16} />
          </button>
          <a href="#vision" style={{ padding: '0.85rem 2rem', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
            VIEW SYSTEM SPECS
          </a>
        </div>
      </section>

      {/* 2. Core Pillars - Grid Performance Visualization */}
      <section id="vision" style={{ padding: '5rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px' }}>
          <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}><Zap size={28} /></div>
          <h3 className="mono-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 700 }}>INTELLIGENT AUTOMATION</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Automated invoice routing, background calculation workflows, and predictive analytics structures prevent manual overhead processing issues completely.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px' }}>
          <div style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem' }}><Globe size={28} /></div>
          <h3 className="mono-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 700 }}>SCALABLE INFRASTRUCTURE</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Designed around decoupled data processing patterns, ensuring seamless scaling from single asset logging modules up to high-density regional networks.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '8px' }}>
          <div style={{ color: '#ef4444', marginBottom: '1.5rem' }}><BarChart3 size={28} /></div>
          <h3 className="mono-text" style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 700 }}>OPERATIONAL INTEL</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
            Unified asset visibility interfaces feed continuous status metrics directly into executive views, allowing leaders to run clean tracking audits on demand.
          </p>
        </div>

      </section>

    </div>
  );
}

export default LandingPage;
