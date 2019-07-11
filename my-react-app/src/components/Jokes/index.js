import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { deleteJoke } from '../../actions';
import Joke from '../Joke';


export class Jokes extends Component {
    render() {
        return (
            <div className="jokes-list">
                <h1>JOKES FROM YA DADDY</h1>
                <ul>
                    {this.props.jokes.map(joke => {
                        return (
                            <Joke
                                question={joke.joke}
                                id={joke.id}
                                answer={joke.punchline}
                                key={joke.id}
                                created_by={joke.created_by}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.auth
}


export default Jokes;