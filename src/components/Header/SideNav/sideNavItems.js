import React from 'react';
import style from './sideNav.module.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';


const itemList = [
    {
        type: style.option,
        icon: 'home',
        text: 'Home',
        link: '/'
    },
    {
        type: style.option,
        icon: 'file-text-o',
        text: 'News',
        link: '/news'
    },
    {
        type: style.option,
        icon: 'play',
        text: 'Videos',
        link: '/videos'
    },
    {
        type: style.option,
        icon: 'sign-in',
        text: 'Sign in',
        link: '/sign-in'
    },
    {
        type: style.option,
        icon: 'sign-out',
        text: 'Sign out',
        link: '/sign-out'
    }
]

const navItems = () => {
    return itemList.map((item, i) => {
        return(
            <div key={i} className = {item.type}>
                <Link to={item.link}>
                    <FontAwesome name={item.icon}/>
                    {item.text}
                </Link>
            </div>
        )
    })
}

const SideNavItems = () => {
    return(
        <div>
            {navItems()}
        </div>
    );
}

export default SideNavItems;