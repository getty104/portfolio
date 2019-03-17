import * as React from "react";
import { Helmet } from "react-helmet";

const bigImageUrl = "https://www.getty104.tk/big.jpg";

interface Props {
  title?: string;
  description?: string;
  image?: string | null;
  url: string;
}

const defaultTitle = "Getty's Room";
const defaultDescription =
  "Gettyの部屋。プロダクトや経歴などを公開しています。";

export const Head = (props: Props) => (
  <Helmet>
    <meta
      property="title"
      content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    />
    <meta
      property="description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@getty104" />
    <meta name="twitter:creator" content="@getty104" />
    <meta
      property="og:type"
      content={props.url === "/" ? "website" : "article"}
    />
    <meta property="og:url" content={props.url} />
    <meta
      property="og:title"
      content={props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta property="og:image" content={props.image || bigImageUrl} />
  </Helmet>
);
