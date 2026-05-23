import React, { useState } from 'react';
import { History, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';

function SnapshotMatrix() {
  const [restoringId, setRestoringId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const dynamicSnapshots = [
    { id: "SNP-9041", timestamp: "Today, 00:22:15", operator: "Lead Architect", target: "CORE_GATEWAY", version: "v2.4.1" },
    { id: "SNP-8912", timestamp: "Yesterday, 18:40:00", operator: "Automated Bot", target: "LEDGER_INDEX", version: "v2.3.9" },
    { id: "SNP-8750", timestamp: "22 May 2026, 14:10:33", operator: "System Admin", target: "BILLING_MATRIX", version: "v2.3.5" }
  ];

  const handleRollback = (id, target) => {
    setRestoringId(id);
    setSuccessMessage('');
    
    // Simulate structural state rollbacks
    setTimeout(() => {
      setRestoringId(null);
      setSuccessMessage(`SYSTEM STATE SUCCESSFULLY RESTORED TO SNAPSHOT ${id} [${target}]`);
      setTimeout(() => setSuccessMessage(''), 4000);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>CONFIGURATION_SNAPSHOT_MATRIX</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Review version history arrays and rollback core environment configuration definitions instantly.</p>
      </div>

      {successMessage && (
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', padding: '1rem', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mono-text">
          <ShieldCheck size={14} /> {successMessage}
        </div>
      )}

      <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.01)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <History size={14} color="#00e5ff" />
          <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>AVAILABLE_RESTORE_POINTS ({dynamicSnapshots.length} targets)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {dynamicSnapshots.map((snap) => (
            <div key={snap.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="mono-text" style={{ fontWeight: 700, fontSize: '0.85rem', color: '#00e5ff' }}>{snap.id}</span>
                  <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', background: 'rgba(255,255,255,0.05)', color: '#94a3b8', borderRadius: '3px' }} className="mono-text">{snap.version}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Target: <strong style={{ color: '#f1f5f9' }}>{snap.target}</strong> • Triggered by {snap.operator}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span className="mono-text" style={{ fontSize: '0.8rem', color: '#708099' }}>{snap.timestamp}</span>
                <button
                  disabled={restoringId !== null}
                  onClick={() => handleRollback(snap.id, snap.target)}
                  style={{
                    background: restoringId === snap.id ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.08)',
                    border: restoringId === snap.id ? '1px solid #f59e0b' : '1px solid rgba(239, 68, 68, 0.3)',
                    color: restoringId === snap.id ? '#f59e0b' : '#ef4444',
                    padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { if(restoringId !== snap.id) e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'; }}
                  onMouseLeave={(e) => { if(restoringId !== snap.id) e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)'; }}
                >
                  <RotateCcw size={12} style={{ animation: restoringId === snap.id ? 'spin 1s linear infinite' : 'none' }} />
                  {restoringId === snap.id ? 'ROLLING_BACK...' : 'EXECUTE_ROLLBACK'}
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SnapshotMatrix;
