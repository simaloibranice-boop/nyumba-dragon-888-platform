import React, { useState } from 'react';
import { Database, Plus, X, Check, ShieldCheck } from 'lucide-react';

function PropertyLedger() {
  // State tracking for the live property table list array
  const [properties, setProperties] = useState([
    { id: "PRP-091", title: "Alpha Core Nexus", sector: "Sector 4", yield: "94.2%", status: "OPTIMAL" },
    { id: "PRP-104", title: "Beta Outpost Node", sector: "Sector 2", yield: "88.7%", status: "STABLE" },
    { id: "PRP-402", title: "Gamma Fringe Gateway", sector: "Sector 9", yield: "72.1%", status: "MAINTENANCE" }
  ]);

  // Modal open toggle state variable
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form input capture elements
  const [newName, setNewName] = useState('');
  const [newSector, setNewSector] = useState('Sector 1');
  const [newYield, setNewYield] = useState('90.0%');

  // Form submit handler routine
  const handleCreateNode = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newId = `PRP-${Math.floor(100 + Math.random() * 900)}`;
    const newNode = {
      id: newId,
      title: newName,
      sector: newSector,
      yield: newYield,
      status: "OPTIMAL"
    };

    setProperties(prev => [newNode, ...prev]);
    
    // Clear fields and drop the modal visibility
    setNewName('');
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
      
      {/* Title block row layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>ASSET & PROPERTY LEDGER</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>System inventory tracking allocations and real estate structural zones.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ 
            background: '#00e5ff', color: '#0a0d14', border: 'none', 
            padding: '0.65rem 1.25rem', borderRadius: '4px', fontWeight: 700, 
            fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
          className="mono-text"
        >
          <Plus size={14} /> ALLOCATE_NEW_NODE
        </button>
      </div>

      {/* Main Structural Inventory Table Panel */}
      <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '1.2rem 1.5rem', color: '#94a3b8' }} className="mono-text">NODE_ID</th>
              <th style={{ padding: '1.2rem 1.5rem', color: '#94a3b8' }}>ASSET NAME</th>
              <th style={{ padding: '1.2rem 1.5rem', color: '#94a3b8' }}>STRUCTURAL ZONE</th>
              <th style={{ padding: '1.2rem 1.5rem', color: '#94a3b8' }}>EFFICIENCY</th>
              <th style={{ padding: '1.2rem 1.5rem', color: '#94a3b8' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.2s' }}>
                <td style={{ padding: '1.2rem 1.5rem', fontWeight: 700, color: '#00e5ff' }} className="mono-text">{item.id}</td>
                <td style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: '#f1f5f9' }}>{item.title}</td>
                <td style={{ padding: '1.2rem 1.5rem', color: '#94a3b8' }}>{item.sector}</td>
                <td style={{ padding: '1.2rem 1.5rem', color: '#d6af37' }} className="mono-text">{item.yield}</td>
                <td style={{ padding: '1.2rem 1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '3px',
                    background: item.status === 'OPTIMAL' ? 'rgba(16, 185, 129, 0.1)' : item.status === 'STABLE' ? 'rgba(0, 229, 255, 0.08)' : 'rgba(245, 158, 11, 0.1)',
                    color: item.status === 'OPTIMAL' ? '#10b981' : item.status === 'STABLE' ? '#00e5ff' : '#d6af37',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OVERLAY POPUP MODAL DIALOG CONTAINER */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(5, 7, 10, 0.8)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
        }}>
          <div style={{
            background: '#111622', border: '1px solid rgba(255,255,255,0.15)',
            width: '100%', maxWidth: '480px', borderRadius: '8px', overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
          }}>
            {/* Modal Header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.01)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={16} color="#00e5ff" />
                <span className="mono-text" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f1f5f9' }}>ALLOCATE_NEW_NODE_ENTRY</span>
              </div>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            {/* Modal Interactive Form Content area */}
            <form onSubmit={handleCreateNode} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>NEW ASSET CLUSTER NAME</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Delta Storage Matrix" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>STRUCTURAL ZONE</label>
                  <select value={newSector} onChange={(e) => setNewSector(e.target.value)} style={{ width: '100%' }}>
                    <option value="Sector 1">Sector 1</option>
                    <option value="Sector 4">Sector 4</option>
                    <option value="Sector 7">Sector 7</option>
                    <option value="Sector 9">Sector 9</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700 }}>EXPECTED RATIO YIELD</label>
                  <select value={newYield} onChange={(e) => setNewYield(e.target.value)} style={{ width: '100%' }}>
                    <option value="95.4%">95.4% (MAX)</option>
                    <option value="90.0%">90.0% (HIGH)</option>
                    <option value="82.5%">82.5% (STABLE)</option>
                  </select>
                </div>
              </div>

              {/* Action row footer inside modal */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  CANCEL
                </button>
                <button 
                  type="submit" 
                  style={{ background: '#10b981', color: '#0a0d14', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <Check size={14} /> COMPILE_ENTRY
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default PropertyLedger;
