import RestApis  from "./RestApiUrls";

const authService = {
    register: RestApis.authService + '/auth/register',
    login: RestApis.authService + '/auth/login',
};

export default authService;