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
        const postRef = await firestore.collection("users").doc(user.uid).collection("movies")
        const postDoc = await postRef.get()
        console.log(user.uid)
        console.log("postRef")
        console.log(postRef)
        console.log("postDoc")
        console.log(postDoc)
        const data = postDoc.docs.map((item)=>({
          id: item.id,
          ...item.data()
        }));
        console.log(data)
        setMovies(data);
        setLoading(false);
      }
      catch(error){
        console.log(error)
        console.log(user)
        setLoading(false);
      }
    })();

  }, [setLoading, user,setMovies]);
  console.log(movies)

  // function getMovie(info){

  // }
if(loading){
  return(
    <div>
    <h1>loading</h1>
    </div>
  )
}

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
