import React, { useContext } from 'react';
import { UserContext } from "../UserProvider";
import Review from '../Components/Review'
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

export default function ReviewProfile(props){
    const {reviews} = props;
    const classes = useStyles();
    const user = useContext(UserContext);

    return(
        <>
        {reviews
            && reviews.map((review) =>(
              <Grid className={classes.block} container direction='row'>
                <Grid style={{ flexGrow: '0.7' }} item xs>
                  <img className={classes.popcornImg} src={popcorn} alt='popcorn' />
                </Grid>

                <Grid className={classes.blockText}>
                  <Grid item xs>
                    <p style={{ margin: '0px' }}>
                      {review.body}
                    </p>
                  </Grid>
                </Grid>
            </Grid>
              ))}
        </>
    )
}