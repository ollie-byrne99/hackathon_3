import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>
    <h1>Home</h1>
    <p>Are you ready for some Pokélisting?</p>
    <div>
            <Link to="/pokemon">Hit Me</Link>
    </div>
    <div>   
            <Link to="/random">Who is my Pokémon!?</Link>
    </div>
    </div>
    </>
  )
}

export default Home;
