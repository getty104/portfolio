import * as React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { rootPath } from "../routes";

export class BlogIndex extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <div>
        <Query query={"query { posts {title}}"}>
          {({ data, loading, error }) => {
            if (error) {
              return <div>Error</div>;
            }

            if (loading) {
              return <div>Loading</div>;
            }

            const { posts } = data;

            // tslint:disable-next-line:jsx-key
            return posts.map(post => <div>{post.title}</div>);
          }}
        </Query>
        <div>
          <Link to={rootPath()}>トップ</Link>
        </div>
      </div>
    );
  }
}
