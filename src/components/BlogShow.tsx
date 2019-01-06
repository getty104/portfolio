import * as React from "react";
import { Link } from "react-router-dom";

import { getPost } from "../interactors/getPost";
import { blogsPath } from "../routes";
import { formatDate } from "../tools/formatDate";
import { parseMarkdownText } from "../tools/parseMarkdownText";
import { executeScriptTagsById } from "../tools/scriptTagExecuter";
import { GetPostQuery } from "../types/graphql";
import { NotFound } from "./NotFound";

interface State {
  post: GetPostQuery["post"];
  isInitialized: boolean;
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
    this.state = { post: null, isInitialized: false };
  }

  public componentDidMount() {
    window.scrollTo(0, 0);
    getPost(this.props.match.params.id).then(result => {
      result.success && result.data && result.data.post
        ? this.setState({ post: result.data.post, isInitialized: true })
        : this.setState({ isInitialized: true });
      setTimeout(() => executeScriptTagsById("blog"), 100);
    });
  }

  public render() {
    if (this.state.isInitialized && !this.state.post) {
      return <NotFound />;
    } else {
      return (
        <div id="blog">
          {this.state.post && (
            <div>
              <div className="bgs-Content">
                <div className="bgs-Content_header">
                  <div className="bgs-Content_header-title">
                    <div className="bgs-Content_title-text">
                      {this.state.post.title}
                    </div>
                    <div className="bgs-Content_title-date">
                      {formatDate(this.state.post.insertedAt)}
                    </div>
                  </div>
                  {this.state.post.image && (
                    <img
                      className="bgs-Content_header-image"
                      src={this.state.post.image}
                    />
                  )}
                </div>
                <div
                  className="bgs-Content_description bgs-Markdown"
                  dangerouslySetInnerHTML={{
                    __html: parseMarkdownText(this.state.post.body)
                  }}
                />
              </div>
              <div className="bgs-Footer">
                <Link to={blogsPath()} className="bgs-Footer_column">
                  一覧へ
                </Link>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}
