import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link className='logo-container' to='/'>
                    <Logo className='logo' alt='Home' />
                </Link>
            </div>
            <div className="options">
                <Link className='option' to='shop'>
                    Shop
                </Link>
                <Link className='option' to='shop'>
                    Contact
                </Link>
            </div>

        </div>
    );
}
export default Header;