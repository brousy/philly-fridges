import { gql } from "@apollo/client";

export const QUERY_FRIDGES = gql`
  query getFridges{
    fridges {
      _id
      name
      online
      username
    }
  }
`;

export const QUERY_FRIDGE_ITEMS = gql`
  query getFridgeItems($fridgeId: ID!) {
    fridgeItems(fridgeId: $fridgeId) {
      _id
      name
      items {
        _id
        itemName
        itemQuantity
        addDate
        expiryDate
        itemUsername
        itemFridgename
      }
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query getSingleItem($itemId: ID!) {
    thought(_id: $itemId) {
      _id
      itemName
      itemQuantity
      addDate
      expiryDate
      itemUsername
      itemFridgename
    }
  }
`;

export const QUERY_USER_ITEMS = gql`
  query getUserItems($user: String!) {
    user(username: $user) {
      _id
      username
      items {
        _id
        itemName
        itemQuantity
        expiryDate
      }
    }
  }
`;

export const QUERY_USER_FRIDGES = gql`
  query getUserFridges($user: String!) {
    user(username: $user) {
      _id
      username
      fridges {
        _id
        name
        online
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      fridges {
        _id
        name
        online
        username
      }
      items {
        _id
        itemName
        itemQuantity
        itemUsername
        itemFridgename
      }
    }
  }
`;