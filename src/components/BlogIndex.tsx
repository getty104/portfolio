import * as React from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../interactors/getPosts";
import { rootPath } from "../routes";
import { GetPostsQuery } from "../types/graphql";

interface State {
  posts: GetPostsQuery["posts"];
}

export class BlogIndex extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { posts: [] };
  }

  public componentDidMount() {
    window.scrollTo(0, 0);
    getPosts().then(
      result =>
        result.success &&
        result.data &&
        result.data.posts &&
        this.setState({ posts: result.data.posts })
    );
  }

  public render() {
    return (
      <div>
        {this.state.posts &&
          this.state.posts.map(
            (post, index) => post && <div key={index}>{post.title}</div>
          )}
        <div>
          <Link to={rootPath()}>トップ</Link>
        </div>
      </div>
    );
  }
}
