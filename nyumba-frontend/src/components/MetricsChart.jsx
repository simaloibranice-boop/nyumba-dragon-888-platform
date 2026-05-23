import React, { useState } from 'react';
import { Activity, TrendingUp, BarChart3, Clock } from 'lucide-react';

function MetricsChart() {
  const [activeMetric, setActiveMetric] = useState('throughput');

  // Multi-stream mock tracking datasets mapped locally
  const datasets = {
    throughput: {
      title: 'SYSTEM_TRANSACTION_THROUGHPUT',
      unit: 'tx/sec',
      average: '1,424',
      points: [420, 680, 510, 890, 1100, 920, 1424],
      labels: ['00:10', '00:15', '00:20', '00:25', '00:30', '00:35', '00:40']
    },
    latency: {
      title: 'NETWORK_PROPAGATION_LATENCY',
      unit: 'ms',
      average: '34.2',
      points: [24, 45, 89, 31, 52, 28, 34],
      labels: ['00:10', '00:15', '00:20', '00:25', '00:30', '00:35', '00:40']
    }
  };

  const currentData = datasets[activeMetric];
  
  // Calculate SVG line path string layout coordinate parameters smoothly
  const svgWidth = 600;
  const svgHeight = 160;
  const maxVal = Math.max(...currentData.points) * 1.2;
  
  const svgPoints = currentData.points.map((val, idx) => {
    const x = (idx / (currentData.points.length - 1)) * svgWidth;
    const y = svgHeight - (val / maxVal) * svgHeight;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div style={{ background: '#111622', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Chart Control Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '0.5rem', borderRadius: '4px', display: 'flex' }}>
            <Activity size={16} color="#00e5ff" />
          </div>
          <div>
            <h4 className="mono-text" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f1f5f9' }}>{currentData.title}</h4>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Real-time telemetry distribution matrix logs</p>
          </div>
        </div>

        {/* Dynamic Metric Toggles */}
        <div style={{ display: 'flex', gap: '0.5rem', background: '#05070a', padding: '0.25rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <button 
            onClick={() => setActiveMetric('throughput')}
            style={{
              background: activeMetric === 'throughput' ? '#111622' : 'transparent',
              color: activeMetric === 'throughput' ? '#00e5ff' : '#94a3b8',
              border: activeMetric === 'throughput' ? '1px solid rgba(255,255,255,0.08)' : 'none',
              padding: '0.35rem 0.75rem', borderRadius: '3px', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer'
            }}
          >
            THROUGHPUT
          </button>
          <button 
            onClick={() => setActiveMetric('latency')}
            style={{
              background: activeMetric === 'latency' ? '#111622' : 'transparent',
              color: activeMetric === 'latency' ? '#00e5ff' : '#94a3b8',
              border: activeMetric === 'latency' ? '1px solid rgba(255,255,255,0.08)' : 'none',
              padding: '0.35rem 0.75rem', borderRadius: '3px', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer'
            }}
          >
            LATENCY
          </button>
        </div>
      </div>

      {/* Numerical Insights Block */}
      <div style={{ display: 'flex', gap: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }} className="mono-text">STREAM_MEAN_VALUE</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f1f5f9' }} className="mono-text">
            {currentData.average} <span style={{ fontSize: '0.8rem', color: '#00e5ff', fontWeight: 500 }}>{currentData.unit}</span>
          </span>
        </div>
        <div>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }} className="mono-text">NODE_STATUS_FLAG</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981' }} className="mono-text">NOMINAL</span>
        </div>
      </div>

      {/* Reactive Vector Drawing Plane */}
      <div style={{ position: 'relative', width: '100%', marginTop: '0.5rem' }}>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          
          {/* Horizontal Indicator Gridlines */}
          <line x1="0" y1={svgHeight * 0.25} x2={svgWidth} y2={svgHeight * 0.25} stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />
          <line x1="0" y1={svgHeight * 0.5} x2={svgWidth} y2={svgHeight * 0.5} stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />
          <line x1="0" y1={svgHeight * 0.75} x2={svgWidth} y2={svgHeight * 0.75} stroke="rgba(255,255,255,0.03)" strokeDasharray="3,3" />
          
          {/* Main Continuous Vector Spline */}
          <polyline
            fill="none"
            stroke="#00e5ff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={svgPoints}
            style={{ transition: 'all 0.3s ease' }}
          />

          {/* Interactive Plot Nodes */}
          {currentData.points.map((val, idx) => {
            const x = (idx / (currentData.points.length - 1)) * svgWidth;
            const y = svgHeight - (val / maxVal) * svgHeight;
            return (
              <g key={idx} className="chart-node" style={{ cursor: 'pointer' }}>
                <circle cx={x} cy={y} r="4" fill="#0a0d14" stroke="#00e5ff" strokeWidth="2" />
                <circle cx={x} cy={y} r="8" fill="#00e5ff" opacity="0" style={{ transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.target.style.opacity = '0.15'} onMouseLeave={(e) => e.target.style.opacity = '0'} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* X-Axis Timeline Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.25rem', marginTop: '-0.5rem' }}>
        {currentData.labels.map((label, idx) => (
          <span key={idx} className="mono-text" style={{ fontSize: '0.65rem', color: '#708099', fontWeight: 600 }}>
            {label}
          </span>
        ))}
      </div>

    </div>
  );
}

export default MetricsChart;
