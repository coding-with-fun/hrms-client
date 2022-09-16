import axios from 'axios';
import env from '../../utils/env';

export const handleUserSignIn = async (payload: handleUserSignInType) => {
    try {
        const response = await axios.post(
            `${env.app.backendURL}/auth/signin`,
            payload
        );
        console.log({
            response,
        });

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
};

type handleUserSignInType = {
    email: string;
    password: string;
};
