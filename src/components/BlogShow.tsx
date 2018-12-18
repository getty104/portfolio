import * as React from "react";
import { Link } from "react-router-dom";
import { blogsPath } from "../routes";

export class BlogShow extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <div>
        <div>
          <Link to={blogsPath()}>一覧へ</Link>
        </div>
      </div>
    );
  }
}
