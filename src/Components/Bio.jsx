import React, { useContext } from "react";
import { UserContext } from "../UserProvider";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
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
  },

  blockText: {
    color: '#FAF0F0',
    fontWeight: 'bold',
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
          width: '450px',
          padding: '0px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Grid className={classes.title}>
          <Grid item xs>
            Bio
          </Grid>
        </Grid>
        <Grid classname={classes.blockText}>
          <Grid Item xs>
            <div style={{ padding: '20px' }}>
              {user? <div style={{ fontSize: '20px' }}>{user.bio}</div>: <div>tell us about yourself</div>}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
