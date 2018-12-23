import * as React from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../interactors/getPosts";
import { blogPath, contactPath, rootPath, selfIntroPath } from "../routes";
import { formatDate } from "../tools/formatDate";
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
        <div className="bgi-Content">
          <div className="bgi-Content_title">ブログ</div>
          <div className="bgi-Content_bar" />
          <div className="bgi-Content_items">
            {this.state.posts &&
              this.state.posts.map(
                (post, index) =>
                  post && (
                    <div className="bgi-Content_item" key={index}>
                      <Link
                        to={blogPath({ id: post.id })}
                        className="bgi-Content_item-title"
                      >
                        {post.title}
                      </Link>
                      <div className="bgi-Content_item-date">
                        {formatDate(post.insertedAt)}
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="bgi-Footer">
          <Link to={contactPath()} className="bgi-Footer_column">
            コンタクト
          </Link>
          <Link to={rootPath()} className="bgi-Footer_column">
            トップ
          </Link>
          <Link to={selfIntroPath()} className="bgi-Footer_column">
            自己紹介
          </Link>
        </div>
      </div>
    );
  }
}
