import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, KeyRound, Server, Eye, EyeOff } from 'lucide-react';

function LoginPortal({ onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Client');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1 = Credentials, 2 = 2FA/OTP
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [isProcessing, setIsProcessing] = useState(false);
  const [systemLogs, setSystemLogs] = useState('GATEWAY_STANDBY // SECURE_SOCKET_READY');

  const availableRoles = ['Super Admin', 'Director', 'Operations Team', 'Technical Staff', 'Client', 'Investor'];

  const handleCredentialSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsProcessing(true);
    setSystemLogs('VALIDATING_SIGNATURE_TOKENS...');
    
    // Simulate high-speed validation handshake delay
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
      setSystemLogs('CREDENTIALS_ACCEPTED // CHALLENGE_MFA_DISPATCHED');
    }, 1200);
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otpCode];
    newOtp[index] = value.substring(value.length - 1);
    setOtpCode(newOtp);

    // Auto-focus next input field matching elite fintech behavior
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleMfaVerify = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setSystemLogs('DECRYPTING_SECURE_PAYLOAD...');

    setTimeout(() => {
      setIsProcessing(false);
      setSystemLogs('AUTHORIZATION_GRANTED // ENFORCING_SESSION_CONTEXT');
      
      // Complete authorization sequence passing state properties upwards
      setTimeout(() => {
        onAuthSuccess({ email, role: selectedRole });
      }, 800);
    }, 1500);
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '460px', borderRadius: '12px', padding: '2.5rem 2rem', borderTop: '4px solid var(--accent-gold)' }}>
        
        {/* Core Header Shield Profile */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '50%', border: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '1rem' }}>
            <Lock size={32} color="var(--accent-gold)" />
          </div>
          <h2 className="mono-text" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>PROJECT_1 // GATEWAY</h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Secure Multi-Service Operational Access Node</p>
        </div>

        {step === 1 ? (
          /* CREDENTIALS COLLECTION INTERFACE STEP */
          <form onSubmit={handleCredentialSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Identity Role Strategy Matrix */}
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }} className="mono-text">AUTHORIZATION_SCOPE</label>
              <select 
                value={selectedRole} 
                onChange={(e) => setSelectedRole(e.target.value)}
                style={{ width: '100%', padding: '0.75rem', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontClassName: 'var(--font-sans)', cursor: 'pointer' }}
              >
                {availableRoles.map(role => (
                  <option key={role} value={role}>{role.toUpperCase()}</option>
                ))}
              </select>
            </div>

            {/* Email String Input */}
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }} className="mono-text">SECURE_EMAIL_IDENTIFIER</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="email" 
                  required
                  placeholder="name@domain.internal" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', transition: 'var(--transition-smooth)' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
            </div>

            {/* Password String Input with visibility mask toggle */}
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }} className="mono-text">PASSPHRASE_KEY_SIGNATURE</label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  placeholder="••••••••••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 2.5rem', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Action Trigger Handshake Key */}
            <button 
              type="submit" 
              disabled={isProcessing}
              style={{ width: '100%', padding: '0.85rem', background: 'var(--accent-gold)', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: isProcessing ? 'not-allowed' : 'pointer', transition: 'var(--transition-smooth)', letterSpacing: '0.5px', marginTop: '0.5rem' }}
              onMouseEnter={(e) => { if(!isProcessing) e.target.style.filter = 'brightness(1.1)'; }}
              onMouseLeave={(e) => { if(!isProcessing) e.target.style.filter = 'none'; }}
            >
              {isProcessing ? 'PROCESSING SECURITY CLEARANCE...' : 'AUTHORIZE ACCOUNT'}
            </button>
          </form>
        ) : (
          /* TWO-FACTOR OTP CHALLENGE LAYER INTERFACE STEP */
          <form onSubmit={handleMfaVerify} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                <ShieldCheck size={12} /> SECURE_OTP_CHALLENGE_REQUIRED
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                A 2FA one-time transmission validation signal was pushed to your registered security device layer. Insert the code structure here.
              </p>
            </div>

            {/* Structured 6-Digit Matrix Box Array */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
              {otpCode.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  required
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !otpCode[idx] && idx > 0) {
                      document.getElementById(`otp-${idx - 1}`).focus();
                    }
                  }}
                  style={{ width: '50px', height: '50px', textAlign: 'center', fontSize: '1.25rem', background: 'var(--bg-secondary)', color: 'var(--accent-blue)', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                type="button" 
                onClick={() => setStep(1)}
                style={{ flex: 1, padding: '0.75rem', background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                ABORT
              </button>
              <button 
                type="submit" 
                disabled={isProcessing || otpCode.includes('')}
                style={{ flex: 2, padding: '0.75rem', background: 'var(--accent-blue)', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: (isProcessing || otpCode.includes('')) ? 'not-allowed' : 'pointer', fontSize: '0.85rem', letterSpacing: '0.5px' }}
              >
                {isProcessing ? 'VERIFYING...' : 'CONFIRM TOKEN'}
              </button>
            </div>
          </form>
        )}

        {/* Real-time System Matrix Logs Footprint */}
        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Server size={12} color="var(--text-secondary)" />
          <span className="mono-text" style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '0.5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>
            {systemLogs}
          </span>
        </div>

      </div>
    </div>
  );
}

export default LoginPortal;
