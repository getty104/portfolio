import * as React from "react";
import { Link } from "react-router-dom";

import { getPost } from "../interactors/getPost";
import { blogsPath } from "../routes";
import { GetPostQuery } from "../types/graphql";

interface State {
  post: GetPostQuery["post"];
}

interface Props {
  match: {
    params: {
      id: number;
    };
  };
}

export class BlogShow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { post: null };
  }

  public componentDidMount() {
    window.scrollTo(0, 0);
    getPost(this.props.match.params.id).then(
      result =>
        result.success &&
        result.data &&
        result.data.post &&
        this.setState({ post: result.data.post })
    );
  }

  public render() {
    return (
      <div>
        {this.state.post && this.state.post.title}
        <div>
          <Link to={blogsPath()}>一覧へ</Link>
        </div>
      </div>
    );
  }
}
