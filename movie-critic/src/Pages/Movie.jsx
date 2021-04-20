import {React, useEffect, useState} from 'react'
import ReviewList from '../Components/ReviewList'
import {Paper, Grid} from '@material-ui/core';
import { firestore } from '../firebase/firebase.util';
import { useLocation} from 'react-router-dom'
import '../Style.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  searchResultPic: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border: '1px solid #2A363B',
    borderRadius: '10px',
  },
  movieImgWrapper:{
    width:'20%',
    float: 'left',
    clear:'left',
    
  },
  headingWrapper:{
    marginTop:'10px',
    marginLeft:'30px',
    marginBottom:'20px',
    display:'flex',
    justifyContent:'space-between'
  },
  descriptionWrapper:{
    width:'78%',
    float:'right',
    clear: 'right',
  },
  ratingText:{
    fontFamily: 'Raleway',
    marginTop:'0px',
    fontWeight:'light'
  },
  titleText:{
    fontFamily: 'Raleway',
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom:'0px',
  }
}))

export default function Movie(){
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const[movie,setMovie] =useState([]);

    const location = useLocation();
    let movieId = new URLSearchParams(location.search).get('id') 


    useEffect(()=>{
       setLoading(true)
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=436a07c5838058f745a532d6f8cbc1d6`)
      .then(response => response.json())
      .then((data)=>{
          setMovie(data)
          setLoading(false)
        })

      },[setLoading, setMovie])

    useEffect(() => {
        setLoading(true);
        (async () => {
          try {
            const postsRef = firestore.collection("reviews");
            const postsDoc = await postsRef.where("movieId", "==", movieId).get();
            const data = postsDoc.docs.map((item) => ({
              id: item.id,
              ...item.data(),
            }));
            setReviews(data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        })();

      }, [setLoading, setReviews]);

      if (loading || (reviews.length === 0 && reviews)) {
        return <CircularProgress />;

      }
    return(
        <>
        <div style={{width:'100%'}}>
          <Paper spacing={0} style={{backgroundColor: '#FECEAB', marginLeft: '50px',marginRight: '50px', marginTop: '100px',padding: '20px', minHeight:'80vh'}}>
            <div className={classes.headingWrapper}>
            <div className={classes.movieImgWrapper}>
              <img className={classes.searchResultPic}src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            </div>
            <div className={classes.descriptionWrapper}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h1 className={classes.titleText}>{movie.title}</h1>
                </Grid>
                <Grid item xs={6}>
                  <h2 className={classes.ratingText}>Average Rating: {movie.vote_average}</h2>
                </Grid>
                <Grid item xs={6}>
                  <h2 className={classes.ratingText}>Rating by Friends: 8.7</h2>
                </Grid>
                
              </Grid>
            </div>
          </div>
            <div>
              <h1>Reviews</h1>
              <ReviewList reviews={reviews}/>
            </div>
              
          </Paper>
        </div>

        </>
    )

}