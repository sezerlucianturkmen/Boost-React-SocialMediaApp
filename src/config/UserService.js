import RestApis from "./RestApiUrls";

const userService = {
  findbytoken: RestApis.userService + "/user/findbytoken",
  findall: RestApis.userService + "/user/findall",
  findbyid: RestApis.userService + "/user/finduserbyid/",
};

export default userService;
