import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import cup from '../Images/cup.png';
import popcorn from '../Images/popcorn.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
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

  cupImg: {
    height: '80px',
    padding: '10px',
  },

  coverImg: {
    //This popcorn image should be changed to the movie cover image
    width: '75px',
    height: '100px',
    padding: '10px',
    marginLeft: '40px',
  },

  block: {
    backgroundColor: '#99B898',
    textAlign: 'left',
    fontSize: '20px',
    fontFamily: 'Raleway',
    margin: '10px',
    padding: '10px',
    borderRadius: '30px',
  },
}));

export default function MustWatch() {
  const classes = useStyles();

  return (
    <div>
      <Paper
        spacing={0}
        style={{
          backgroundColor: '#FECEAB',
          height: '200px',
          width: '450px',
          padding: '0px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Grid className={classes.title}>
          <Grid item xs>
            Favorite Movie
          </Grid>
        </Grid>
        <Grid>
          <Grid Item xs>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  fontSize: '40px',
                  fontFamily: 'Pinocchio',
                  margin: '30px 20px 20px 20px',
                }}
              >
                100%
              </div>
              <div>
                <img className={classes.cupImg} src={cup} alt='cup' />
              </div>
              <div>
                <img className={classes.coverImg} src={popcorn} alt='popcorn' />
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
