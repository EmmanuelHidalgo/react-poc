
import React from 'react';
import { connect } from 'react-redux';

import { fetchResults } from '../actions/index';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchResults(this.state.term);

    }

    render() {
        return (
            <div className="searchBar ui segment">
               <form onSubmit={this.onFormSubmit}  className="ui form">
                   <div className="field">
                        <label>Search</label>
                        <input
                            value={this.state.term}
                            type="text"
                            onChange={this.onInputChange}
                        />
                   </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {
    fetchResults
})(SearchBar);