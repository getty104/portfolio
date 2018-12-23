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
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostsQuery
// ====================================================

export interface GetPostsQuery_posts {
  __typename: "Post";
  id: string;
  title: string;
  insertedAt: any;
}

export interface GetPostsQuery {
  /**
   * Get all posts
   */
  posts: (GetPostsQuery_posts | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
