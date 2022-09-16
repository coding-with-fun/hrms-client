import { getOsEnv } from '../libs/env';

const env = {
    app: {
        backendURL: `${getOsEnv('REACT_APP_BACKEND_HOST')}/${getOsEnv(
            'REACT_APP_API_PREFIX'
        )}`,
    },
};

export default env;
