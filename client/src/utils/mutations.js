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
  mutation addFridge($name: String!, $online: Boolean, $username: String!) {
    addFridge(name: $name, online: $online, username: $username) {
      _id
      name
      online
      username
      }
    }
`;



export const ADD_ITEM = gql`
    mutation addItem($itemName: String!, $itemQuantity: String!, $isFrozen: Boolean, $itemUsername: String!, $itemFridgename: String!) {
        addFridge(itemName: $itemName, itemQuantity: $itemQuantity, isFrozen: $isFrozen, itemUsername: $itemUsername, itemFridgename: $itemFridgename) {
            _id
            itemName
            itemQuantity
            isFrozen
            itemUsername
            itemFridgename
        }
    }
`;

export const CHANGE_ITEM_QTY = gql`
    mutation changeQty($itemId: ID!, $itemQty: String!) {
        changeQty(itemId: $itemId, itemQuantity: $itemQty) {
            _id
            itemName
            itemQuantity
        }
    }
`;