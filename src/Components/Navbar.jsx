import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Pinocchio',
    color: '#2A363B',
    fontSize: '50px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='fixed' style={{ backgroundColor: '#E84A5F' }}>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            Movie Critic
          </Typography>
          <HomeIcon
            onClick={(event) => (window.location.href = '/')}
            style={{ cursor: 'pointer', color: '#2A363B' }}
            fontSize='large'
          />
          <SearchIcon
            onClick={(event) => (window.location.href = '/search')}
            style={{ cursor: 'pointer', color: '#2A363B' }}
            fontSize='large'
          />
          <MenuIcon
            onClick={(event) => (window.location.href = '/list')}
            style={{ cursor: 'pointer', color: '#2A363B' }}
            fontSize='large'
          />
          <PersonIcon
            onClick={(event) => (window.location.href = '/about')}
            style={{ cursor: 'pointer', color: '#2A363B' }}
            fontSize='large'
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
