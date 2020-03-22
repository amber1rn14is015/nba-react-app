import React, { Component } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import './layout.css';

class Layout extends Component{

    state = {
        showNav: false
    }

    toggleSideNav(nav){
        this.setState({
            showNav: nav
        })
    }

    render(){
        return(
            <div>
                <Header
                    sideNavState = {this.state.showNav}
                    onHideNav = {() => this.toggleSideNav(false)}
                    onOpenNav = {() => this.toggleSideNav(true)}
                />
                    {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Layout;