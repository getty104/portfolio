/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostQuery
// ====================================================

export interface GetPostQuery_post {
  __typename: "Post";
  title: string;
  body: string;
  insertedAt: any;
  image: string | null;
}

export interface GetPostQuery {
  /**
   * Get a post of the blog
   */
  post: GetPostQuery_post | null;
}

export interface GetPostQueryVariables {
  id: any;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostsQuery
// ====================================================

export interface GetPostsQuery_posts_edges_node {
  __typename: "Post";
  id: any;
  title: string;
  insertedAt: any;
}

export interface GetPostsQuery_posts_edges {
  __typename: "PostEdge";
  /**
   * The item at the end of the edge
   */
  node: GetPostsQuery_posts_edges_node | null;
}

export interface GetPostsQuery_posts_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
}

export interface GetPostsQuery_posts {
  __typename: "PostConnection";
  edges: (GetPostsQuery_posts_edges | null)[] | null;
  pageInfo: GetPostsQuery_posts_pageInfo;
}

export interface GetPostsQuery {
  /**
   * Get all posts
   */
  posts: GetPostsQuery_posts | null;
}

export interface GetPostsQueryVariables {
  first: number;
  offset?: number | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
