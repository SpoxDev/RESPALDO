import Home from "./home.controller";
import Contact from "./contact.controller";
import Post from "./post.controller";
import notFound from "./notfound.controller";
import TestElements from "./testElements.controller";

const PAGES = {
  home: Home,
  contact: Contact,
  post: Post,
  test: TestElements,
  notFound: notFound,
};
export { PAGES };
