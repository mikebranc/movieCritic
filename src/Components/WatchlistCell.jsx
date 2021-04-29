import React, {useState,useEffect} from 'react'
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
      width: '125px',
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

export default function WatchlistCell(props){
    const{movieId} = props
    const [watched, setWatched] = useState(false);
    const[movie,setMovie] =useState('')
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    console.log(movieId)
    function checkboxChange(e) {
        setWatched(e.target.watched);
        
        //update firebase
      }
      useEffect(()=>{
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=436a07c5838058f745a532d6f8cbc1d6`)
        .then(response => response.json())
        .then((data)=>{
            setMovie(data)
            setLoading(false)
          })
  
        },[setLoading, setMovie,movieId])
    console.log(movie)
    if(!movie){
        return(
            <h1>waiting on list</h1>
        )
    }
    else{
        return(
            <Paper
            spacing={0}
            style={{
              backgroundColor: '#E84A5F',
              
              padding: '5px',
              margin:'30px'
            }}
          >
            <Grid
              container
              direction='row'
              alignItems='center'
              style={{
                padding: '20px',
                fontFamily: 'Pinocchio',
              }}
            >
              <Grid container direction='column' xs>
                <Grid item xs className={classes.resultImageWrapper}>
                <img alt='MovieImage'
                      className={classes.searchResultPic}
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                </Grid>
              </Grid>
    
              <Grid container direction='column' xs>
                <Grid item xs>
                  <div style={{ fontSize: '35px' }}>{movie.title}</div>
                </Grid>
                <Grid item xs>
                  <div style={{ fontSize: '15px' }}>Released: {movie.release_date}</div>
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
        )

    }
    
}