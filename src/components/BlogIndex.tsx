import { parse } from "query-string";
import * as React from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../interactors/getPosts";
import { blogPath, blogsPath } from "../routes";
import { formatDate } from "../tools/formatDate";
import { GetPostsQuery } from "../types/graphql";
import { Head } from "./Head";

interface State {
  posts: GetPostsQuery["posts"];
  currentPage: number;
}

interface Props {
  location: {
    search: string;
  };
}

export class BlogIndex extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { posts: null, currentPage: 0 };
    this.setPosts = this.setPosts.bind(this);
  }

  public componentDidMount() {
    window.scrollTo(0, 0);
    const page = parse(this.props.location.search).page;
    page
      ? this.setPosts(parseInt(page instanceof Array ? page[0] : page, 10))
      : this.setPosts(0);
  }

  public render() {
    return (
      <div>
        <Head
          title={"ブログ"}
          description={"Gettyのブログ"}
          url={blogsPath()}
        />
        <div className="bgi-Content">
          <div className="bgi-Content_title">ブログ</div>
          <div className="bgi-Content_bar" />
          <div className="bgi-Content_items">
            {this.state.posts &&
              this.state.posts.edges &&
              this.state.posts.edges.map(
                (post, index) =>
                  post &&
                  post.node && (
                    <div className="bgi-Content_item" key={index}>
                      <Link
                        to={blogPath({ id: post.node.id })}
                        className="bgi-Content_item-title"
                      >
                        {post.node.title}
                      </Link>
                      <div className="bgi-Content_item-date">
                        {formatDate(post.node.insertedAt)}
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
        <div className="bgi-Footer">
          {this.state.posts && this.state.posts.pageInfo.hasPreviousPage && (
            <Link
              className="bgi-Footer_column"
              to={{
                pathname: blogsPath(),
                search: `?page=${this.state.currentPage - 1}`
              }}
              onClick={() => this.setPosts(this.state.currentPage - 1)}
            >
              前のページ
            </Link>
          )}
          {this.state.posts && this.state.posts.pageInfo.hasNextPage && (
            <Link
              className="bgi-Footer_column"
              to={{
                pathname: blogsPath(),
                search: `?page=${this.state.currentPage + 1}`
              }}
              onClick={() => this.setPosts(this.state.currentPage + 1)}
            >
              次のページ
            </Link>
          )}
        </div>
      </div>
    );
  }

  private setPosts(page: number) {
    getPosts(page).then(
      result =>
        result.success &&
        result.data &&
        result.data.posts &&
        this.setState({ posts: result.data.posts, currentPage: page })
    );
  }
}
