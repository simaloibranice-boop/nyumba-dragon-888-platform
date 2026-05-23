import React from 'react';
import { ShieldAlert, CheckCircle2, Info, X } from 'lucide-react';

function NotificationStack({ notifications, onDismiss }) {
  if (!notifications || notifications.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 1000,
      maxWidth: '420px',
      width: 'calc(100vw - 4rem)'
    }}>
      {notifications.map((alert) => {
        // Choose color values and icons dynamically based on notification type status strings
        let accentColor = '#00e5ff'; // Info default
        let IconComponent = Info;
        let bgStyle = 'rgba(17, 22, 34, 0.95)';

        if (alert.type === 'CRITICAL') {
          accentColor = '#ef4444';
          IconComponent = ShieldAlert;
          bgStyle = 'linear-gradient(90deg, rgba(239, 68, 68, 0.1) 0%, rgba(17, 22, 34, 0.98) 100%)';
        } else if (alert.type === 'SUCCESS') {
          accentColor = '#10b981';
          IconComponent = CheckCircle2;
          bgStyle = 'linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(17, 22, 34, 0.98) 100%)';
        }

        return (
          <div
            key={alert.id}
            style={{
              background: bgStyle,
              backgroundColor: '#111622',
              border: `1px solid rgba(255, 255, 255, 0.1)`,
              borderLeft: `4px solid ${accentColor}`,
              borderRadius: '6px',
              padding: '1.25rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              transform: 'translateX(0)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(8px)'
            }}
          >
            {/* Left Hand Indicator Icon */}
            <div style={{ marginTop: '0.15rem' }}>
              <IconComponent size={18} color={accentColor} />
            </div>

            {/* Core Notification Meta Layout */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mono-text" style={{ fontSize: '0.7rem', fontWeight: 700, color: accentColor, letterSpacing: '0.5px' }}>
                  {alert.type}_{alert.code}
                </span>
                <span className="mono-text" style={{ fontSize: '0.65rem', color: '#708099' }}>
                  {alert.timestamp}
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#f1f5f9', margin: 0, lineHeight: '1.4' }}>
                {alert.message}
              </p>
            </div>

            {/* Absolute Dismiss Cross Interceptor */}
            <button
              onClick={() => onDismiss(alert.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#708099',
                cursor: 'pointer',
                padding: '0.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#708099'}
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NotificationStack;
