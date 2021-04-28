// change watchlistcell everywhere on here
import React, { useContext } from "react";
import { UserContext } from "../UserProvider";
import { auth } from "../firebase/firebase.util";
import MustWatch from "../Components/MustWatch";
import Bio from "../Components/Bio";
import FeaturedReview from "../Components/FeaturedReview";
import Reviews from "../Components/Reviews";
import FavMovie from "../Components/FavMovie";
import UserProfile from "../Components/UserProfile";
import "../Style.css";

export default function Profile() {
  //const [results, setResults] = useState([])
  const user = useContext(UserContext);
  //const {email, username} = user;
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
          <FeaturedReview />
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
          <Reviews />
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
      <button
        className="w-full py-3 bg-red-600 mt-4 text-white"
        onClick={() => {
          auth.signOut();
          window.location.href = "/signin";
        }}
      >
        Sign out
      </button>
    </div>
  );
}
