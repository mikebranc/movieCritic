import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import popcorn from '../Images/popcorn.jpeg';
import cup from '../Images/cup.png';

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

export default function MustWatch() {
  const classes = useStyles();

  return (
    <div>
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

        <Grid className={classes.block} container direction='row'>
          <Grid style={{ flexGrow: '0.7' }} item xs>
            <img className={classes.popcornImg} src={popcorn} alt='popcorn' />
          </Grid>

          <Grid className={classes.blockText}>
            <Grid item xs>
              <p style={{ margin: '0px' }}>
                This movie boasts groundbreaking direction, cinematography,
                screenwriting, soundtrack, and extraordinary perfor...
              </p>
            </Grid>
          </Grid>

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
                <img className={classes.cupImg} src={cup} alt='cup' />
              </div>
              <div>
                <button className={classes.seeMore}>See More</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
