import RestApis  from "./RestApiUrls";

const authService = {
    register: RestApis.authService + '/auth/register',
};

export default authService;