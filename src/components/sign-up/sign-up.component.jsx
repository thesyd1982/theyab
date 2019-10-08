import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component'
import CostumButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }


    handleSubmit = async event => {

        event.preventDefault();
        const {
            displayName,
            email,
            password,
            confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.clearForm();
        } catch (error) {
            console.error(error.message)
        }



    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    clearForm = () => {
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };
    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have account</h2>
                <span>sign up with email and password</span>

                <form className="sign-up-from" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <div className="buttons">
                        <CostumButton onClick={this.clearForm} isCancel>Cancel</CostumButton>
                        <CostumButton type='submit' onClick={this.handleSubmit}> SIGN UP</CostumButton>

                    </div>
                </form>
            </div>
        );
    }


}
export default SignUp;