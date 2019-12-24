import React from 'react';

function About(){
  return (
    <div style={aboutStyle}>
      <h3>About</h3>
      <p style={{fontSize: '0.9em'}}>This is a simple todo list app made in ReactJS</p>
      <p style={{fontSize: '0.7em'}}>v1.0.0</p>
    </div>
  );
}

const aboutStyle = {
  margin: '1em auto',
  padding: '1em',
  color: '#dcdcdc',
  fontWeight: 'lighter',
  backgroundColor: '#555',
  textAlign: 'center',
  width: '40vw'
}

export default About;
