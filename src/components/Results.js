
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Results extends React.Component {

    renderResults(){
        if(!this.props.results || this.props.results.lenght === 0) {
            return (
                "Please make a search"
            );
        }

        return(
            <div className="results-container">
                "Results"
                <Link to="/item">Go to Item</Link>
            </div>
        );
    }

    render(){
        console.log(this.props.results);
        return(
            <div className="eleven wide column">
                {this.renderResults()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results.results
    }
}

export default connect(mapStateToProps)(Results);