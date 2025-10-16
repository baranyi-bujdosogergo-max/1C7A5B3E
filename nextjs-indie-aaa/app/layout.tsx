import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ 
        margin: 0, 
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <header style={{ 
          padding: "1rem 0",
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(99, 102, 241, 0.3)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}>
          <nav style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <Link 
              href="/" 
              style={{ 
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.2)'
              }}
            >
              🏠 Főoldal
            </Link>
            <Link 
              href="/aaaVsIndie" 
              style={{ 
                color: '#c7d2fe',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              ⚔️ AAA vs Indie
            </Link>
            <Link 
              href="/platformonkent" 
              style={{ 
                color: '#c7d2fe',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              🎮 Platformonként
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ 
          flex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3rem 1rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ 
          padding: "2.5rem 0",
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(99, 102, 241, 0.3)',
          marginTop: 'auto'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center'
          }}>
            {/* Fő szöveg */}
            <div style={{
              fontSize: '1rem',
              color: '#e2e8f0',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              © {new Date().getFullYear()} Játék Ár-Érték Összehasonlító
            </div>
            
            {/* Alcím */}
            <div style={{
              fontSize: '0.875rem',
              color: '#94a3b8',
              marginBottom: '1.5rem'
            }}>
              Fedezd fel a videojátékok világát - Indie vs AAA
            </div>
            
            {/* További linkek */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              fontSize: '0.8rem',
              flexWrap: 'wrap'
            }}>
              <Link href="/privacy" style={{ 
                color: '#94a3b8', 
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                background: 'rgba(30, 41, 59, 0.4)'
              }}>
                Adatvédelem
              </Link>
              <Link href="/terms" style={{ 
                color: '#94a3b8', 
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                background: 'rgba(30, 41, 59, 0.4)'
              }}>
                Felhasználási feltételek
              </Link>
              <Link href="/contact" style={{ 
                color: '#94a3b8', 
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                background: 'rgba(30, 41, 59, 0.4)'
              }}>
                Kapcsolat
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}