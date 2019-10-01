import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, subtitle, imgUrl, size, history, match, linkUrl }) => {
    return (

        <div className={`${size} item-menu`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imgUrl})` }}>

            </div>
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>

    );
}

export default withRouter(MenuItem);