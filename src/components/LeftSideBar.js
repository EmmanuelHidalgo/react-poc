
import React from 'react';
import { connect } from 'react-redux';

import { fetchFacets, fetchResults } from '../actions/index';

class LeftSideBar extends React.Component {

    componentDidMount() {
        this.props.fetchFacets();
    }

    onCheckChange = () => {
        this.props.fetchResults('test');
    }

    getMenuItems(item, index) {
        return (
            <div key={'menu-'+index} className="item">
                <div className="header">{item.name}</div>
                <div className="menu">
                    {item.checkboxes.map((check, key)=> {
                        return (
                            <a key={'item-'+key} className="item">
                                <div className="ui checkbox">
                                    <input type="checkbox" onChange={this.onCheckChange}/>
                                    <label>{check.name}</label>
                                </div>
                            </a>)
                    })}
                </div>
            </div>
        );
    }

    render(){
        return (
            <div className="four wide column">
                <div className="ui vertical menu">
                    {this.props.facets && this.props.facets.map((facet, index)=> {
                        return this.getMenuItems(facet, index)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        facets: state.facets.facets
    }
}

export default connect(mapStateToProps, {
    fetchFacets,
    fetchResults
})(LeftSideBar);