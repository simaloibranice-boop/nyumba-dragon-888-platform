import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import PropertyLedger from './components/PropertyLedger';
import BillingInvoices from './components/BillingInvoices';
import OperatorProfile from './components/OperatorProfile';
import LogInterceptor from './components/LogInterceptor';
import SnapshotMatrix from './components/SnapshotMatrix';
import SystemTerminal from './components/SystemTerminal';
import FeatureControl from './components/FeatureControl';
import SecurityMatrix from './components/SecurityMatrix';
import PayoutLedger from './components/PayoutLedger';
import NotificationStack from './components/NotificationStack';
import { LayoutDashboard, FileText, Settings, Database, Terminal, History, Cpu, ToggleRight, ShieldAlert, Landmark, Menu, X, Bell, Flame } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const triggerMockNotification = () => {
    const alerts = [
      { type: 'SUCCESS', code: 'LEDGER_COMMITTED', message: 'Alpha Core Nexus valuation array updated successfully.' },
      { type: 'INFO', code: 'AUTH_ROTATION', message: 'Cryptographic security token sequence cycled automatically.' },
      { type: 'CRITICAL', code: 'GATEWAY_DROP', message: 'High network transport latency spike detected on Naivasha stream.' }
    ];
    const pickedAlert = alerts[Math.floor(Math.random() * alerts.length)];
    const timeNow = new Date().toTimeString().split(' ')[0];
    setNotifications(prev => [...prev, { id: Date.now(), ...pickedAlert, timestamp: timeNow }]);
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard': return <AdminDashboard />;
      case 'ledger': return <PropertyLedger />;
      case 'billing': return <BillingInvoices />;
      case 'payouts': return <PayoutLedger />;
      case 'logs': return <LogInterceptor />;
      case 'snapshots': return <SnapshotMatrix />;
      case 'terminal': return <SystemTerminal />;
      case 'features': return <FeatureControl />;
      case 'security': return <SecurityMatrix />;
      case 'profile': return <OperatorProfile />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0a0d14', color: '#f1f5f9', width: '100vw' }}>
      
      {/* SIDEBAR NAVIGATION FRAMEWORK */}
      <aside style={{ 
        width: sidebarOpen ? '280px' : '0px', background: '#111622', borderRight: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0, zIndex: 100, overflow: 'hidden', transition: 'all 0.2s ease'
      }}>
        <div style={{ padding: '2rem 1.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Flame size={18} color="#ffcc00" style={{ filter: 'drop-shadow(0 0 4px rgba(255,204,0,0.4))' }} />
          <span className="mono-text" style={{ fontSize: '0.95rem', fontWeight: 900, color: '#ffcc00', letterSpacing: '1px' }}>
            NYUMBA DRAGON 888
          </span>
        </div>

        <nav style={{ padding: '2rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button onClick={() => setActiveTab('dashboard')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'dashboard' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'dashboard' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <LayoutDashboard size={16} /> Command Center
          </button>
          <button onClick={() => setActiveTab('ledger')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'ledger' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'ledger' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <Database size={16} /> Asset Ledger
          </button>
          <button onClick={() => setActiveTab('billing')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'billing' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'billing' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <FileText size={16} /> Billing Matrix
          </button>
          <button onClick={() => setActiveTab('payouts')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'payouts' ? 'rgba(255, 204, 0, 0.08)' : 'transparent', color: activeTab === 'payouts' ? '#ffcc00' : '#94a3b8', textAlign: 'left' }}>
            <Landmark size={16} /> Agent Payouts
          </button>
          <button onClick={() => setActiveTab('logs')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'logs' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'logs' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <Terminal size={16} /> Log Interceptor
          </button>
          <button onClick={() => setActiveTab('snapshots')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'snapshots' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'snapshots' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <History size={16} /> State Snapshots
          </button>
          <button onClick={() => setActiveTab('terminal')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'terminal' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'terminal' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <Cpu size={16} /> System Shell
          </button>
          <button onClick={() => setActiveTab('features')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'features' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'features' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <ToggleRight size={16} /> Feature Flags
          </button>
          <button onClick={() => setActiveTab('security')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'security' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'security' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <ShieldAlert size={16} /> Token Security
          </button>
          <button onClick={() => setActiveTab('profile')} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', background: activeTab === 'profile' ? 'rgba(0, 229, 255, 0.1)' : 'transparent', color: activeTab === 'profile' ? '#00e5ff' : '#94a3b8', textAlign: 'left' }}>
            <Settings size={16} /> Operator Settings
          </button>
        </nav>
      </aside>

      {/* VIEWPORT AREA CONTROLLER */}
      <div style={{ flex: 1, marginLeft: sidebarOpen ? '280px' : '0px', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0a0d14' }}>
        <header style={{ height: '70px', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#111622' }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'transparent', border: 'none', color: '#f1f5f9', cursor: 'pointer' }}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button onClick={triggerMockNotification} style={{ background: 'rgba(0, 229, 255, 0.08)', border: '1px solid #00e5ff', color: '#00e5ff', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mono-text">
              <Bell size={12} /> DISPATCH_MOCK_EVENT
            </button>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>
              STATUS: <span style={{ color: '#10b981', fontWeight: 700 }}>SYSTEM_ONLINE</span>
            </div>
          </div>
        </header>

        <main style={{ padding: '3.5rem 3rem', flex: 1, backgroundColor: '#0a0d14' }}>
          {renderActiveView()}
        </main>
      </div>

      <NotificationStack notifications={notifications} onDismiss={dismissNotification} />

    </div>
  );
}

export default App;
