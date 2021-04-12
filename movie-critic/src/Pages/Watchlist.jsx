import React from 'react';
import WatchlistCell from '../Components/WatchlistCell';
import '../Style.css';

export default function Watchlist() {
  //const [results, setResults] = useState([])

  return (
    <div>
      <div
        style={{
          height: '100vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: '#2A363B',
        }}
      >
        <div style={{ marginTop: '100px' }}>
          <WatchlistCell />
        </div>
      </div>
    </div>
  );
}
