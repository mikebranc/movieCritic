import React, {useState, useEffect} from 'react'
import MustWatch from '../Components/MustWatch'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import popcorn from '../Images/popcorn.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },

    rowLayout: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    paper: {
      padding: theme.spacing(2),
    },
    title: {
      backgroundColor: '#FAF0F0',
      textAlign: 'center',
      fontSize: '20px',
      fontFamily: 'Raleway',
      fontWeight: 'bold',
      padding: '10px',
      borderRadius: '10px 10px 0 0',
    },
    block: {
      width: '90%',
      margin: '10px 15px 0px 15px',
      backgroundColor: '#2A363B',
      textAlign: 'left',
      fontFamily: 'Raleway',
      padding: '10px',
      borderRadius: '30px',
    },
    popcornImg: {
      //This popcorn image should be changed to the movie cover image
      width: '75px',
      height: '100px',
      padding: '5px',
    },
    blockText: {
      color: '#FAF0F0',
      fontWeight: 'bold',
      margin: '10px 0px 0px 10px',
    },
    seeMore: {
      backgroundColor: '#FAF0F0',
      borderRadius: '15px',
      width: '50%',
      padding: '3px',
      marginTop: '10px',
      fontWeight: '900',
      fontFamily: 'Raleway',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#E5DADA',
      },
    },
  }));

export default function MustWatchDetail(props){
    const{movieId}=props
    const classes = useStyles();
    const [movie, setMovie] = useState('')
    const[loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=436a07c5838058f745a532d6f8cbc1d6`)
        .then(response => response.json())
        .then((data)=>{
            setMovie(data)
            setLoading(false)
          })

        },[setLoading, setMovie,movieId])

    return(
        <>

          <Grid style={{ flexGrow: '0.8' }} item xs>
            <img className={classes.popcornImg} src={popcorn} alt='popcorn' />
          </Grid>

          <Grid className={classes.blockText}>
            <Grid item xs>
              <div style={{ marginBottom: '5px' }}>The Popcorn Movie</div>
            </Grid>
            <Grid item xs>
              <div style={{ fontSize: '15px' }}>Average Rating: 2</div>
            </Grid>
            <Grid item xs>
              <div style={{ fontSize: '15px' }}>Average Friend Rating: 9</div>
            </Grid>
            <Grid item xs>
              <button className={classes.seeMore}>See More</button>
            </Grid>
        </Grid>
        </>

    )
}