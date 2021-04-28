import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  title: {
    backgroundColor: "#FAF0F0",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Raleway",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "10px 10px 0 0",
  },

  block: {
    backgroundColor: "#99B898",
    textAlign: "left",
    fontSize: "20px",
    fontFamily: "Raleway",
    margin: "10px",
    padding: "10px",
    borderRadius: "30px",
  },

  blockText: {
    color: "#FAF0F0",
    fontWeight: "bold",
  },
  popcornImg: {
    //This popcorn image should be changed to the movie cover image
    width: "75px",
    height: "100px",
  },
}));

export default function MustWatch() {
  const classes = useStyles();

  return (
    <div>
      <Paper
        spacing={0}
        style={{
          backgroundColor: "#FECEAB",
          height: "200px",
          width: "450px",
          padding: "0px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Grid className={classes.title}>
          <Grid item xs>
            Favorite Movie
          </Grid>
        </Grid>
        <Grid classname={classes.blockText}>
          <Grid Item xs>
            <div style={{ fontSize: "20px" }}>- rating (in percent)</div>
            <div style={{ fontSize: "20px" }}>- cup picture</div>
            <div style={{ fontSize: "20px" }}>- picture of movie</div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
