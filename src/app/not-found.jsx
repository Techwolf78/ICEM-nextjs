export default function NotFound() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px',
      background: 'linear-gradient(to bottom right, white, #f9f9f9)',
      margin: 0,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '5rem',
          color: '#1e40af',
          marginBottom: '1rem',
          animation: 'bounce 1s ease-in-out'
        }}>404</h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#374151',
          marginBottom: '1rem'
        }}>Oops! Page not found</p>
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          marginBottom: '2rem'
        }}>The page you're looking for doesn't exist. It might have been moved or deleted.</p>
        <a href="/" style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: '#1e40af',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          transition: 'background 0.3s, transform 0.3s',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>Go Home</a>
        <div style={{
          marginTop: '2rem',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>
          <p>If you believe this is an error, please <a href="/contact" style={{ color: '#4f46e5', textDecoration: 'underline' }}>contact us</a>.</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `
      }} />
    </div>
  );
}