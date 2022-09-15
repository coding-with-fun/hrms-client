import isEmail from 'validator/lib/isEmail';

const validateSignInData = (props: propType) => {
    const { email, password } = props;
    const errors = {
        email: '',
        password: '',
    };
    let hasError = false;

    if (!email) {
        errors.email = 'Please enter email address.';
        hasError = true;
    } else if (!isEmail(email)) {
        errors.email = 'Please enter a valid email address.';
        hasError = true;
    }

    if (!password) {
        errors.password = 'Please enter password.';
        hasError = true;
    }

    return {
        hasError,
        errors,
    };
};

export default validateSignInData;

type propType = {
    email: string;
    password: string;
};
