import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { firestore } from '../firebase/firebase.util';
import Comments from '../Components/Comments';

const useStyles = makeStyles((theme) => ({
  addComment: {
    width: '70%',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#FECEAB',
    borderRadius: '10px 0px 0px 10px',
    fontFamily: 'Raleway',
    outline: 'none',
    fontSize: '16px',
  },
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
  submitButton: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    backgroundColor: '#2A363B',
    color: '#FECEAB',
    fontSize: '15px',
    textTransform: 'none',
    height: '45px',
    borderRadius: '0px 10px 10px 0px',
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
  moreComments: {
    backgroundColor: '#FF847C',
    width: '770px',
    position: 'relative',
    left: '-15px',
    borderRadius: '0 0 10px 10px',
    fontFamily: 'Raleway',
    fontWeight: 'lighter',
    padding: '15px',
  },
}));

export default function Post(props) {
  const {reviews} = props;
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  function toggle(id) {
    setShowId(id);
    setShow(!show);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.dataset.somefield);
    setLoading(true);
    try {
    const postRef = firestore.collection('reviews').doc(event.target.dataset.somefield).collection('comments');
    const data = await postRef.add({comment});
  } catch (error) {
    throw error.message;
  }
  setComment('');
  setLoading(false);
}






  return (
    <div>
    {reviews
      && reviews.map((review) =>(

    <Paper
      spacing={0}
      style={{
        backgroundColor: '#2A363B',
        padding: '5px',
        height: 'auto'
      }}
    >
      <Grid className={classes.user} container direction='column'>
        <Grid item xs>
          BradyMan18
        </Grid>
      </Grid>

      <Grid className={classes.post} container direction='column'>
        <Grid item xs>
        {review.body}
        </Grid>
      </Grid>

      <Grid className={classes.comments} container direction='column'>
        <Grid container direction='row'>
          <Grid item xs={10}>
            <div style={{ fontWeight: 'lighter' }}>
              <p style={{ margin: '0' }}>
                <b>BradyMan18</b> {review.title}
              </p>
              <div>
              {(show && review.id==showId) ? (
                <div className={classes.moreComments}>
                  <Comments reviewId={review.id}/>
                  {/* <p style={{ margin: '0' }}>{comment}</p> */}
                  <form data-somefield={review.id} onSubmit={handleSubmit}>
                    <input
                      placeholder='Add a Comment'
                      className={classes.addComment}
                      onChange={(event) => setComment(event.target.value)}
                      value={comment}
                    ></input>
                    <button type='submit' className={classes.submitButton}>
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Button className={classes.commentButton} onClick={() => toggle(review.id)}>
              Add Comment
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>))}
    </div>
  );
}
