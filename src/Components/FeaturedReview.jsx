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
        spacing={0}
        style={{
          backgroundColor: "#E84A5F",
          height: "200px",
          width: "375px",
          padding: "0px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Then I made a Grid with direction column for the Must Watch title.
            (This is the white box) If you wanna style it you can use 'const useStyles' */}
        <Grid className={classes.title}>
          <Grid item xs>
            Featured Review
          </Grid>
        </Grid>

        <Grid className={classes.blockText}>
          <Grid item xs={12}>
            <div style={{ fontSize: "20px" }}>Some review goes here</div>
          </Grid>
          <Grid item xs={10}>
            <button className={classes.seeMore}>See More</button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
