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
    item(_id: $itemId) {
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
    userItems(username: $user) {
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
    userFridges(username: $user) {
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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
        expiryDate
        itemFridgename
      }
    }
  }
`;