import React from 'react';
import './menu-item.styles.scss';
const MenuItem = ({ title, subtitle, imgUrl, size }) => {
    return (

        <div className={`${size} item-menu`} >
            <div className="background-image" style={{ backgroundImage: `url(${imgUrl})` }}>

            </div>
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>

    );
}

export default MenuItem;