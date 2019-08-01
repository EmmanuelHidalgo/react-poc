import React from 'react';
import { connect } from 'react-redux';
import { fetchResultItem } from '../actions/index';
import './Detail.css';

class DetailPage extends React.Component {
    componentDidMount() {
        this.props.fetchResultItem();
    }
    renderContent(){
        if(!this.props.item) return null;

        const {title, authors, doi, issn, sector, type, language } = this.props.item
        return(
            <div className="detail-container ui container segment">
                <h2 className="ui header">{title}</h2>
                <div className="ui card">
                    <div className="content">
                        <div className="header">Overall Information</div>
                    </div>
                    <div className="content">
                        <div className="ui small feed">
                            <div className="event">
                            <div className="content">
                                <div className="summary">
                                    <a>ISSN</a> {issn}
                                </div>
                            </div>
                        </div>
                            <div className="event">
                            <div className="content">
                                <div className="summary">
                                    <a>DOI</a> {doi}
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
                                    <a>Language</a> {language}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui small feed">
                            <div className="event">
                                <div className="content">
                                    <div className="summary">
                                        <a>Sector</a> {sector.map((sector, index) => {
                                                return <p key={"sector-"+index}>{sector}</p>
                                            })}
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ui small feed">
                            <div className="event">
                                <div className="content">
                                    <div className="summary">
                                        <a>Authors</a> {authors.map((author,index) => {
                                            return <p key={"author-"+index}>{author.name}</p>
                                        })}
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return this.renderContent()
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.item.item
    }
}

export default connect(mapStateToProps, {
    fetchResultItem
})(DetailPage)