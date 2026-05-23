import React, { useState } from 'react';
import { DollarSign, Receipt, Plus, Filter, Search, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

function InvoiceManager() {
  // Local static collection mapping infrastructure invoices
  const [invoices, setInvoices] = useState([
    { id: 'INV-2026-001', client: 'AeroFreight Logistics', amountKes: 1800000, date: '2026-05-10', status: 'PAID', category: 'Fleet Fueling' },
    { id: 'INV-2026-002', client: 'Rift Retail Holdings', amountKes: 4500000, date: '2026-05-18', status: 'PENDING', category: 'Warehousing' },
    { id: 'INV-2026-003', client: 'Serene Estates Naivasha', amountKes: 12500000, date: '2026-04-01', status: 'OVERDUE', category: 'Asset Lease' },
    { id: 'INV-2026-004', client: 'Apex Telecomm Group', amountKes: 620000, date: '2026-05-22', status: 'PENDING', category: 'Server Compute' }
  ]);

  const [currency, setCurrency] = useState('KES'); // KES or USD
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Form input capture variables
  const [newClient, setNewClient] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newCategory, setNewCategory] = useState('Warehousing');

  // Static Conversion Factor: 1 USD = 135 KES
  const EXCHANGE_RATE = 135;

  const formatValue = (amountInKes) => {
    if (currency === 'USD') {
      const usdValue = amountInKes / EXCHANGE_RATE;
      return `$${usdValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `KES ${amountInKes.toLocaleString()}`;
  };

  // Processing metrics allocations
  const totalVolumeKes = invoices.reduce((sum, inv) => sum + inv.amountKes, 0);
  const pendingVolumeKes = invoices.filter(i => i.status === 'PENDING').reduce((sum, inv) => sum + inv.amountKes, 0);
  const overdueVolumeKes = invoices.filter(i => i.status === 'OVERDUE').reduce((sum, inv) => sum + inv.amountKes, 0);

  const handleCreateInvoice = (e) => {
    e.preventDefault();
    if (!newClient.trim() || !newAmount) return;

    const newInv = {
      id: `INV-2026-00${invoices.length + 1}`,
      client: newClient,
      amountKes: parseFloat(newAmount),
      date: new Date().toISOString().split('T')[0],
      status: 'PENDING',
      category: newCategory
    };

    setInvoices([newInv, ...invoices]);
    setNewClient('');
    setNewAmount('');
    setShowModal(false);
  };

  const filteredInvoices = invoices.filter(inv => {
    const matchesStatus = filterStatus === 'ALL' || inv.status === filterStatus;
    const matchesSearch = inv.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          inv.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Module Title Header Panel Area */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
        <div>
          <h2 className="mono-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>FINANCIAL_INVOICE_LEDGER</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Multi-currency cross-border tracking ledger system matrix</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* Currency Toggle Switches */}
          <div className="glass-panel" style={{ display: 'flex', padding: '0.25rem', borderRadius: '4px' }}>
            <button 
              onClick={() => setCurrency('KES')}
              style={{ padding: '0.4rem 0.8rem', border: 'none', background: currency === 'KES' ? 'var(--text-primary)' : 'transparent', color: currency === 'KES' ? 'var(--bg-primary)' : 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, borderRadius: '2px', cursor: 'pointer' }}
              className="mono-text"
            >KES</button>
            <button 
              onClick={() => setCurrency('USD')}
              style={{ padding: '0.4rem 0.8rem', border: 'none', background: currency === 'USD' ? 'var(--text-primary)' : 'transparent', color: currency === 'USD' ? 'var(--bg-primary)' : 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, borderRadius: '2px', cursor: 'pointer' }}
              className="mono-text"
            >USD</button>
          </div>

          <button 
            onClick={() => setShowModal(true)}
            style={{ padding: '0.6rem 1.2rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          >
            <Plus size={14} /> GENERATE_NEW_INVOICE
          </button>
        </div>
      </div>

      {/* Analytical Tracking Scorecards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>GROSS_VOLUME_ISSUED</span>
            <Receipt size={16} />
          </div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>{formatValue(totalVolumeKes)}</h3>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>PENDING_ALLOCATION</span>
            <Clock size={16} />
          </div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>{formatValue(pendingVolumeKes)}</h3>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ef4444', marginBottom: '1rem' }}>
            <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>EXPIRED_OVERDUE_STRIKES</span>
            <AlertTriangle size={16} />
          </div>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: 600 }}>{formatValue(overdueVolumeKes)}</h3>
        </div>
      </div>

      {/* Structural Filtering Control Belt */}
      <div className="glass-panel" style={{ padding: '1rem', borderRadius: '6px', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: 1, minWidth: '280px' }}>
          <Search size={16} color="var(--text-secondary)" />
          <input 
            type="text" 
            placeholder="Search by ID, business corporate entity, or classification..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', width: '100%', fontSize: '0.85rem', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Filter size={14} color="var(--text-secondary)" />
          <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 700 }}>STATUS_FILTER:</span>
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{ padding: '0.4rem 0.8rem', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.8rem', outline: 'none' }}
          >
            <option value="ALL">ALL ARTIFACT STATES</option>
            <option value="PAID">PAID RECORDS</option>
            <option value="PENDING">PENDING CLEARANCE</option>
            <option value="OVERDUE">OVERDUE DETECTIONS</option>
          </select>
        </div>
      </div>

      {/* Main Ledger Structured Table */}
      <div className="glass-panel" style={{ borderRadius: '6px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }} className="mono-text">
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700 }}>INVOICE_ID</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700 }}>CLIENT_ENTITY</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700 }}>CLASSIFICATION</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700 }}>DATE_STAMP</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700, textAlign: 'right' }}>VALUATION_CAP</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700, textAlign: 'center' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((inv) => (
                <tr key={inv.id} style={{ borderBottom: '1px solid var(--border-color)' }} className="table-row-hover">
                  <td style={{ padding: '1.2rem 1.5rem', fontWeight: 700 }} className="mono-text">{inv.id}</td>
                  <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>{inv.client}</td>
                  <td style={{ padding: '1.2rem 1.5rem', color: 'var(--text-secondary)' }}>{inv.category}</td>
                  <td style={{ padding: '1.2rem 1.5rem' }} className="mono-text">{inv.date}</td>
                  <td style={{ padding: '1.2rem 1.5rem', textAlign: 'right', fontWeight: 700 }} className="mono-text">
                    {formatValue(inv.amountKes)}
                  </td>
                  <td style={{ padding: '1.2rem 1.5rem', textAlign: 'center' }}>
                    <span className="mono-text" style={{
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 700,
                      background: inv.status === 'PAID' ? 'rgba(34,197,94,0.08)' : inv.status === 'PENDING' ? 'rgba(234,179,8,0.08)' : 'rgba(239,68,68,0.08)',
                      color: inv.status === 'PAID' ? '#22c55e' : inv.status === 'PENDING' ? 'var(--accent-gold)' : '#ef4444',
                      border: '1px solid var(--border-color)'
                    }}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }} className="mono-text">
                  NO_MATCHING_BILLING_RECORDS_FOUND
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Record Creation Dialog Modal Layer Overlay */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(5, 7, 10, 0.8)', backdropFilter: 'blur(8px)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyProject: 'center', padding: '1rem' }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '460px', borderRadius: '8px', padding: '2rem', background: 'var(--bg-primary)', margin: 'auto' }}>
            <h3 className="mono-text" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>ALLOCATE_NEW_INVOICE_RECORD</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Creates simulated local transaction logs into client ledger state pools.</p>
            
            <form onSubmit={handleCreateInvoice} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label className="mono-text" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 700 }}>CLIENT_ENTITY_NAME</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Mount Kenya Logistical Group"
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }}
                />
              </div>

              <div>
                <label className="mono-text" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 700 }}>VALUATION_CAPITAL (KES)</label>
                <input 
                  type="number" 
                  required
                  placeholder="e.g. 2400000"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }}
                />
              </div>

              <div>
                <label className="mono-text" style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 700 }}>OPERATIONAL_CLASSIFICATION</label>
                <select 
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }}
                >
                  <option value="Warehousing">Warehousing Logistics</option>
                  <option value="Fleet Fueling">Fleet Fueling Modules</option>
                  <option value="Asset Lease">Asset Lease Complexes</option>
                  <option value="Server Compute">Server Compute Nodes</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  style={{ padding: '0.6rem 1.2rem', background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.8rem' }}
                >CANCEL</button>
                <button 
                  type="submit"
                  style={{ padding: '0.6rem 1.2rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem' }}
                >COMMIT_RECORD</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default InvoiceManager;
