import React from 'react';
import { connect } from 'react-redux';
import { fetchResultItem } from '../actions/index';

class DetailPage extends React.Component {
    componentDidMount() {
        this.props.fetchResultItem();
    }
    render(){
        console.log(this.props.item)
        return(
            <div>
                "I am the dail page"
            </div>
        )
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