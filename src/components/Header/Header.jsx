import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuO5Tvfqb-Jci8WMNRLxlVryBw3EJ_c56NzXX1Qop253173rx4eg&s" alt="Favorites" title="Favorites" />
            <div className={classes.loginstyle}>
                {props.authStatus ?
                    <div>
                    {props.login}&#8195;
                    <button onClick={props.logout}>Logout</button>
                    </div>
                    : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
