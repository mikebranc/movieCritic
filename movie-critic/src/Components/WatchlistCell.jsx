import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import cupImage from '../Images/cup.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  resultImageWrapper: {
    width: '175px',
    height: '175px',
    display: 'block',
  },
  searchResultPic: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    border: '1px solid #2A363B',
    borderRadius: '10px',
  },
  cupImage: {
    height: '80px',
    padding: '0px',
  },
  checkbox: {
    width: '24px',
    height: '24px',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'absolute',
  },
}));

export default function WatchlistCell(props) {
  const { results } = props;
  const classes = useStyles();
  const [watched, setWatched] = useState(false);

  function checkboxChange(e) {
    setWatched(e.target.watched);
  }

  return (
    <div>
      <Paper
        spacing={0}
        style={{
          backgroundColor: '#E84A5F',
          height: '130px',
          padding: '5px',
        }}
      >
        <Grid container direction='row' style={{ padding: '20px' }}>
          <Grid container direction='column' xs>
            <Grid item xs>
              Image goes here
            </Grid>
          </Grid>

          <Grid container direction='column' xs>
            <Grid item xs>
              Title
            </Grid>
            <Grid item xs>
              Release Date:
            </Grid>
          </Grid>

          <Grid container direction='row' xs>
            <Grid container direction='column' xs>
              <Grid item xs>
                User Score:
              </Grid>
              <Grid item xs>
                95%
              </Grid>
            </Grid>

            <Grid container direction='column' xs>
              <Grid item xs>
                <div>
                  <img
                    className={classes.cupImage}
                    src={cupImage}
                    alt='cupImage'
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='column' xs>
            <Grid item xs>
              Watched?
            </Grid>
            <Grid item xs>
              <Checkbox
                watched={watched}
                onChange={checkboxChange}
                color='primary'
                style={{
                  transform: 'scale(1.5)',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
