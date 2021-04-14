import React, { useState } from 'react';
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '50px',
  },
  submitButton: {
    backgroundColor: '#2A363B',
    color: 'white',
    fontSize: '15px',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
      backgroundColor: '#3c4d54',
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
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '65ch',
    },
  },
}));

export default function SearchWriteReviewModal(props) {
  const { show, handleClose } = props;
  const [value, setValue] = useState('');
  const classes = useStyles();

  function handleChange(event) {
    setValue(event.target.value);
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
            <h1>Write a Review</h1>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='outlined-multiline-flexible'
                label='What did you think?'
                multiline
                rowsMax={10}
                variant='outlined'
                value={value}
                onChange={handleChange}
              />
            </form>
            <Button className={classes.submitButton}>Submit</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
