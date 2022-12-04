import RestApis from "./RestApiUrls";

const followService = {
  findfollows: RestApis.userService + "/follow/findfollows",
  createfollows: RestApis.userService + "/follow/create",
  deletefollows: RestApis.userService + "/follow/delete",
  findfollowsbytoken: RestApis.userService + "/follow/findfollowsbytoken",
};

export default followService;
