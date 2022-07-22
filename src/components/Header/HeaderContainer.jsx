import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth_reducer';

class HeaderContainer extends React.Component { 
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        authStatus: state.auth.isLogged,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer)