// change watchlistcell everywhere on here
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserProvider";
import { auth } from "../firebase/firebase.util";
import MustWatch from "../Components/MustWatch";
import Bio from "../Components/Bio";
import FeaturedReview from "../Components/FeaturedReview";
import Reviews from "../Components/Reviews";
import FavMovie from "../Components/FavMovie";
import UserProfile from "../Components/UserProfile";
import CircularProgress from '@material-ui/core/CircularProgress';
import { firestore } from '../firebase/firebase.util';
import "../Style.css";

export default function Profile() {
  //const [results, setResults] = useState([])
  const user = useContext(UserContext);
  //const {email, username} = user;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const postsRef = firestore.collection("reviews");
        const postsDoc = await postsRef.get();
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

  console.log(user);
  return (
    <div>
      <div
        style={{
          height: "150vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#2A363B",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "300px",
            padding: "0 20px 0 20px",
          }}
        >
          <MustWatch />
        </div>
        <div
          style={{
            position: "relative",
            top: "-100px",
            marginLeft: "350px",
            padding: "0 20px 0 20px",
          }}
        >
          <FeaturedReview featuredReview={reviews[0]}/>
        </div>
        <div
          style={{
            position: "relative",
            top: "-525px",
            marginLeft: "825px",
            padding: "0 20px 0 20px",
          }}
        >
          <Bio />
        </div>
        <div
          style={{
            position: "relative",
            top: "-280px",
            marginLeft: "350px",
            padding: "0 20px 0 20px",
          }}
        >
          <Reviews reviews={reviews}/>
        </div>
        <div
          style={{
            position: "relative",
            top: "-850px",
            marginLeft: "750px",
            padding: "0 20px 0 20px",
          }}
        >
          <FavMovie />
        </div>
        
        <div
          style={{
            position: "relative",
            top: "-1275px",
            marginLeft: "0px",
            padding: "0 20px 0 20px",
          }}
        >
          <UserProfile />
        </div>

      </div>

    </div>
  );
}
