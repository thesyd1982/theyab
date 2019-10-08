import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isCancel, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${isCancel ? 'cancel' : ''} custom-button `}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;