import React, { Component } from 'react';
import './styles.css';

export class SearchBar extends Component {
    render() {
        return (
            <div className='searchbar'>
                <input onChange={this.props.search} placeholder="Search Jokes" />
            </div>
        )
    }
}

export default SearchBar;