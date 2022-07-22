import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) =>{
    return {    
        auth: state.auth.isLogged
    }
}

export const withAuthRedicrect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.auth) return <Redirect to={'/login'} />
            return (
                <Component {...this.props} />
            ) 
        }        
    }
    let connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return connectedRedirectComponent;
}

