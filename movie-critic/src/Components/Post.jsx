import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  commentButton: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    backgroundColor: '#2A363B',
    color: '#FECEAB',
    fontSize: '15px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#1d2529',
    },
  },
  user: {
    backgroundColor: '#E84A5F',
    width: '800px',
    height: '50px',
    borderRadius: '10px 10px 0 0',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '15px',
  },
  post: {
    backgroundColor: '#FECEAB',
    width: '800px',
    height: '200px',
    fontFamily: 'Raleway',
    fontSize: '20px',
    padding: '15px',
  },
  comments: {
    backgroundColor: '#FF847C',
    width: '800px',
    height: '60px',
    borderRadius: '0 0 10px 10px',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    padding: '15px',
  },
}));

export default function Post() {
  const classes = useStyles();
  return (
    <Paper
      spacing={0}
      style={{
        backgroundColor: '#2A363B',
        width: '800px',
        height: '300px',
        padding: '5px',
      }}
    >
      <Grid className={classes.user} container direction='column'>
        <Grid item xs>
          BradyMan18
        </Grid>
      </Grid>

      <Grid className={classes.post} container direction='column'>
        <Grid item xs>
          post
        </Grid>
      </Grid>

      <Grid className={classes.comments} container direction='column'>
        <Grid container direction='row'>
          <Grid item xs={10}>
            <div style={{ fontWeight: 'lighter' }}>
              <p style={{ margin: '0' }}>
                <b>BradyMan18</b> 1917 was really good. I rate it 9/10.
              </p>
              <p style={{ margin: '0' }}>
                <b>MikeBranc</b> I haven't seen it yet. I'm gonna watch it
                tonight!
              </p>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Button className={classes.commentButton}>Add Comment</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
