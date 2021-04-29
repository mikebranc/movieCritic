import React, {useContext, useState, useEffect} from 'react';
import WatchlistCell from '../Components/WatchlistCell';
import {UserContext} from '../UserProvider'
import '../Style.css';
import { firestore } from '../firebase/firebase.util';

export default function Watchlist() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({})
  const user = useContext(UserContext)

  useEffect(()=>{
    setLoading(true);
    (async () => {
      try{
        const postRef = firestore.collection("users").doc(user.uid).collection("movies")
        const postDoc = await postRef.get()
        const data = postDoc.docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }
        ))
        console.log(data)
        setMovies(data);
        setLoading(false);
      }
      catch(error){
        console.log("errr")
        setLoading(false);
      }
    })();

  }, [setLoading, setMovies]);
  console.log(movies)

  // function getMovie(info){

  // }


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
          {movies?<WatchlistCell results={movies} />: <p>No movies in your list</p>}
        </div>
      </div>
    </div>
  );
}
