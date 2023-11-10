const typeDefs = `
type Fridge {
    _id: ID
    name: String
    online: String
    username: String
    items: [Item]
}

type Item {
    _id: ID
    itemName: String
    itemQuantity: String
    isFrozen: String
    addDate: String
    expiryDate: String
    itemUsername: String!
    itemFridgename: String
}

type User {
    _id: ID
    fridges: [Fridge]
    items: [Item]
    username: String!
    email: String
    password: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    items: [Item]
    fridges: [Fridge]
    users: [User]
    fridgeItems(fridgeId: ID!): Fridge
    itemId(item: ID!): Item
    me: User
    user(username: String!): User
}

type Mutation {
    addFridge(name: String!, online: String, username: String!): Fridge
    updateFridge(name: String!, status: String!): Fridge
    deleteFridge(fridge: String!): Fridge
    addItem(itemName: String!, itemQuantity: String!, isFrozen: String!, expiryDate: String, itemUsername: String!, itemFridgename: String!): Item
    deleteItem(itemId: ID!): Item
    updateItem(itemId: ID!, name: String!, quantity: String!): Item
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(user: String!): User
    takeOneItem(itemId: ID!): Item 
}
`

module.exports = typeDefs;