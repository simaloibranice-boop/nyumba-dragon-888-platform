import React, { useState } from 'react';
import { FileText, Search, SlidersHorizontal, Download } from 'lucide-react';

function BillingInvoices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const initialInvoices = [
    { id: "INV-2026-001", date: "2026-05-15", amount: "Ksh 161,200", status: "PAID", type: "LEASE_FEE" },
    { id: "INV-2026-002", date: "2026-05-20", amount: "Ksh 58,500", status: "PENDING", type: "NODE_UTILITY" },
    { id: "INV-2026-003", date: "2026-05-22", amount: "Ksh 273,000", status: "OVERDUE", type: "BANDWIDTH_TAX" },
    { id: "INV-2026-004", date: "2026-05-23", amount: "Ksh 115,700", status: "PAID", type: "CORE_REPAIRS" }
  ];

  // Dynamic Array Parsing Pipeline
  const filteredInvoices = initialInvoices.filter(invoice => {
    const matchesSearch = invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          invoice.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Title block */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>BILLING MATRIX & INVOICES</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Manage transactional records, processing states, and payment routing.</p>
      </div>

      {/* Summary Cards Grid in Ksh */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '6px' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }} className="mono-text">TOTAL_REVENUE_KSH</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f1f5f9' }} className="mono-text">Ksh 492,600</div>
        </div>
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '6px' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }} className="mono-text">PENDING_CLEARANCE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#d6af37' }} className="mono-text">Ksh 58,500</div>
        </div>
      </div>

      {/* Interactive Search Grid Strip */}
      <div style={{ 
        background: '#111622', border: '1px solid rgba(255,255,255,0.1)', 
        padding: '1.25rem 1.5rem', borderRadius: '8px', 
        display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#05070a', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', padding: '0.25rem 0.75rem', minWidth: '280px' }}>
          <Search size={16} color="#708099" />
          <input 
            type="text" 
            placeholder="Search invoice token or allocation code..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: '#f1f5f9', outline: 'none', padding: '0.5rem 0', width: '100%', fontSize: '0.85rem' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={14} color="#708099" style={{ marginRight: '0.25rem' }} />
          {['ALL', 'PAID', 'PENDING', 'OVERDUE'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              style={{
                background: statusFilter === status ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255,255,255,0.02)',
                color: statusFilter === status ? '#00e5ff' : '#94a3b8',
                border: statusFilter === status ? '1px solid #00e5ff' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px', padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'monospace'
              }}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Matrix Render */}
      <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.01)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FileText size={14} color="#00e5ff" />
          <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>TRANSACTION_ROUTING_LEDGER ({filteredInvoices.length} entries)</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice) => (
              <div key={invoice.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span className="mono-text" style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f1f5f9' }}>{invoice.id}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{invoice.type} • Issued {invoice.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span className="mono-text" style={{ fontWeight: 600, color: '#f1f5f9' }}>{invoice.amount}</span>
                  <span style={{ 
                    fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '3px',
                    background: invoice.status === 'PAID' ? 'rgba(16, 185, 129, 0.1)' : invoice.status === 'PENDING' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: invoice.status === 'PAID' ? '#10b981' : invoice.status === 'PENDING' ? '#f59e0b' : '#ef4444',
                    border: '1px solid rgba(255,255,255,0.02)'
                  }} className="mono-text">{invoice.status}</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '3.5rem', textAlign: 'center', color: '#708099', fontSize: '0.85rem' }}>
              No billing entries match your query selection parameters.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default BillingInvoices;
