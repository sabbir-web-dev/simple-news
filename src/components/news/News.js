import React from 'react';
import './News.css'

const News = (props) => {
    console.log(props)
    const {title,image,url,description}=props.news;
    return (
        <div className="card flex" style={{width: "18rem"}}>
            <img className="card-img-top"  src={image} alt="...Img" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary" >More...</a>
            </div>
        </div>
    );
};

export default News;