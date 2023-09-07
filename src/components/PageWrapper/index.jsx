import React from 'react';
import { NavLink} from 'react-router-dom';

const PageWrapper = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pokemon" >PokéList</NavLink>
                    <NavLink to="/random" >Random</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </nav>
            </header>

            <main>
            {children}
            </main> 

            <footer>©PokéLister 2023</footer>
        </>
    );
};

export default PageWrapper;
