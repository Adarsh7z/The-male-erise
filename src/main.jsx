import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Male Order Erise Application Error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'var(--font-primary), sans-serif', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
          <img src="/logo-circle-1x.png" alt="Male Order Erise logo" style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'contain', marginBottom: '16px', boxShadow: '0 4px 16px rgba(255,255,255,0.1)' }} />
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Male Order Erise</h2>
          <p style={{ color: '#a1a1aa', fontSize: '14px', maxWidth: '400px', marginBottom: '20px' }}>Loading experience... Please refresh if the page does not reload automatically.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 24px', background: 'linear-gradient(180deg, #27272a 0%, #09090b 100%)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.5)' }}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
