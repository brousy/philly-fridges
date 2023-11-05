import { gql } from "@apollo/client";

export const QUERY_FRIDGES = gql`
  query getfridges{
    fridges {
      _id
      name
      online
      username
    }
  }`