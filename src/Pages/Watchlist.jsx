import React, {useContext} from 'react';
import WatchlistCell from '../Components/WatchlistCell';
import {UserContext} from '../UserProvider'
import '../Style.css';

export default function Watchlist() {
  //const [results, setResults] = useState([])
  const user = useContext(UserContext)
  console.log(user)
  return (
    <div>
      <div
        style={{
          height: '100vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: '#2A363B',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            top: '100px',
            padding: '0 20px 0 20px',
          }}
        >
          <WatchlistCell />
        </div>
      </div>
    </div>
  );
}
