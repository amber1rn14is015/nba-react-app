import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNavItems';

const SideNavigation = (props) => {
    return(
        <div>
            <SideNav 
                showNav = {props.sideNavState}
                onHideNav = {props.onHideNav}
                navStyle = {{
                    background: "#242424",
                    maxWidth: "300px",
                }}
            >
                <SideNavItems/>
            </SideNav>
        </div>
    );
}

export default SideNavigation;