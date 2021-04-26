// change watchlistcell everywhere on here
import React, { useContext } from 'react';
import { UserContext } from "../UserProvider";
import {auth} from "../firebase/firebase.util";
import MustWatch from '../Components/MustWatch';
import '../Style.css';

export default function Profile() {
  //const [results, setResults] = useState([])
  const user = useContext(UserContext)
  //const {email, username} = user;
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
          <MustWatch />

        </div>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut(); window.location.href = '/signin'}}>Sign out</button>
    </div>

  );
}
