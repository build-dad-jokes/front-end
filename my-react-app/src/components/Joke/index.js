import React from 'react';
// import { deleteJoke, updateJoke } from '../../actions';
import { connect } from 'react-redux';
import './styles.css';

const Joke = props => {
    return (
      <div className="Joke">
        <h3>{props.question}</h3>
        <h4>Answer: {props.answer}</h4>
        <h4>Created By: {props.created_by}</h4>
        
        <button onClick={() => props.deleteJoke(props.id)}>Delete</button>
        {/* <button onClick={() => props.updateJoke(props.currentUser.subject, changes)}>Update Joke</button> */}
      </div>
    );
  };

  function mapStateToProps(state) {
    return state.auth
  }  
  
  export default Joke;