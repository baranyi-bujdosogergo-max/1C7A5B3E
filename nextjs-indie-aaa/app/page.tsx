'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/comparison');
  };

  const handleLearnMoreClick = () => {
    router.push('/about');
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      padding: '3rem 1.5rem',
      textAlign: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%'
      }}>
        {/* Fő cím konténer */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'rgba(30, 41, 59, 0.6)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2'
          }}>
            🎮 Videójátékok ár-érték aránya
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: '#c7d2fe',
            fontWeight: '600',
            marginBottom: '0'
          }}>
            Indie vs. AAA – Kinek éri meg jobban?
          </h2>
        </div>

        {/* Tartalom szekciók */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Első bekezdés */}
          <div style={{
            padding: '2rem',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1rem',
            border: '1px solid rgba(99, 102, 241, 0.1)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s ease'
          }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#e2e8f0',
              margin: '0',
              textAlign: 'left'
            }}>
              A videojátékok világa hatalmas és folyamatosan változik. Nap mint nap új címek jelennek meg, 
              az apró, független fejlesztők kreatív ötleteitől egészen a több millió dolláros költségvetésű 
              AAA produkciókig. De vajon tényleg mindig a drágább játék a jobb választás?
            </p>
          </div>

          {/* Második bekezdés */}
          <div style={{
            padding: '2rem',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1rem',
            border: '1px solid rgba(99, 102, 241, 0.1)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s ease'
          }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#e2e8f0',
              margin: '0',
              textAlign: 'left'
            }}>
              Az indie fejlesztések gyakran egyedi ötletekkel, különleges hangulattal és személyesebb 
              megközelítéssel nyerik el a játékosok szívét, míg a nagy stúdiók monumentális látványvilággal 
              és technikai tökéletességgel hódítanak. A különbség nemcsak az árban, hanem a játékélményben, 
              a tartalomban és a játékosok elvárásaiban is megmutatkozik.
            </p>
          </div>

          {/* Harmadik bekezdés */}
          <div style={{
            padding: '2rem',
            background: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1rem',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            backdropFilter: 'blur(8px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Díszítő elem */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '2px',
              background: 'linear-gradient(90deg, #6366f1, #a855f7)'
            }}></div>
            
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#e2e8f0',
              margin: '0',
              textAlign: 'left'
            }}>
              Ebben az összehasonlításban a két világ találkozik – a kreativitás és a látvány, 
              a kis csapatok lelkesedése és a nagy stúdiók profizmusa. 
              A kérdés már csak az:{' '}
              <span style={{
                color: '#818cf8',
                fontWeight: '600',
                background: 'rgba(99, 102, 241, 0.1)',
                padding: '0.2rem 0.5rem',
                borderRadius: '0.375rem'
              }}>
                melyik ad többet a játékosnak a pénzéért?
              </span>
            </p>
          </div>
        </div>

        

        {/* Statisztikák */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: '1rem',
          border: '1px solid rgba(99, 102, 241, 0.1)'
        }}>
          {[
            { number: '10+', label: 'Elemzett játék' },
            { number: '2M+', label: 'Játékidő órák' },
            { number: '9+', label: 'Platform' },
            { number: '2024', label: 'Friss adatok' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: '800',
                color: '#818cf8',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}