import RestApis from "./RestApiUrls";

const followService = {
  findfollows: RestApis.userService + "/follow/findfollows",
  findfollowsbytoken: RestApis.userService + "/follow/findfollowsbytoken",
};

export default followService;
