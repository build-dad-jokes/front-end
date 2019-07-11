import React, { Component } from 'react';
import './styles.css';

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.search} placeholder="Search Jokes" />
            </div>
        )
    }
}

export default SearchBar;