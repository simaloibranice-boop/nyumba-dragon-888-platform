import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, ShieldAlert, Cpu, Network, Radio } from 'lucide-react';

function FeatureControl() {
  const [flags, setFlags] = useState({
    apiGatewayCaching: true,
    mpesaAutoReconciliation: true,
    telemetryStreamInterval: false,
    maintenanceModeMode: false
  });

  const toggleFlag = (flagKey) => {
    setFlags(prev => ({
      ...prev,
      [flagKey]: !prev[flagKey]
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Title Header */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>CORE_FEATURE_FLAG_CONFIGURATOR</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Hot-swap operational variables, modify runtime configurations, or execute structural network blocks instantly.</p>
      </div>

      {/* Warning Bar if Maintenance Mode is Activated */}
      {flags.maintenanceModeMode && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444',
          padding: '1rem 1.5rem', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem'
        }} className="mono-text">
          <ShieldAlert size={16} />
          CRITICAL_NOTICE: PLATFORM IS NOW PROPAGATING UNDER MAINTENANCE_MODE RESTRICTIONS. ALL EXTERNAL APIS FORWARDED TO ISOLATION VAULTS.
        </div>
      )}

      {/* Grid containing operational controls */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
        
        {/* Flag Card 1 */}
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Cpu size={20} color={flags.apiGatewayCaching ? "#00e5ff" : "#708099"} />
            <div>
              <span className="mono-text" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', display: 'block' }}>API_GATEWAY_CACHING</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Stores hot asset memory targets to keep responses sub-5ms</span>
            </div>
          </div>
          <button onClick={() => toggleFlag('apiGatewayCaching')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
            {flags.apiGatewayCaching ? <ToggleRight size={36} color="#00e5ff" /> : <ToggleLeft size={36} color="#708099" />}
          </button>
        </div>

        {/* Flag Card 2 */}
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Network size={20} color={flags.mpesaAutoReconciliation ? "#10b981" : "#708099"} />
            <div>
              <span className="mono-text" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', display: 'block' }}>MPESA_AUTO_RECONCILE</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Automated matching loop verification for transaction ledgers</span>
            </div>
          </div>
          <button onClick={() => toggleFlag('mpesaAutoReconciliation')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
            {flags.mpesaAutoReconciliation ? <ToggleRight size={36} color="#10b981" /> : <ToggleLeft size={36} color="#708099" />}
          </button>
        </div>

        {/* Flag Card 3 */}
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Radio size={20} color={flags.telemetryStreamInterval ? "#d6af37" : "#708099"} />
            <div>
              <span className="mono-text" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9', display: 'block' }}>AGGRESSIVE_STREAM_POLLING</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Reduces vector graphing intervals down to 250ms bursts</span>
            </div>
          </div>
          <button onClick={() => toggleFlag('telemetryStreamInterval')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
            {flags.telemetryStreamInterval ? <ToggleRight size={36} color="#d6af37" /> : <ToggleLeft size={36} color="#708099" />}
          </button>
        </div>

        {/* Flag Card 4 - The System Kill Switch */}
        <div style={{ background: 'linear-gradient(135deg, #111622 0%, rgba(239,68,68,0.03) 100%)', border: flags.maintenanceModeMode ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ShieldAlert size={20} color={flags.maintenanceModeMode ? "#ef4444" : "#708099"} />
            <div>
              <span className="mono-text" style={{ fontSize: '0.85rem', fontWeight: 700, color: flags.maintenanceModeMode ? '#ef4444' : '#f1f5f9', display: 'block' }}>GLOBAL_MAINTENANCE_LOCK</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Isolate master environment and drop active listener tunnels</span>
            </div>
          </div>
          <button onClick={() => toggleFlag('maintenanceModeMode')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
            {flags.maintenanceModeMode ? <ToggleRight size={36} color="#ef4444" /> : <ToggleLeft size={36} color="#708099" />}
          </button>
        </div>

      </div>

    </div>
  );
}

export default FeatureControl;
