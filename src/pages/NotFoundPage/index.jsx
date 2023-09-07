import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Page <span>{location.pathname}</span> not found
      </h1>
    <Link to='/'>Home page &rarr;</Link>
    </>
  )
}

export default NotFound;
