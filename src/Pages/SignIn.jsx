import {React, useState} from 'react';
import bgPic from '../Images/popcorn.jpeg';
import '../Style.css';
//import { makeStyles } from 'material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import { CompassCalibrationOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import {auth, signInWithGoogle} from '../firebase/firebase.util'

const useStyles = makeStyles((theme)=>({
  userInfo: {
    backgroundColor: '#DFD6CF',
    outline:'none',
    border:'none',
    color:'black',
    width:'90%',
    height:'90%',
    fontFamily:'raleway',
    fontSize:'20px',
    fontWeight:'bold',
    '&::placeholder':{
      color:'grey',
      fontFamily:'raleway',
      fontSize:'20px',
      fontWeight:'bold'
    },
    '&:focus':{
      color:'black',
      fontFamily:'raleway',
      fontSize:'20px',
      fontWeight:'bold',
    }

  }
}))

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles()
  const [error, setError] = useState('')
  
  function handleSubmit(event){
    console.log(email)
    console.log(password)
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  }

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
          <form onSubmit={handleSubmit} style={{width: '30%'}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#DFD6CF',
                width: '100%',
                height: '40px',
                borderRadius: 90,
                fontSize: '30px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <input
              className={classes.userInfo} placeholder='Email' onChange={(event)=>setEmail(event.target.value)}
              ></input>
            </div>
            <div
              style={{
                marginTop: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#DFD6CF',
                width: '100%',
                height: '40px',
                borderRadius: 90,
                fontSize: '30px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <input  className={classes.userInfo} placeholder='Password' onChange={(event)=>setPassword(event.target.value)}></input> 
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
              <Button type="submit" onClick={handleSubmit} style={{backgroundColor: '#DFD6CF'}}>Submit</Button>
            </div>
            <div style={{width:'100%'}}>
              <Button onClick ={signInWithGoogle} style={{width:'100%', backgroundColor:'#99B898',marginTop:'20px'}}>Sign In with Google</Button>
            </div>
            
          </form>

        </div>
      </div>
    </div>
  );
}
