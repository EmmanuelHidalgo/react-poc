
import React from 'react';
import { connect } from 'react-redux';

import { fetchResults } from '../actions/index';
import "./SearchBar.css";

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchResults(this.state.term);

    }

    onSearch = () => {
        this.props.fetchResults(this.state.term)
    }

    render() {
        return (
            <div className="searchBar ui segment">
               <form onSubmit={this.onFormSubmit}  className="ui form">
                   <div className="ui category search item">
                        <div className="ui transparent icon input">
                            <input
                                className="prompt"
                                placeholder="Search"
                                value={this.state.term}
                                type="text"
                                onChange={this.onInputChange}
                            />
                            <i className="search link icon" onClick={this.onSearch}></i>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {
    fetchResults
})(SearchBar);