import React from 'react';
import './ResultItemCard.css';
import { Link } from 'react-router-dom';

const ResultItemCard = (props) => {
    const {title, abstract, type, doi} = props.item
    return (
        <div className="ui card">
            <div className="content">
                <div className="header"><Link to="/item">{title}</Link></div>
            </div>
            <div className="content">
                <div className="ui small feed">
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>DOI</a>: {doi}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        <a>Type</a> {type}
                    </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                    <div className="summary">
                        {abstract}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );
}

export default ResultItemCard;