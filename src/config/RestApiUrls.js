const authPort = '8090';
const userPort = '8092';
const postPort = '8093';
const version = '/api/v1';

const RestApis = {
    authService: 'http://localhost:' + authPort + version,
    userService: 'http://localhost:' + userPort + version,
};

export default RestApis;