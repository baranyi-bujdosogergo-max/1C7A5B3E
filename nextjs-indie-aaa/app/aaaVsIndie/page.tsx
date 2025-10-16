import React from 'react';

interface Game {
  name: string;
  price: string;
  releaseDate: string;
  playtime: string;
}

const GameComparison: React.FC = () => {
  const indieGames: Game[] = [
    {
      name: 'Hollow Knight',
      price: '$15',
      releaseDate: '2017-02-24',
      playtime: '25 óra'
    },
    {
      name: 'Stardew Valley',
      price: '$14',
      releaseDate: '2016-02-26',
      playtime: '80 óra'
    },
    {
      name: 'Celeste',
      price: '$20',
      releaseDate: '2018-01-25',
      playtime: '10 óra'
    }
  ];

  const aaaGames: Game[] = [
    {
      name: 'Cyberpunk 2077',
      price: '$60',
      releaseDate: '2020-12-10',
      playtime: '30 óra'
    },
    {
      name: 'Elden Ring',
      price: '$70',
      releaseDate: '2022-02-25',
      playtime: '50 óra'
    },
    {
      name: 'Assassin\'s Creed Valhalla',
      price: '$60',
      releaseDate: '2020-11-10',
      playtime: '60 óra'
    }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      color: '#e2e8f0'
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: 'bold',
      marginBottom: '3rem',
      textAlign: 'center' as const,
      background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      padding: '1rem 1.5rem',
      borderRadius: '0.75rem',
      border: '1px solid'
    },
    indieTitle: {
      background: 'rgba(34, 197, 94, 0.1)',
      borderColor: 'rgba(34, 197, 94, 0.3)',
      color: '#4ade80'
    },
    aaaTitle: {
      background: 'rgba(239, 68, 68, 0.1)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
      color: '#f87171'
    },
    tableContainer: {
      overflowX: 'auto' as const,
      marginBottom: '3rem',
      borderRadius: '1rem',
      background: 'rgba(30, 41, 59, 0.6)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
    },
    tableHeader: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      padding: '1rem 1.5rem',
      textAlign: 'left' as const,
      fontWeight: '600',
      color: '#c7d2fe',
      borderBottom: '2px solid rgba(99, 102, 241, 0.3)',
      fontSize: '0.95rem'
    },
    tableCell: {
      padding: '1rem 1.5rem',
      borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
      color: '#e2e8f0',
      transition: 'all 0.2s ease'
    },
    tableRow: {
      transition: 'all 0.2s ease'
    },
    priceCell: {
      fontWeight: '600',
      color: '#fbbf24'
    },
    playtimeCell: {
      color: '#60a5fa',
      fontWeight: '500'
    },
    infoBox: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      marginTop: '2rem',
      backdropFilter: 'blur(10px)'
    },
    infoText: {
      fontSize: '1.125rem',
      lineHeight: '1.7',
      color: '#e2e8f0',
      textAlign: 'center' as const,
      margin: 0
    },
    highlight: {
      color: '#818cf8',
      fontWeight: '600'
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '3rem'
    },
    statCard: {
      background: 'rgba(30, 41, 59, 0.6)',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      textAlign: 'center' as const,
      backdropFilter: 'blur(8px)'
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    indieStat: {
      color: '#4ade80'
    },
    aaaStat: {
      color: '#f87171'
    },
    statLabel: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      fontWeight: '500'
    }
  };

  const calculateAveragePrice = (games: Game[]): string => {
    const total = games.reduce((sum, game) => {
      const price = parseInt(game.price.replace('$', ''));
      return sum + price;
    }, 0);
    return `$${(total / games.length).toFixed(0)}`;
  };

  const calculateAveragePlaytime = (games: Game[]): string => {
    const total = games.reduce((sum, game) => {
      const playtime = parseInt(game.playtime.replace(' óra', ''));
      return sum + playtime;
    }, 0);
    return `${(total / games.length).toFixed(0)} óra`;
  };

  const renderGameTable = (games: Game[], title: string, isIndie: boolean) => (
    <div style={{ marginBottom: '4rem' }}>
      <h2 style={{...styles.sectionTitle, ...(isIndie ? styles.indieTitle : styles.aaaTitle)}}>
        {isIndie ? '🎨 ' : '💎 '}{title}
      </h2>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Játék</th>
              <th style={styles.tableHeader}>Ár (USD)</th>
              <th style={styles.tableHeader}>Megjelenés</th>
              <th style={styles.tableHeader}>Játékidő</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <div style={{fontWeight: '600'}}>{game.name}</div>
                </td>
                <td style={{...styles.tableCell, ...styles.priceCell}}>
                  {game.price}
                </td>
                <td style={styles.tableCell}>
                  {game.releaseDate}
                </td>
                <td style={{...styles.tableCell, ...styles.playtimeCell}}>
                  {game.playtime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Indie vs AAA Játékok Összehasonlítása</h1>

      {/* Statisztikák */}
      <div style={styles.statsContainer}>
        
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#60a5fa'}}>
            {calculateAveragePlaytime(indieGames)}
          </div>
          <div style={styles.statLabel}>Indie átlagos játékidő</div>
        </div>
        <div style={styles.statCard}>
          <div style={{...styles.statValue, color: '#60a5fa'}}>
            {calculateAveragePlaytime(aaaGames)}
          </div>
          <div style={styles.statLabel}>AAA átlagos játékidő</div>
        </div>
      </div>

      {renderGameTable(indieGames, 'Indie Játékok', true)}
      {renderGameTable(aaaGames, 'AAA Játékok', false)}

      <div style={styles.infoBox}>
        <p style={styles.infoText}>
          Az <span style={styles.highlight}>indie játékok</span> és{' '}
          <span style={styles.highlight}>AAA címek</span> egymás mellett jól mutatják, 
          mennyire eltérő stratégiát követnek az ár és játékélmény terén.{' '}
          <span style={styles.highlight}>Az egyik a kreativitásra és egyediségre, 
          a másik a technológiai tökéletességre és monumentális élményre épít.</span>
        </p>
      </div>
    </div>
  );
};

export default GameComparison;