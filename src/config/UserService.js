import RestApis from "./RestApiUrls";

const userService = {
  findbytoken: RestApis.userService + "/user/findbytoken",
  findall: RestApis.userService + "/user/findall",
};

export default userService;
