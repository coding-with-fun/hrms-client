import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import React, { useState } from 'react';
import './styles.scss';
import validateSignInData from './validateSignInData';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [userDetails, setUserDetails] = useState(defaultUserDetails);
    const [formErrors, setFormErrors] =
        useState<formErrorsType>(defaultFormError);

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUserDetails((prevData) => {
            return {
                ...prevData,
                [e.target.id]: e.target.value,
            };
        });
    };

    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { hasError, errors } = validateSignInData(userDetails);

        if (hasError) {
            setFormErrors(errors);
        } else {
            console.log({
                userDetails,
            });

            setUserDetails(defaultUserDetails);
            setFormErrors(defaultFormError);
        }
    };

    return (
        <div className="signIn_container">
            <p className="form_heading">Sign In</p>

            <form className="form_container" onSubmit={handleFormSubmission}>
                <div className="form_input">
                    <FormControl label="Email" error={formErrors.email}>
                        <Input
                            id="email"
                            value={userDetails.email}
                            onChange={handleFormChange}
                            error={Boolean(formErrors.email)}
                            autoFocus
                        />
                    </FormControl>
                </div>

                <div className="form_input">
                    <FormControl label="Password" error={formErrors.password}>
                        <Input
                            id="password"
                            value={userDetails.password}
                            onChange={handleFormChange}
                            type="password"
                            error={Boolean(formErrors.password)}
                        />
                    </FormControl>
                </div>

                <Button type="submit" className="submit_button">
                    Sign In
                </Button>
            </form>

            <div className="signup_route">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default SignIn;

const defaultUserDetails = {
    email: '',
    password: '',
};

const defaultFormError = {
    email: '',
    password: '',
};

type formErrorsType = {
    email: string;
    password: string;
};
