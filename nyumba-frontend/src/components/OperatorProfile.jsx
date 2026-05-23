import React, { useState } from 'react';
import { User, Shield, Cpu, Save, Download, CheckCircle } from 'lucide-react';

function OperatorProfile() {
  const [operatorName, setOperatorName] = useState('Lead System Architect');
  const [sessionTimeout, setSessionTimeout] = useState('60');
  const [showStatusIndicator, setShowStatusIndicator] = useState(false);

  // Core programmatic file compiler function block
  const handleExportSystemConfig = () => {
    const backupPayload = {
      manifest_id: "CFG-NODE-77X",
      timestamp_epoch: Date.now(),
      operator_identity: operatorName,
      security_attributes: {
        clearance_level: "ROOT_LEVEL_0",
        session_timeout_minutes: sessionTimeout
      },
      environment_context: {
        platform: "Ubuntu Linux x86_64",
        deployment_uri: "http://localhost:5173"
      }
    };

    // Construct an ephemeral data blob link allocation tunnel
    const dataBlob = new Blob([JSON.stringify(backupPayload, null, 2)], { type: 'application/json' });
    const blobUrl = URL.createObjectURL(dataBlob);
    
    const secondaryTriggerLink = document.createElement('a');
    secondaryTriggerLink.href = blobUrl;
    secondaryTriggerLink.download = `operator_profile_config_${Date.now()}.json`;
    
    document.body.appendChild(secondaryTriggerLink);
    secondaryTriggerLink.click();
    
    // Cleanup reference vectors instantly
    document.body.removeChild(secondaryTriggerLink);
    URL.revokeObjectURL(blobUrl);

    // Show temporary layout notice status response
    setShowStatusIndicator(true);
    setTimeout(() => setShowStatusIndicator(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>OPERATOR_PROFILE_CONFIGURATION</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Manage hardware profiles, execute backups, and secure environment preferences.</p>
        </div>
        
        {/* Real-time Dynamic Data Stream Export Button Control */}
        <button 
          onClick={handleExportSystemConfig}
          style={{ background: 'transparent', border: '1px solid rgba(0, 229, 255, 0.4)', color: '#00e5ff', padding: '0.65rem 1.25rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          className="mono-text"
        >
          <Download size={14} /> EXPORT_PROFILE_CONFIG
        </button>
      </div>

      {showStatusIndicator && (
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', padding: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }} className="mono-text">
          <CheckCircle size={14} /> SYSTEM_MANIFEST_EXPORTED_SUCCESSFULLY_TO_LOCAL_DISK
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Left Form View Container Component */}
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <User size={18} color="#00e5ff" />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9' }}>IDENTITY & WORKSPACE</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>OPERATOR ASSIGNED NAME</label>
            <input type="text" value={operatorName} onChange={(e) => setOperatorName(e.target.value)} style={{ width: '100%' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>SESSION EXPIRATION LIMIT</label>
            <select value={sessionTimeout} onChange={(e) => setSessionTimeout(e.target.value)} style={{ width: '100%' }}>
              <option value="60">60 MINS (STANDARD)</option>
              <option value="30">30 MINS</option>
              <option value="120">120 MINS</option>
            </select>
          </div>

          <button type="button" style={{ background: '#00e5ff', color: '#0a0d14', border: 'none', borderRadius: '4px', padding: '0.75rem 1.5rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
            <Save size={16} /> COMMIT_CHANGES
          </button>
        </div>

        {/* Right Info panels column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Cpu size={16} color="#d6af37" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }} className="mono-text">HOST_ENVIRONMENT_STAMP</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#94a3b8' }}>CORE_PLATFORM:</span><span>Ubuntu Linux x86_64</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#94a3b8' }}>LOCAL_PORT:</span><span style={{ color: '#00e5ff' }}>localhost:5173</span></div>
            </div>
          </div>

          <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Shield size={16} color="#10b981" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }} className="mono-text">SECURITY ACCESS STATUS</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' }}>
              Your profile currently holds <strong style={{ color: '#10b981' }}>ROOT_LEVEL_0</strong> clearance attributes. Full systemic management scope verified.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default OperatorProfile;
