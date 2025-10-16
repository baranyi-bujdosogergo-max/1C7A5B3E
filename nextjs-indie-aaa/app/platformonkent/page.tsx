// components/PlatformPriceComparison.tsx
import React from 'react';

interface PlatformPrice {
  platform: string;
  price: number;
  discount?: number;
}

interface Game {
  id: number;
  name: string;
  type: 'indie' | 'aaa';
  platforms: PlatformPrice[];
  releaseDate: string;
}

const PlatformPriceComparison: React.FC = () => {
  const games: Game[] = [
    {
      id: 1,
      name: 'Hollow Knight',
      type: 'indie',
      releaseDate: '2017-02-24',
      platforms: [
        { platform: 'Steam', price: 15, discount: 50 },
        { platform: 'Nintendo Switch', price: 15 },
        { platform: 'PlayStation 4', price: 15 },
        { platform: 'Xbox One', price: 15 },
        { platform: 'GOG', price: 15, discount: 60 }
      ]
    },
    {
      id: 2,
      name: 'Stardew Valley',
      type: 'indie',
      releaseDate: '2016-02-26',
      platforms: [
        { platform: 'Steam', price: 14, discount: 30 },
        { platform: 'Nintendo Switch', price: 15 },
        { platform: 'PlayStation 4', price: 15 },
        { platform: 'Xbox One', price: 15 },
        { platform: 'Mobile', price: 8 }
      ]
    },
    {
      id: 3,
      name: 'Celeste',
      type: 'indie',
      releaseDate: '2018-01-25',
      platforms: [
        { platform: 'Steam', price: 20, discount: 25 },
        { platform: 'Nintendo Switch', price: 20 },
        { platform: 'PlayStation 4', price: 20 },
        { platform: 'Xbox One', price: 20 },
        { platform: 'Epic Games', price: 20, discount: 75 }
      ]
    },
    {
      id: 4,
      name: 'Cyberpunk 2077',
      type: 'aaa',
      releaseDate: '2020-12-10',
      platforms: [
        { platform: 'Steam', price: 60, discount: 50 },
        { platform: 'GOG', price: 60, discount: 55 },
        { platform: 'PlayStation 5', price: 70 },
        { platform: 'Xbox Series X', price: 70 },
        { platform: 'Epic Games', price: 60, discount: 40 }
      ]
    },
    {
      id: 5,
      name: 'Elden Ring',
      type: 'aaa',
      releaseDate: '2022-02-25',
      platforms: [
        { platform: 'Steam', price: 60 },
        { platform: 'PlayStation 5', price: 70 },
        { platform: 'Xbox Series X', price: 70 },
        { platform: 'PlayStation 4', price: 60 },
        { platform: 'Xbox One', price: 60 }
      ]
    },
    {
      id: 6,
      name: 'Assassin\'s Creed Valhalla',
      type: 'aaa',
      releaseDate: '2020-11-10',
      platforms: [
        { platform: 'Steam', price: 60, discount: 75 },
        { platform: 'Ubisoft Store', price: 60, discount: 80 },
        { platform: 'PlayStation 5', price: 70 },
        { platform: 'Xbox Series X', price: 70 },
        { platform: 'Epic Games', price: 60, discount: 70 }
      ]
    }
  ];

  const allPlatforms = Array.from(
    new Set(games.flatMap(game => game.platforms.map(p => p.platform)))
  ).sort();

  const getLowestPrice = (platforms: PlatformPrice[]) => {
    return Math.min(...platforms.map(p => p.discount ? p.price * (1 - p.discount / 100) : p.price));
  };

  const getHighestPrice = (platforms: PlatformPrice[]) => {
    return Math.max(...platforms.map(p => p.price));
  };

  // Stílusok
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      textAlign: 'center' as const
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    },
    statCard: {
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid'
    },
    indieStat: {
      backgroundColor: '#dbeafe',
      borderColor: '#93c5fd'
    },
    aaaStat: {
      backgroundColor: '#fee2e2',
      borderColor: '#fca5a5'
    },
    platformStat: {
      backgroundColor: '#dcfce7',
      borderColor: '#86efac'
    },
    statTitle: {
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    tableContainer: {
      overflowX: 'auto' as const,
      marginBottom: '2rem'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
      border: '1px solid #d1d5db'
    },
    tableHeader: {
      backgroundColor: '#f3f4f6',
      border: '1px solid #d1d5db',
      padding: '0.75rem 1rem',
      textAlign: 'left' as const
    },
    tableHeaderCenter: {
      backgroundColor: '#f3f4f6',
      border: '1px solid #d1d5db',
      padding: '0.75rem 1rem',
      textAlign: 'center' as const
    },
    tableCell: {
      border: '1px solid #d1d5db',
      padding: '0.75rem 1rem'
    },
    tableCellCenter: {
      border: '1px solid #d1d5db',
      padding: '0.75rem 1rem',
      textAlign: 'center' as const
    },
    indieBadge: {
      backgroundColor: '#dcfce7',
      color: '#166534',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      display: 'inline-block'
    },
    aaaBadge: {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      display: 'inline-block'
    },
    discountContainer: {
      lineHeight: '1.4'
    },
    originalPrice: {
      textDecoration: 'line-through',
      color: '#9ca3af',
      fontSize: '0.875rem'
    },
    discountPrice: {
      color: '#059669',
      fontWeight: 'bold'
    },
    discountBadge: {
      backgroundColor: '#fef2f2',
      color: '#dc2626',
      padding: '0.125rem 0.25rem',
      borderRadius: '0.125rem',
      fontSize: '0.75rem'
    },
    lowPrice: {
      color: '#059669',
      fontWeight: 'bold'
    },
    highPrice: {
      color: '#dc2626',
      fontWeight: 'bold'
    },
    platformSection: {
      backgroundColor: '#f9fafb',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      marginTop: '2rem'
    },
    platformGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginTop: '1rem'
    },
    platformCard: {
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    },
    notesBox: {
      backgroundColor: '#fef3c7',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #f59e0b',
      marginTop: '1.5rem'
    },
    notesTitle: {
      fontWeight: '600',
      color: '#92400e',
      marginBottom: '0.5rem'
    },
    notesList: {
      color: '#92400e',
      fontSize: '0.875rem',
      listStyle: 'disc',
      paddingLeft: '1.5rem',
      margin: 0
    }
  };

  // Átlagárak számítása
  const indieAverage = (
    games
      .filter(game => game.type === 'indie')
      .flatMap(game => game.platforms)
      .reduce((sum, platform) => sum + (platform.discount ? platform.price * (1 - platform.discount / 100) : platform.price), 0) /
    games.filter(game => game.type === 'indie').flatMap(game => game.platforms).length
  ).toFixed(2);

  const aaaAverage = (
    games
      .filter(game => game.type === 'aaa')
      .flatMap(game => game.platforms)
      .reduce((sum, platform) => sum + (platform.discount ? platform.price * (1 - platform.discount / 100) : platform.price), 0) /
    games.filter(game => game.type === 'aaa').flatMap(game => game.platforms).length
  ).toFixed(2);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Platformonkénti Ár Összehasonlítás</h1>
      
      {/* Összegző statisztikák */}
      <div style={styles.statsGrid}>
        <div style={{...styles.statCard, ...styles.indieStat}}>
          <h3 style={{...styles.statTitle, color: '#1e40af'}}>Indie Játékok Átlagára</h3>
          <p style={{...styles.statValue, color: '#1d4ed8'}}>${indieAverage}</p>
        </div>
        
        <div style={{...styles.statCard, ...styles.aaaStat}}>
          <h3 style={{...styles.statTitle, color: '#991b1b'}}>AAA Játékok Átlagára</h3>
          <p style={{...styles.statValue, color: '#dc2626'}}>${aaaAverage}</p>
        </div>
        
        <div style={{...styles.statCard, ...styles.platformStat}}>
          <h3 style={{...styles.statTitle, color: '#166534'}}>Platformok Száma</h3>
          <p style={{...styles.statValue, color: '#16a34a'}}>{allPlatforms.length}</p>
        </div>
      </div>

      {/* Fő táblázat */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Játék</th>
              <th style={styles.tableHeader}>Típus</th>
              <th style={styles.tableHeader}>Megjelenés</th>
              {allPlatforms.map(platform => (
                <th key={platform} style={styles.tableHeaderCenter}>
                  {platform}
                </th>
              ))}
              <th style={styles.tableHeaderCenter}>Legalacsonyabb Ár</th>
              <th style={styles.tableHeaderCenter}>Legmagasabb Ár</th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <tr key={game.id} style={{backgroundColor: 'white'}}>
                <td style={{...styles.tableCell, fontWeight: '600'}}>
                  {game.name}
                </td>
                <td style={styles.tableCell}>
                  <span style={game.type === 'indie' ? styles.indieBadge : styles.aaaBadge}>
                    {game.type.toUpperCase()}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  {game.releaseDate}
                </td>
                
                {allPlatforms.map(platform => {
                  const platformPrice = game.platforms.find(p => p.platform === platform);
                  return (
                    <td key={platform} style={styles.tableCellCenter}>
                      {platformPrice ? (
                        <div style={styles.discountContainer}>
                          {platformPrice.discount ? (
                            <>
                              <span style={styles.originalPrice}>
                                ${platformPrice.price}
                              </span>
                              <br />
                              <span style={styles.discountPrice}>
                                ${(platformPrice.price * (1 - platformPrice.discount / 100)).toFixed(2)}
                              </span>
                              <div style={styles.discountBadge}>
                                -{platformPrice.discount}%
                              </div>
                            </>
                          ) : (
                            <span style={{fontWeight: '600'}}>${platformPrice.price}</span>
                          )}
                        </div>
                      ) : (
                        <span style={{color: '#9ca3af'}}>-</span>
                      )}
                    </td>
                  );
                })}
                
                <td style={styles.tableCellCenter}>
                  <span style={styles.lowPrice}>
                    ${getLowestPrice(game.platforms).toFixed(2)}
                  </span>
                </td>
                <td style={styles.tableCellCenter}>
                  <span style={styles.highPrice}>
                    ${getHighestPrice(game.platforms).toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Platform összehasonlító szekció */}
      <div style={styles.platformSection}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          Platform Ár Összehasonlítás
        </h2>
        <div style={styles.platformGrid}>
          {allPlatforms.map(platform => {
            const platformGames = games.flatMap(game => 
              game.platforms.filter(p => p.platform === platform)
            );
            const averagePrice = platformGames.length > 0 
              ? platformGames.reduce((sum, p) => sum + (p.discount ? p.price * (1 - p.discount / 100) : p.price), 0) / platformGames.length
              : 0;
            
            return (
              <div key={platform} style={styles.platformCard}>
                <h3 style={{fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem'}}>
                  {platform}
                </h3>
                <p style={{color: '#6b7280', marginBottom: '0.25rem'}}>
                  Elérhető játékok: {platformGames.length}
                </p>
                <p style={{color: '#6b7280', marginBottom: '0.25rem'}}>
                  Átlagár: <span style={{fontWeight: '600'}}>${averagePrice.toFixed(2)}</span>
                </p>
                <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '0.5rem'}}>
                  Akciós játékok: {platformGames.filter(p => p.discount).length}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Megjegyzések */}
      <div style={styles.notesBox}>
        <h3 style={styles.notesTitle}>Megjegyzések</h3>
        <ul style={styles.notesList}>
          <li>Az árak USD-ben vannak megadva</li>
          <li>Az akciók időszakosak és változhatnak</li>
          <li>A konszol verziók általában drágábbak</li>
          <li>A digitális platformokon gyakoriak az akciók</li>
        </ul>
      </div>
    </div>
  );
};

export default PlatformPriceComparison;