import React from 'react';
import './News.css'

const News = (props) => {
    const {title,urlToImage,url,description}=props.news;
    return (
        <div className="card flex" style={{width: "18rem"}}>
            <img className="card-img-top"  src={urlToImage} alt="....." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary" >More...</a>
            </div>
        </div>
    );
};

export default News;