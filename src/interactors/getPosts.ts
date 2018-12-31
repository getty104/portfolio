import * as getPostsQuery from "../graphql/GetPostsQuery.graphql";
import { graphQLClient } from "../tools/graphQLClient";
import { InteractorResult } from "../types/global";
import { GetPostsQuery } from "../types/graphql";

const pageSize = 5;

export const getPosts = (page: number): InteractorResult<GetPostsQuery> => {
  return new Promise(resolv =>
    graphQLClient
      .query<GetPostsQuery>({
        query: getPostsQuery,
        variables: { first: pageSize, offset: page * pageSize }
      })
      .then(result => resolv({ success: true, data: result.data }))
      .catch(errors => resolv({ success: false, errors }))
  );
};
