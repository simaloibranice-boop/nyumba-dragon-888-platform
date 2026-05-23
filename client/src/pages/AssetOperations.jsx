import React, { useState } from 'react';
import { Briefcase, Plus, Filter, HardDrive } from 'lucide-react';

function AssetOperations() {
  const [assets] = useState([
    { code: 'ND-PRP-001', name: 'Executive Suite Complex A', class: 'Real Estate', capital: 'KES 45,000,000', status: 'OPERATIONAL' },
    { code: 'ND-FLD-042', name: 'Automated Transport Module 02', class: 'Logistical Fleet', capital: 'KES 8,200,000', status: 'TRANSIT_EN_ROUTE' },
    { code: 'ND-SYS-888', name: 'Core Compute Server Nodes', class: 'Hardware Node', capital: 'KES 3,500,000', status: 'MAINTENANCE_CYCLE' }
  ]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Module Title Actions Area */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
        <div>
          <h2 className="mono-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>ASSET_OPERATIONS_REGISTRY</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Real-time valuation, physical deployment status tracking logs</p>
        </div>
        <button style={{ padding: '0.6rem 1.2rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <Plus size={14} /> ALLOCATE_NEW_ASSET
        </button>
      </div>

      {/* Registry Interactive Filter Bar */}
      <div className="glass-panel" style={{ padding: '1rem', borderRadius: '4px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Filter size={16} color="var(--text-secondary)" />
        <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700 }}>FILTER_ENGINE:</span>
        <select style={{ padding: '0.4rem 0.8rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.8rem', outline: 'none' }}>
          <option>ALL ASSET CLASSIFICATIONS</option>
          <option>REAL ESTATE</option>
          <option>LOGISTICAL FLEET</option>
          <option>HARDWARE NODE</option>
        </select>
      </div>

      {/* Asset Grid Tracking Displays */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {assets.map((asset) => (
          <div key={asset.code} className="glass-panel" style={{ padding: '1.5rem 2rem', borderRadius: '6px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--accent-gold)' }}>
                <HardDrive size={22} />
              </div>
              <div>
                <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', display: 'block', fontWeight: 700 }}>{asset.code}</span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginTop: '0.1rem', fontWeight: 600 }}>{asset.name}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Class: {asset.class}</span>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="mono-text" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', display: 'block', fontWeight: 700 }}>{asset.capital}</span>
              <span className="mono-text" style={{ display: 'inline-block', fontSize: '0.65rem', padding: '0.2rem 0.5rem', background: asset.status === 'OPERATIONAL' ? 'rgba(0,225,255,0.08)' : 'rgba(212,175,55,0.08)', color: asset.status === 'OPERATIONAL' ? 'var(--accent-blue)' : 'var(--accent-gold)', border: '1px solid var(--border-color)', borderRadius: '4px', marginTop: '0.4rem', fontWeight: 700 }}>
                {asset.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AssetOperations;
