import React from "react";
import axios from 'axios';
import './styles.css'
import { baseUrl } from '../../redux/reducer';

import Jokes from '../Jokes';

class Home extends React.Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        axios.get(`${baseUrl}/jokes`)
            .then(resp => this.setState({ jokes: resp.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Jokes jokes={this.state.jokes} />
        );
    }
};

export default Home;