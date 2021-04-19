import React from 'react';
import '../Style.css';
import MakeAPost from '../Components/MakeAPost';
import Post from '../Components/Post';

export default function Home() {
  return (
    <div
      style={{
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div style={{ backgroundColor: '#2A363B', height: '100%' }}>
        <div
          style={{
            opacity: '1',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 100,
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <MakeAPost />
          <div style={{ paddingTop: '10px' }}>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
