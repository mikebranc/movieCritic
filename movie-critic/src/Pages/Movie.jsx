import {React, useEffect, useState} from 'react'
import ReviewList from '../Components/ReviewList'
import Paper from '@material-ui/core/Paper';
import { firestore } from '../firebase/firebase.util';
import { useLocation} from 'react-router-dom'
import '../Style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchResultPic: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    border: '1px solid #2A363B',
    borderRadius: '10px',
  },
  movieImgWrapper:{
    height: '400px',
    width:'250px'
  },
  headingWrapper:{
    marginTop:'100px',
    marginLeft:'50px'
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
      console.log(movie)
  
    return(
        <>
        <div className={classes.headingWrapper}>
          <div className={classes.movieImgWrapper}>
            <img className={classes.searchResultPic}src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} ></img>
          </div>
        </div>
        <Paper spacing={0} style={{backgroundColor: '#FECEAB', marginLeft: '50px',marginRight: '50px', marginTop: '100px',height: '210px',padding: '20px', height: '80vh'}}>
            <ReviewList/>
        </Paper>
        </>
    )

}