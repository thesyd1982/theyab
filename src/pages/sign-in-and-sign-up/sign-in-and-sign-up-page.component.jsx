import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up-page.styles.scss'

const SingnInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <h1 >SIGN IN</h1>
            <SignIn />
        </div>

    );
}
export default SingnInAndSignUpPage;