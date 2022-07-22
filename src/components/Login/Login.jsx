import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators';
import { Input, createField } from './../Common/FormsControls/FormsControls';
import { login } from '../../redux/auth_reducer';
import { connect } from 'react-redux';
import classes from './../Common/FormsControls/FormsControls.module.css';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [required], Input, { type: "checkbox" }, "rememberMe")}        
            <div className={classes.formSummoryError}>
                {error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isLogged) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}
export default connect(mapStateToProps, { login })(Login);
