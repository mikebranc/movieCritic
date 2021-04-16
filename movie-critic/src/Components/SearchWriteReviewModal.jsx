import React, { useState } from 'react';
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

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
  const { show, handleClose } = props;
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const classes = useStyles();

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleBody(event) {
    setBody(event.target.value);
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
            <form className={classes.root} noValidate autoComplete='off'>
            <TextField
                className={classes.root}
                id='outlined-multiline-flexible'
                label='Review Name'
                multiline
                rowsMax={10}
                variant='outlined'
                value={title}
                onChange={handleTitle}
              />
              <TextField
                className={classes.root}
                id='outlined-multiline-flexible'
                label='What did you think?'
                multiline
                rowsMax={10}
                variant='outlined'
                value={body}
                onChange={handleBody}
              />
            </form>
            <Button className={classes.submitButton}>Submit</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
