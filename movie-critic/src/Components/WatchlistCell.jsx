import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function WatchlistCell(props) {
  const { results } = props;
  const classes = useStyles();

  return (
    <div>
      <Paper
        spacing={0}
        style={{
          backgroundColor: '#E84A5F',
          height: '100px',
          padding: '5px',
        }}
      >
        <Grid container direction='row' style={{ padding: '10px' }}>
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
              Watched?
            </Grid>
            <Grid item xs>
              checkbox goes here!
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
