import * as getPostsQuery from "../graphql/GetPostsQuery.graphql";
import { graphQLClient } from "../tools/graphQLClient";
import { InteractorResult } from "../types/global";
import { GetPostsQuery } from "../types/graphql";

export const getPosts = (): InteractorResult<GetPostsQuery> => {
  return new Promise(resolv =>
    graphQLClient
      .query<GetPostsQuery>({
        query: getPostsQuery
      })
      .then(result => resolv({ success: true, data: result.data }))
      .catch(errors => resolv({ success: false, errors }))
  );
};
