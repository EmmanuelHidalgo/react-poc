
import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../actions/index';

import ResultItemCard from './ResultItemCard';


class Results extends React.Component {

    componentDidMount(){
        this.props.fetchResults('');
    }

    renderResults(){
        if(!this.props.results || this.props.results.length === 0) {
            return (
                "Please make a search"
            );
        }

        return(
            <div className="results-container">
                <h3>Results</h3>
                <div className="ui relaxed divided list">
                    {
                        this.props.results.map((result, index) => {
                            return(
                                <ResultItemCard key={index} item={result} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    render(){
        console.log(this.props.results);
        return(
            <div className="ui placeholder segment eleven wide column">
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

export default connect(mapStateToProps, {
    fetchResults
})(Results);