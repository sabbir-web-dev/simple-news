import React from 'react';
import './Header.css'

const Header = (props) => {
    const news = props.news;
    
    return (
        <div className="card header">
        <h5 className="card-header">News 69</h5>
        <div className="card-body" style={{background:"lightgray"}}>
            <h1 className="card-title">Breaking News!</h1>
            <p className="card-text">Top Headline:{news.length} </p>
        </div>
        </div>
    );
};

export default Header;