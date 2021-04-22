// change watchlistcell everywhere on here
import React from "react";
import WatchlistCell from "../Components/WatchlistCell";
import "../Style.css";

export default function Watchlist() {
  //const [results, setResults] = useState([])

  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#2A363B",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "100px",
            padding: "0 20px 0 20px",
          }}
        >
          <WatchlistCell />
        </div>
      </div>
    </div>
  );
}
