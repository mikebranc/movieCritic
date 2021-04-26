import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    resultButton: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 'bold',
      backgroundColor: '#2A363B',
      color: '#FECEAB',
      fontSize: '20px',
      '&:hover': {
        backgroundColor: '#1d2529',
      },
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
    reviewHeading:{
        fontSize:'30px',
        fontWeight:'bold'
    },
  }));

export default function ReviewList(props){
      const {reviews} = props;
      const classes = useStyles();
      console.log(reviews)
    return(
      <div>
    {reviews
      && reviews.map((review) =>(
    <Paper spacing={0} style={{backgroundColor: '#2A363B', marginBottom: '15px',height: '130px',padding: '0px'}}>
        <Grid item lg xs={12} container spacing={0} style={{ color:'white', height: '100%' }}>
            <Grid item xs={2} style={{ height: '100%' }} container direction='column' justify='center' alignItems='center'>
                <AccountCircleIcon style={{fontSize:'100px'}}/>
            </Grid>
            <Grid item xs={8} container style={{ height: '100%', paddingTop: '10px',paddingBottom: '10px', }}>
                <Grid item container direction='column'>
                  <Grid item xs container drection='row'>
                      <Grid item container xs={8}>
                        <div className ={classes.reviewHeading}>
                            {review.title}
                        </div>
                      </Grid>
                      <Grid item container xs={4}>
                        <div className ={classes.reviewHeading}>
                            Rating: {review.rating}
                        </div>
                      </Grid>
                  </Grid>
                  <Grid item xs>
                      <p style={{ fontFamily: 'Raleway', color:'white'}}>
                        {review.body}
                      </p>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} container>
                <Button style={{ textTransform: 'none', backgroundColor: '#E84A5F', color:'white',fontSize:'25px' }}
                item
                container
                fullWidth = 'true'
                direction='column'
                alignItems='center'
                justify='space-between'
                >
                Read Review
                </Button>
            </Grid>
        </Grid>
    </Paper>))}
    </div>
    )
}