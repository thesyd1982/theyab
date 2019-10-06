import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => {
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
                <Link className='option' to='sin'>
                    Contact
                </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>sign out</div> :
                        <Link className='option' to='/signin'>
                            signin
                    </Link>
                }

            </div>

        </div>
    );
}
export default Header;