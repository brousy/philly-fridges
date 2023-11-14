import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FRIDGE = gql`
  mutation addFridge($name: String!, $online: String, $username: String!) {
    addFridge(name: $name, online: $online, username: $username) {
      _id
      name
      online
      username
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($itemName: String!, $itemQuantity: Int!, $isFrozen: String!, $expiryDate: String, $itemUsername: String!, $itemFridgename: String!) {
    addItem(itemName: $itemName, itemQuantity: $itemQuantity, isFrozen: $isFrozen, expiryDate: $expiryDate, itemUsername: $itemUsername, itemFridgename: $itemFridgename) {
      _id
      itemName
      itemQuantity
      isFrozen
      itemUsername
      itemFridgename
    }
  }
`;

export const TAKE_ONE_ITEM = gql`
  mutation takeOneItem($itemId: ID!) {
    takeOneItem(itemId: $itemId) {
      _id
      itemName
      itemQuantity
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation updateItem($itemId: ID!, $name: String! $quantity: Int!) {
    updateItem(itemId: $itemId, name: $name, quantity: $quantity) {
      _id
      itemName
      itemQuantity
    }
  }
`;
