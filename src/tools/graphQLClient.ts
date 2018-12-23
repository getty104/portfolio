import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api/graph"
      : "https://expensive-shocked-elver.gigalixirapp.com/api/graph"
});

const cache = new InMemoryCache();

export const graphQLClient = new ApolloClient({
  link: httpLink,
  cache
});
