import React from 'react'
import bgPic from '../Images/popcorn.jpeg'
import '../Style.css'


export default function Home(){
    return(
        <div style={{height:'100vh', backgroundPosition:'center', backgroundImage:`url(${bgPic})`, backgroundSize: 'cover'}}>
        <div style={{backgroundColor: 'rgba(232, 74, 95, 0.9)', height:'100%'}}>
            <div style={{opacity: '1', display: 'flex', alignItems: 'center',  paddingTop: 200, flexDirection: 'column', width:'100%'}}>
              <div style={{display:'flex', justifyContent:'center', alignItems: 'center', width: '60%', fontSize:'200%' }}>Movie Critic</div>
              <div style={{display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor:'#DFD6CF', width: '30%', height:'40px', borderRadius:90, fontSize:'30px', fontWeight:'bold', cursor:'pointer' }}>Username</div>
              <div style={{margin: 15,display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor:'#DFD6CF', width: '30%', height:'40px', borderRadius:90, fontSize:'30px', fontWeight:'bold', cursor:'pointer' }}>Password</div>
            </div>
        </div>
        </div>
    )
}