import React from "react";
import girl_avatar from './images/avatar (2).png'
import './index.css'

const user = function(props){
    return(
    <div>
        <section className="card">
            <a>
                <img src={props.image} />
            </a>
        <div className="content">
            <a className="author">{props.name}</a>
        </div>
        <div className="metadata">
            Today at <span className="date">{props.date}</span>
        </div>
        <div className="comment">
            "{props.comments}"
        </div>
        </section>
    </div>
    )
}

export default user;