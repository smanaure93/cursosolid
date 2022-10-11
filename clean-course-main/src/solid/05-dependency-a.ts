import { PostService } from "./05-dependency-b";
import { JsonDatabaseService, WebApiService } from "./05-dependency-c";

// Main
(async () => {
  //   const postProvider = new JsonDatabaseService();
  const postProvider = new WebApiService();

  const postService = new PostService(postProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
