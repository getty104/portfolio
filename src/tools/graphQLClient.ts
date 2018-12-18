import { ApolloClient, gql } from "apollo-boost";

export const graphQLClient = new ApolloClient({
  uri: "https://expensive-shocked-elver.gigalixirapp.com/api/graph"
});

export const createQuery = (query: string) =>
  gql`
    ${query}
  `;
