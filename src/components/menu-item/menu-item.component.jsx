import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div className={`menu-item ${size}`}>
    <div 
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${match.url}${linkUrl}`) }>
    </div>
    <div className="content">
    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">Buy now</span>
    </div>
  </div>
)

export default withRouter(MenuItem);