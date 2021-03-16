import React from 'react'
import  './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import logo from './images/logo.png';
import ForumIcon from '@material-ui/icons/Forum';
import './SwipeButtons.css';

function Header() {
    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/> 
            </IconButton>

            <img className="header__logo" src={logo} alt="" /> 
            <IconButton>
                 <ForumIcon fontSize="large" className="header__icon"/> 
            </IconButton>
           
        </div>
    )
}

export default Header
