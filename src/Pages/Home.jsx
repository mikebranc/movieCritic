import React, { useEffect, useState } from 'react';
import '../Style.css';
import MakeAPost from '../Components/MakeAPost';
import Post from '../Components/Post';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firestore } from '../firebase/firebase.util';
import ReviewList from '../Components/ReviewList'

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const postsRef = firestore.collection("reviews");
        const postsDoc = await postsRef.where("movieId", "==", "808").get();
        const data = postsDoc.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setReviews(data);
        setLoading(false);
        console.log(reviews);
      } catch (error) {
        setLoading(false);
      }
    })();

  }, [setLoading, setReviews]);

  if (loading || (reviews.length === 0 && reviews)) {
    return <CircularProgress />;

  }
  return (
    <div
      style={{
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ backgroundColor: '#2A363B', height: '100%' }}>
        <div
          style={{
            opacity: '1',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 100,
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <MakeAPost />
          <div style={{ paddingTop: '10px' }}>
            <Post reviews={reviews}/>
          </div>
        </div>
      </div>
    </div>
  );
}
