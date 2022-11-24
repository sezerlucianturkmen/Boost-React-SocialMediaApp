import RestApis  from "./RestApiUrls";

const UserService = {
    findbytoken: RestApis.userService + '/user/findbytoken',
    findall: RestApis.userService + '/user/findall',
};

export default UserService;