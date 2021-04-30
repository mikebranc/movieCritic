import React, { useContext } from "react";
import { UserContext } from "../UserProvider";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import popcorn from '../Images/popcorn.jpeg';
import cup from '../Images/cup.png';
import ReviewProfile from './ReviewProfile'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },

  rowLayout: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  paper: {
    padding: theme.spacing(2),
  },
  title: {
    backgroundColor: '#FAF0F0',
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '10px 10px 0 0',
  },
  block: {
    backgroundColor: '#99B898',
    textAlign: 'left',
    fontSize: '20px',
    fontFamily: 'Raleway',
    margin: '10px',
    padding: '10px',
    borderRadius: '30px',
    width: '50%',
  },
  popcornImg: {
    //This popcorn image should be changed to the movie cover image
    width: '75px',
    height: '100px',
  },
  cupImg: {
    height: '80px',
    padding: '10px',
  },
  blockText: {
    fontSize: '14px',
    width: '200px',
    margin: '10px',
  },
  seeMore: {
    backgroundColor: '#2A363B',
    borderRadius: '15px',
    padding: '3px',
    fontWeight: '900',
    fontFamily: 'Raleway',
    cursor: 'pointer',
    color: '#FAF0F0',
    '&:hover': {
      backgroundColor: '#0E0D0D',
    },
  },
}));

export default function MustWatch(props) {
  const {reviews} = props;
  const classes = useStyles();
  const user = useContext(UserContext);
  return (
    <>
      <Paper
        spacing={3}
        style={{
          backgroundColor: '#E84A5F',
          height: '350px',
          width: '850px',
          padding: '0px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Grid className={classes.title}>
          <Grid item xs>
            Reviews
          </Grid>
        </Grid>
        <ReviewProfile reviews={reviews}/>
          <Grid item xs>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <div>
                <button className={classes.seeMore}>See More</button>
              </div>
            </div>
          </Grid>
      </Paper>
    </>
  );
}
