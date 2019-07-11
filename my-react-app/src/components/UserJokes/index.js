import * as React from 'react';
import { connect } from 'react-redux';
import { getPrivateJokes } from "../../redux/reducer";

import { Jokes } from "../Jokes";

class UserJokes extends React.Component {
    componentDidMount() {
        this.props.getPrivateJokes();
    }

    renderJokes = () => {
        const { privateJokes } = this.props;
        if (!privateJokes) {
            return null;
        }
        
        return <Jokes jokes={privateJokes.jokes} />
    }

    render() {
        return (
            <div>
                {this.renderJokes()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        privateJokes: state.privateJokes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPrivateJokes: () => dispatch(getPrivateJokes())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserJokes);