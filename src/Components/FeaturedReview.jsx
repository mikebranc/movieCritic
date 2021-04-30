import React, { useContext } from "react";
import { UserContext } from "../UserProvider";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import popcorn from '../Images/popcorn.jpeg';

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

  blockText: {
    textAlign: 'center',
    margin: '10px',
  },
  seeMore: {
    backgroundColor: '#2A363B',
    borderRadius: '15px',
    width: '50%',
    padding: '3px',
    marginTop: '10px',
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
  const {featuredReview} = props;
  const classes = useStyles();
  const user = useContext(UserContext);
  console.log(featuredReview)
  return (
    <div>
      {/* First create a paper element. All the grids will go inside it.
          In this case it is the yellow box.  */}
      <Paper
        spacing={0}
        style={{
          backgroundColor: '#E84A5F',
          height: '200px',
          width: '375px',
          padding: '0px',
          borderRadius: '10px',
          overflow: 'hidden',
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
          <Grid item xs>
            <div style={{ fontSize: '20px' }}>{featuredReview.body}</div>
          </Grid>
          <Grid item xs>
            <button className={classes.seeMore}>See More</button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
