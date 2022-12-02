import RestApis from "./RestApiUrls";

const postService = {
  findall: RestApis.postService + "/post/findall",
  findallmyFollowPost: RestApis.postService + "/post/getmyfollowspost?",
  findallmyFollowPost2: RestApis.postService + "/post/getmyfollowpost",
  getMyPost: RestApis.postService + "/post/getmypost",
};

export default postService;
