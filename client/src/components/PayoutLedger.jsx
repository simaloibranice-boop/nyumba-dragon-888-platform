import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Landmark, ArrowUpRight, CheckCircle } from 'lucide-react';

function PayoutLedger() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const historicalPayouts = [
    { id: "PAY-DRG-0881", node: "Naivasha Central Node", operator: "Agent Omondi", amount: "Ksh 142,500", channel: "M-PESA B2C", status: "SETTLED", timestamp: "Today, 01:10" },
    { id: "PAY-DRG-0882", node: "Mai Mahiu Nexus", operator: "Agent Wanjiku", amount: "Ksh 96,800", channel: "M-PESA B2C", status: "PROCESSING", timestamp: "Today, 00:45" },
    { id: "PAY-DRG-0883", node: "Gilgil Regional Hub", operator: "Agent Mwangi", amount: "Ksh 210,400", channel: "EFT BANKING", status: "SETTLED", timestamp: "Yesterday, 17:30" }
  ];

  const filteredPayouts = historicalPayouts.filter(p => 
    activeFilter === 'ALL' || p.status === activeFilter
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Title */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>COMMISSION_PAYOUT_LEDGER</h2>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Monitor real-time regional node revenue allocations, automated split parameters, and clearing pipeline settlements.</p>
      </div>

      {/* Aggregated Commission Stat Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #ffcc00' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }} className="mono-text">TOTAL_AGENT_DISBURSEMENTS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffcc00' }} className="mono-text">Ksh 449,700</div>
        </div>
        <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid #10b981' }}>
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }} className="mono-text">BATCH_RECONCILIATION_RATE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#10b981' }} className="mono-text">100% SECURE</div>
        </div>
      </div>

      {/* Filter Ribbon Strip */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {['ALL', 'SETTLED', 'PROCESSING'].map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            style={{
              background: activeFilter === status ? 'rgba(255, 204, 0, 0.15)' : 'rgba(255,255,255,0.02)',
              color: activeFilter === status ? '#ffcc00' : '#94a3b8',
              border: activeFilter === status ? '1px solid #ffcc00' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px', padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'monospace'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Payout Matrix Registry Table */}
      <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.01)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Landmark size={14} color="#ffcc00" />
          <span className="mono-text" style={{ fontSize: '0.75rem', fontWeight: 700 }}>NODE_COMMISSION_DISPATCH_LEDGER</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredPayouts.map((payout) => (
            <div key={payout.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="mono-text" style={{ fontWeight: 700, fontSize: '0.85rem', color: '#f1f5f9' }}>{payout.id}</span>
                  <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', background: 'rgba(255,255,255,0.05)', color: '#94a3b8', borderRadius: '3px' }} className="mono-text">{payout.channel}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{payout.node} • <strong style={{ color: '#e2e8f0' }}>{payout.operator}</strong></span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <span className="mono-text" style={{ fontWeight: 700, color: '#ffcc00', display: 'block' }}>{payout.amount}</span>
                  <span style={{ fontSize: '0.65rem', color: '#708099' }}>{payout.timestamp}</span>
                </div>
                <span style={{ 
                  fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '3px',
                  background: payout.status === 'SETTLED' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: payout.status === 'SETTLED' ? '#10b981' : '#f59e0b',
                  border: '1px solid rgba(255,255,255,0.02)'
                }} className="mono-text">{payout.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default PayoutLedger;
