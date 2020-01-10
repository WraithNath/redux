import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    render = () => {
        console.log(this.props.user);
        return <div>User Header {this.props.userId}</div>;
    }

    componentDidMount = () => {
        this.props.fetchUser(this.props.userId);
    }
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);