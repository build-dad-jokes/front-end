import React from "react";
import './styles.css'
import SearchBar from '../SearchBar';

import { connect } from 'react-redux';
import { getJokes } from '../../redux/reducer';

class Home extends React.Component {
    componentDidMount() {
        this.props.getJokes();
    }

    render() {
        console.log(this.props.jokes);
        return (
            <div> HEY I FUNNY JOKEZ</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJokes: () => dispatch(getJokes())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);