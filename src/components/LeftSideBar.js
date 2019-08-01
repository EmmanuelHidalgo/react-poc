
import React from 'react';
import { connect } from 'react-redux';

import {fetchFacets} from '../actions/index'

class LeftSideBar extends React.Component {

    componentDidMount() {
        this.props.fetchFacets();
    }

    render(){
        console.log(this.props.facets);
        return (
            <div className="five wide column">
                "LeftSideBar"
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
    fetchFacets
})(LeftSideBar);