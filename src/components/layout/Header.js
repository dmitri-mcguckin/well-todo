import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header style={headerStyle}>
      <h1>Well-To-Do</h1>
      <Link style={linkStyle} to='/'>Home</Link>
      &nbsp;|&nbsp;
      <Link style={linkStyle} to='/about'>About</Link>
    </header>
  );
}

const headerStyle = {
  color: '#dcdcdc',
  fontWeight: 'bold',
  padding: '0.4em 0',
  backgroundColor: '#333',
  textAlign: 'center'
}

const linkStyle = {
  color: '#dcdcdc',
  backgroundColor: '#333',
  textAlign: 'center'
}

export default Header;
