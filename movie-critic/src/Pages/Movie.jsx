import {React, useEffect, useState} from 'react'
import ReviewList from '../Components/ReviewList'
import Paper from '@material-ui/core/Paper';
import { firestore } from '../firebase/firebase.util';
import { useLocation} from 'react-router-dom'

export default function Movie(){

    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);

    const location = useLocation();
    let movieId = new URLSearchParams(location.search).get('id') 

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
            console.log(data)
            console.log(movieId)

            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        })();
    
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //   .then((response) => response.json())
        //   .then((json) => {
        //     setPosts(json);
        //     setLoading(false);
        //   });
      }, [setLoading, setReviews]);
    return(
        <>
        <Paper spacing={0} style={{backgroundColor: '#FECEAB', marginLeft: '50px',marginRight: '50px', marginTop: '100px',height: '210px',padding: '20px', height: '80vh'}}>
            <ReviewList/>
        </Paper>
        </>
    )

}