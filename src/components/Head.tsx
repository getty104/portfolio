import * as React from "react";
import { Helmet } from "react-helmet";

import bigImageUrl from "../styles/images/big.jpg";

interface Props {
  title?: string;
  description?: string;
  image?: string | null;
  url: string;
}

const defaultTitle = "Getty's Room";
const defaultDescription =
  "Gettyの部屋。プロダクトや経歴などを公開しています。";

export class Head extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Helmet>
        <meta property="title" content={this.props.title || defaultTitle} />
        <meta
          property="description"
          content={this.props.description || defaultDescription}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getty104" />
        <meta name="twitter:creator" content="@getty104" />
        <meta
          property="og:type"
          content={this.props.url === "/" ? "website" : "article"}
        />
        <meta property="og:url" content={this.props.url} />
        <meta property="og:title" content={this.props.title || defaultTitle} />
        <meta
          property="og:description"
          content={this.props.description || defaultDescription}
        />
        <meta property="og:image" content={this.props.image || bigImageUrl} />
      </Helmet>
    );
  }
}
