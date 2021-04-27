import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import popcorn from "../Images/popcorn.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },

  rowLayout: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  paper: {
    padding: theme.spacing(2),
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
    backgroundColor: "#2A363B",
    textAlign: "left",
    fontSize: "20px",
    fontFamily: "Raleway",
    margin: "10px",
    padding: "10px",
    borderRadius: "30px",
  },
  popcornImg: {
    //This popcorn image should be changed to the movie cover image
    width: "75px",
    height: "100px",
  },
  blockText: {
    color: "#FAF0F0",
    fontWeight: "bold",
  },
  seeMore: {
    backgroundColor: "#FAF0F0",
    borderRadius: "15px",
    width: "50%",
    padding: "3px",
    marginTop: "10px",
    fontWeight: "900",
    fontFamily: "Raleway",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#E5DADA",
    },
  },
}));

export default function MustWatch() {
  const classes = useStyles();

  return (
    <div>
      {/* First create a paper element. All the grids will go inside it.
          In this case it is the yellow box.  */}
      <Paper
        spacing={3}
        style={{
          backgroundColor: "#FECEAB",
          height: "200px",
          width: "300px",
          padding: "0px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Then I made a Grid with direction column for the Must Watch title.
            (This is the white box) If you wanna style it you can use 'const useStyles' */}
        <Grid className={classes.title}>
          <Grid item xs>
            Must Watch
          </Grid>
        </Grid>

        {/* Then I made another Grid with direction row. This contains all the
              stuff in the grey box. I made it a row so the image and text will be
              next to eachother. All the text/button I put in a column Grid so they will
              one on top of the other.*/}
        <Grid className={classes.block} container direction="row">
          <Grid style={{ flexGrow: "0.9" }} item xs>
            <img className={classes.popcornImg} src={popcorn} alt="popcorn" />
          </Grid>

          <Grid className={classes.blockText}>
            <Grid item xs>
              <div style={{ marginBottom: "5px" }}>The Popcorn Movie</div>
            </Grid>
            <Grid item xs>
              <div style={{ fontSize: "15px" }}>Average Rating: 2</div>
            </Grid>
            <Grid item xs>
              <div style={{ fontSize: "15px" }}>Average Friend Rating: 9</div>
            </Grid>
            <Grid item xs>
              <button className={classes.seeMore}>See More</button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
