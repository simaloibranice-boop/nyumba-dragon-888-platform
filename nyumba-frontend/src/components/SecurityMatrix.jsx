import React, { useState } from 'react';
import { KeyRound, ShieldAlert, Fingerprint, UserCheck, RefreshCw } from 'lucide-react';

function SecurityMatrix() {
  const [activeRole, setActiveRole] = useState('ROOT_MASTER_888');
  const [isRotating, setIsRotating] = useState(false);
  const [tokenStamp, setTokenStamp] = useState('TOK-888-X902-ALPHA');

  const identities = {
    ROOT_MASTER_888: { name: "Lead Architect Nexus", clearance: "LEVEL_0_MAX", access: "ALL_SYSTEMS" },
    REGIONAL_AGENT_NAIVASHA: { name: "Naivasha Field Operator", clearance: "LEVEL_2_PROP", access: "ASSET_LEDGER_ONLY" },
    AUDITOR_COMPLIANCE: { name: "External Matrix Auditor", clearance: "LEVEL_1_FIN", access: "BILLING_MATRIX_ONLY" }
  };

  const handleTokenRotation = () => {
    setIsRotating(true);
    setTimeout(() => {
      const randomHex = Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase();
      setTokenStamp(`TOK-888-${randomHex}-BETA`);
      setIsRotating(false);
    }, 1200);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>SECURITY_ACCESS_GATEWAY</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Manage cryptographic access tokens, rotate session signing keys, and test role privilege constraints.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Token Management Panel */}
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
            <KeyRound size={16} color="#ffcc00" />
            <span className="mono-text" style={{ fontSize: '0.8rem', fontWeight: 700 }}>ACTIVE_SESSION_JWT_CONTEXT</span>
          </div>

          <div style={{ background: '#05070a', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '4px' }}>
            <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }} className="mono-text">SIGNING_TOKEN_STRING</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffcc00', letterSpacing: '1px' }} className="mono-text">
              {isRotating ? 'RE-GENERATING_KEYS...' : tokenStamp}
            </span>
          </div>

          <button 
            onClick={handleTokenRotation}
            disabled={isRotating}
            style={{ 
              background: 'transparent', border: '1px solid rgba(255, 204, 0, 0.4)', color: '#ffcc00', 
              padding: '0.6rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, 
              fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center'
            }}
            className="mono-text"
          >
            <RefreshCw size={14} style={{ animation: isRotating ? 'spin 1.5s linear infinite' : 'none' }} />
            ROTATE_SESSION_SIGNING_KEYS
          </button>
        </div>

        {/* Identity Context Switcher Panel */}
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
            <Fingerprint size={16} color="#00e5ff" />
            <span className="mono-text" style={{ fontSize: '0.8rem', fontWeight: 700 }}>SIMULATE_PRIVILEGE_ENVIRONMENT</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>SELECT ASSIGNED TOKEN PROFILE</label>
            <select value={activeRole} onChange={(e) => setActiveRole(e.target.value)} style={{ width: '100%' }}>
              <option value="ROOT_MASTER_888">ROOT_MASTER_888 (Full Control)</option>
              <option value="REGIONAL_AGENT_NAIVASHA">REGIONAL_AGENT_NAIVASHA (Field Ops)</option>
              <option value="AUDITOR_COMPLIANCE">AUDITOR_COMPLIANCE (Read-Only Financials)</option>
            </select>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div><span style={{ color: '#94a3b8' }}>OPERATOR:</span> <strong style={{ color: '#f1f5f9' }}>{identities[activeRole].name}</strong></div>
            <div><span style={{ color: '#94a3b8' }}>CLEARANCE:</span> <span style={{ color: '#00e5ff' }} className="mono-text">{identities[activeRole].clearance}</span></div>
            <div><span style={{ color: '#94a3b8' }}>BOUND_SCOPE:</span> <span style={{ color: '#10b981' }} className="mono-text">{identities[activeRole].access}</span></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default SecurityMatrix;
