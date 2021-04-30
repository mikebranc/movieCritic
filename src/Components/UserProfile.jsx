import React, { useContext } from "react";
import { UserContext } from "../UserProvider";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import popcorn from '../Images/popcorn.jpeg';
import { auth } from "../firebase/firebase.util";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },

  userImg: {
    //This popcorn image should be changed to the user image
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },

  block: {
    backgroundColor: '#99B898',
    textAlign: 'left',
    fontSize: '20px',
    fontFamily: 'Raleway',
    margin: '10px',
    padding: '10px',
    borderRadius: '30px',
  },

  blockText: {
    marginLeft: '10%',
    textAlign: 'center',
    fontFamily: 'Raleway',
  },

  blockUser: {
    backgroundColor: '#FAF0F0',
    height: '200px',
  },

  editProfile: {
    backgroundColor: '#2A363B',
    color: '#FAF0F0',
    borderRadius: '15px',
    width: '50%',
    padding: '3px',
    marginTop: '10px',
    fontWeight: '900',
    fontFamily: 'Raleway',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0E0D0D',
    },
  },
}));

export default function MustWatch() {
  const classes = useStyles();
  const user = useContext(UserContext);

  return (
    <div>
      <Paper
        spacing={0}
        style={{
          backgroundColor: '#99B898',
          height: '200px',
          width: '750px',
          padding: '0px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Grid container direction='row'>
          <Grid item xs={4} className={classes.blockUser}>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <div>
                <img className={classes.userImg} src={popcorn} alt='popcorn' />
              </div>
              <div>
                <button className={classes.editProfile}
                  onClick={() => {
                  auth.signOut();
                  window.location.href = "/signin";
                  }}
                   >Sign out</button>
      </div>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.blockText}>
            {user ?<div
              style={{
                fontSize: '30px',
                fontWeight: 'bold',
                padding: '10px',
              }}
            >
              @{user.username}
            </div>: <div></div>}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0px',
              }}
            >
              <div style={{ fontSize: '20px', padding: '0px 10px' }}>
                <h1 style={{ margin: '10px 0px 0px 0px' }}>21</h1>
                <p>posts</p>
              </div>
              <div style={{ fontSize: '20px', padding: '0px 10px' }}>
                <h1 style={{ margin: '10px 0px 0px 0px' }}>21</h1>
                <p>followers</p>
              </div>
              <div style={{ fontSize: '20px', padding: '0px 10px' }}>
                <h1 style={{ margin: '10px 0px 0px 0px' }}>21</h1>
                <p>following</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
