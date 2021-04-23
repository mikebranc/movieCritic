import React, { useState } from 'react';
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { firestore } from '../firebase/firebase.util';

const useStyles = makeStyles((theme) => ({
  submitButton: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    backgroundColor: '#2A363B',
    color: '#FECEAB',
    fontSize: '15px',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
      backgroundColor: '#1d2529',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // theme.palette.background.paper
    backgroundColor: '#99B898',
    border: '2px solid #7c947b',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    width: '50%',
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '65ch',
      fontFamily: 'Raleway',
    },
    '& > .MuiInput-root': {
      margin: theme.spacing(1),
      width: '65ch',
      fontFamily: 'Raleway',
    },
    '& > .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2A363B',
    },
    '& > .MuiInputLabel-root': {
      fontFamily: 'Raleway',
    },
    '& > .MuiInputLabel-root.Mui-focused': {
      color: '#2A363B',
      fontFamily: 'Raleway',
    },
  },
}));

export default function SearchWriteReviewModal(props) {
  const { show, handleClose, movieId } = props;
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const classes = useStyles();
  const [rating,setRating]=useState(0);
  const [loading, setLoading] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();


    setLoading(true);
    console.log('handle submit:')
    console.log(rating)
    console.log(typeof rating)
    if(rating >10 || rating < 0){
      alert("Please enter a rating between 1 and 10");
      return
    }
    //parse float not working, have to enter 1-10

    try {
      console.log(typeof rating)
      const postRef = firestore.collection('reviews');
      const data = await postRef.add({ title, body, movieId, rating:Number(rating)});
    } catch (error) {
      throw error.message;
    }
    setRating(0);
    setTitle('');
    setBody('');
    setLoading(false);
    handleClose();
  }

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={classes.paper}>
            <h1 style={{ fontFamily: 'Pinocchio', letterSpacing: '1px' }}>
              Write a Review
            </h1>
            <form
              className={classes.root}
              noValidate
              autoComplete='off'
              onSubmit={handleSubmit}
            >
              <TextField
                className={classes.root}
                id='reviewName'
                placeholder='Review Name'
                rowsMax={2}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <TextField
                type='number'
                className={classes.root}
                id='rating'
                placeholder='Rating (1-10)'
                rowsMax={1}
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
              <TextField
                className={classes.root}
                id='thoughts'
                label='What did you think?'
                multiline
                rowsMax={10}
                variant='outlined'
                value={body}
                onChange={(event) => setBody(event.target.value)}
              />
              <Button className={classes.submitButton} type='submit'>
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
