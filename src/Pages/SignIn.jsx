import React from 'react';
import bgPic from '../Images/popcorn.jpeg';
import '../Style.css';
//import { makeStyles } from 'material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  userInfo: {
    backgroundColor: '#DFD6CF',
    outline:'none',
    border:'none',
    color:'black',
    width:'90%',
    height:'90%',
    '&::placeholder':{
      color:'black',
      fontFamily:'raleway',
      fontSize:'20px',
      fontWeight:'bold'
    }
  }
}))

export default function SignIn() {
  const classes = useStyles()
  return (
    <div
      style={{
        height: '100vh',
        backgroundPosition: 'center',
        backgroundImage: `url(${bgPic})`,
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{ backgroundColor: 'rgba(232, 74, 95, 0.9)', height: '100%' }}
      >
        <div
          style={{
            opacity: '1',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 200,
            flexDirection: 'column',
            width: '100%',
          
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '60%',
              fontSize: '50px',
              fontWeight:'bold',
              marginBottom:'20px'
            }}
          >
            Movie Critic
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DFD6CF',
              width: '30%',
              height: '40px',
              borderRadius: 90,
              fontSize: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <input
            className={classes.userInfo} placeholder='Username'
            ></input>
          </div>
          <div
            style={{
              margin: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DFD6CF',
              width: '30%',
              height: '40px',
              borderRadius: 90,
              fontSize: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <input  className={classes.userInfo} placeholder='Password'></input> 
         </div>
        </div>
      </div>
    </div>
  );
}
