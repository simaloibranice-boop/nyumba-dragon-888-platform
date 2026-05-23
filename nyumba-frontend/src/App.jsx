import React from 'react';
import Navbar from './components/Navbar';
import './styles/main.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '100px', padding: '2rem' }}>
        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '8px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="mono-text" style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>SYSTEM_ONLINE // INIT_PHASE_1</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Welcome to the front-end core environment of Project 1. The telemetry grid system, premium interface layouts, and modular state controls are operational. Next, secure data bindings will connect to the underlying Flask microservices.
          </p>
        </div>
      </main>
    </div>
  );
}