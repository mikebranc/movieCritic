import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  postButton: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#99B898',
    width: '800px',
    height: '70px',
    borderRadius: 10,
    fontSize: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#8fab8e',
    },
  },
}));

export default function MakeAPost() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.postButton}>Make a Post</Button>
    </div>
  );
}
