import * as getPostQuery from "../graphql/GetPostQuery.graphql";
import { graphQLClient } from "../tools/graphQLClient";
import { InteractorResult } from "../types/global";
import { GetPostQuery } from "../types/graphql";

export const getPost = (id: number): InteractorResult<GetPostQuery> => {
  return new Promise(resolv =>
    graphQLClient
      .query<GetPostQuery>({
        query: getPostQuery,
        variables: { id }
      })
      .then(result => resolv({ success: true, data: result.data }))
      .catch(errors => resolv({ success: false, errors }))
  );
};
