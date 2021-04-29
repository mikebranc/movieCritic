import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import cupImage from '../Images/cup.png';
import WatchlistCell from '../Components/WatchlistCell'



export default function WatchlistCellWrapper(props) {
  const { results } = props;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([])


  useEffect(()=>{
    setLoading(true)
    let movieList=[]
    for(let i=0; i<results.length; i++){
      movieList.push(results[i].id)
    }
    setMovies(movieList)
    setLoading(false)
  }, [setLoading,setMovies,results])

  console.log(movies)
  console.log(typeof movies)
  if(loading){
    return(
      <h1>hold up</h1>
    )
  }

  return (
    <>
    {movies && movies.map((movie)=>(
      <div>
      <WatchlistCell movieId={movie} />
    </div>
    ))
  }
  </>
  );
}
