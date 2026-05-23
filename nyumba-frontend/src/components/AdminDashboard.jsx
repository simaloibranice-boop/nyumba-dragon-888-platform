import React, { useState, useEffect } from 'react';
import { Shield, Zap, TrendingUp, HelpCircle } from 'lucide-react';
import MetricsChart from './MetricsChart';

function AdminDashboard() {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);

  // Poll backend telemetry matrix data dynamically
  useEffect(() => {
    const fetchMetrics = () => {
      fetch('http://localhost:8000/api/telemetry/metrics')
        .then(res => res.json())
        .then(data => {
          setMetrics(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Telemetry link offline:", err);
          setLoading(false);
        });
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 3000); // Pulse data array refresh every 3 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="mono-text" style={{ padding: '2rem', color: '#ffcc00' }}>
        CONNECTING_TO_DRAGON_CORE_DATASTREAM...
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Nyumba Dragon 888 Ideology System Banner */}
      <div style={{ 
        padding: '1.75rem', 
        background: 'linear-gradient(135deg, #16121e 0%, #111622 100%)', 
        border: '1px solid rgba(255, 204, 0, 0.25)', 
        borderRadius: '8px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderLeft: '4px solid #ffcc00',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <Zap size={15} color="#ffcc00" style={{ filter: 'drop-shadow(0 0 4px #ffcc00)' }} />
            <span className="mono-text" style={{ fontSize: '0.8rem', color: '#ffcc00', fontWeight: 800, letterSpacing: '1px' }}>
              NYUMBA_DRAGON_888_CORE_PROTOCOL
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#f1f5f9' }}>Real-Time Multiplier Matrix & Household Asset Ledger</h2>
        </div>
        <div style={{ textAlign: 'right' }} className="mono-text">
          <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }}>NODE_ZONE</span>
          <span style={{ fontSize: '0.9rem', color: '#ffcc00', fontWeight: 700 }}>NAIVASHA_DRAGON_NEXUS</span>
        </div>
      </div>

      {/* 888 Ideology Telemetry Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {metrics.map((metric, i) => (
          <div key={i} style={{ 
            background: '#111622', 
            border: metric.label.includes('DRAGON') ? '1px solid rgba(255,204,0,0.2)' : '1px solid rgba(255,255,255,0.1)', 
            padding: '1.5rem', 
            borderRadius: '6px', 
            borderLeft: `3px solid ${metric.color}`,
            boxShadow: metric.label.includes('DRAGON') ? '0 0 15px rgba(255,204,0,0.05)' : 'none'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="mono-text" style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>{metric.label}</span>
              <span className="mono-text" style={{ fontSize: '0.65rem', color: metric.color, fontWeight: 700 }}>{metric.change}</span>
            </div>
            <h3 className="mono-text" style={{ 
              fontSize: '1.9rem', 
              fontWeight: 700, 
              color: metric.label.includes('DRAGON') ? '#ffcc00' : '#f1f5f9',
              textShadow: metric.label.includes('DRAGON') ? '0 0 10px rgba(255,204,0,0.2)' : 'none'
            }}>{metric.value}</h3>
          </div>
        ))}
      </div>

      {/* Distribution Vectors Timeline Tracking graph */}
      <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <TrendingUp size={16} color="#00e5ff" />
          <span className="mono-text" style={{ fontSize: '0.8rem', fontWeight: 700 }}>LIVE_888_YIELD_PROPAGATION_WAVE</span>
        </div>
        <MetricsChart />
      </div>

    </div>
  );
}

export default AdminDashboard;
