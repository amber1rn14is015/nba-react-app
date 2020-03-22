import React from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {

    const barsIcon = () => {
        return(
        <div className={style.bars}>
            <FontAwesome name="bars" onClick = {props.onOpenNav}/>
        </div>
        )
    }

    const logo = () => {
        return(
            <Link to="/" className={style.logo}>
                <img alt="nba logo" src="\images\nba_logo.png"/>
            </Link>
        )
    }

    return(
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
                {barsIcon()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;