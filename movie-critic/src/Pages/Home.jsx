import React from 'react'

import '../Style.css'


export default function Home(){
    return(
        <div style={{ height:'100vh', backgroundPosition:'center',  backgroundSize: 'cover'}}>
            <div style={{backgroundColor: '#2A363B', height:'100%'}}>
                <div style={{opacity: '1', display: 'flex', alignItems: 'center',  paddingTop: 100, flexDirection: 'column', width:'100%'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor:'#99B898', width: '60%', height:'70px', borderRadius:10, fontSize:'30px', fontWeight:'bold', cursor:'pointer' }}>Make a Post</div>
                </div>
            </div>
        </div>
    )
}