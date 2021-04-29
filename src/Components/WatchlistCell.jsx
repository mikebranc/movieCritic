import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import cupImage from '../Images/cup.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  resultImageWrapper: {
    width: '175px',
    height: '175px',
    display: 'block',
  },
  searchResultPic: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    border: '1px solid #2A363B',
    borderRadius: '10px',
  },
  cupImage: {
    height: '80px',
    padding: '0px',
  },
  checkbox: {
    width: '24px',
    height: '24px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
  },
}));

export default function WatchlistCell(props) {
  const { results } = props;
  const classes = useStyles();
  const [watched, setWatched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([])

  function checkboxChange(e) {
    setWatched(e.target.watched);
    //update firebase
  }

  //console.log(results)


  useEffect(()=>{
    async function getMovies(){
      setLoading(true)
      let movieList = []
      try{
        results.map((result)=>
        fetch(`https://api.themoviedb.org/3/movie/${result.id}?api_key=436a07c5838058f745a532d6f8cbc1d6`)
        .then(response => response.json())
        .then((data)=>{
          console.log("data:" , data)
     
          movieList.push(data)
          setMovies(movieList)
          console.log("movies:" , movies)
        })
      )
      setLoading(false)
      }
      catch(error){
        setLoading(false)
      }
   
    }
    getMovies()
  }, [setMovies, setLoading, results, movies])
  //console.log(movies)

  if(loading){
    return(
      <h1>Waiting on your results my good sir</h1>
    )
  }

  return (
    <>
    {movies && movies.map((movie)=>{

  
      (
      <div>
      <Paper
        spacing={0}
        style={{
          backgroundColor: '#E84A5F',
          height: '130px',
          padding: '5px',
        }}
      >
        <Grid
          container
          direction='row'
          style={{
            padding: '20px',
            fontFamily: 'Pinocchio',
          }}
        >
          <Grid container direction='column' xs>
            <Grid item xs>
              Image goes here
            </Grid>
          </Grid>

          <Grid container direction='column' xs>
            <Grid item xs>
              <div style={{ fontSize: '35px' }}>Title</div>
            </Grid>
            <Grid item xs>
              <div style={{ fontSize: '15px' }}>Release: Date</div>
            </Grid>
          </Grid>

          <Grid container direction='row' xs>
            <Grid container direction='column' xs>
              <Grid item xs>
                <div style={{ fontSize: '20px' }}>User Score:</div>
              </Grid>
              <Grid item xs>
                <div style={{ fontSize: '40px' }}>95%</div>
              </Grid>
            </Grid>

            <Grid container direction='column' xs>
              <Grid item xs>
                <div>
                  <img
                    className={classes.cupImage}
                    src={cupImage}
                    alt='cupImage'
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='column' xs>
            <Grid item xs>
              <div style={{ fontSize: '25px' }}>Watched?</div>
            </Grid>
            <Grid item xs>
              <Checkbox
                watched={watched}
                onChange={checkboxChange}
                color='primary'
                style={{
                  transform: 'scale(1.5)',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    )})}
  </>
  );
}
