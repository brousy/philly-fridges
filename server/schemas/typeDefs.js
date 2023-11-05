const typeDefs = `
type Fridge {
    _id: ID
    name: String
    online: Boolean
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
    userFridges(user: String!): User
    userItems(user: String!): User
    fridgeItems(fridge: String!): Fridge
    itemId(item: ID!): Item
    me: User
}

type Mutation {
    addFridge(name: String!, online: String!, username: String!): Fridge
    updateFridge(name: String!, status: Boolean!): Fridge
    deleteFridge(fridge: String!): Fridge
    addItem(itemName: String!, itemQuantity: String!, isFrozen: Boolean!, itemUsername: String!, itemFridgename: String!): Item
    deleteItem(itemId: ID!): Item
    updateItem(itemId: ID!, name: String!, quantity: String!): Item
    addUser(username: String!, email: String!, password: String!): User
    login(username: String!, password: String!): Auth
    deleteUser(user: String!): User
}
`

module.exports = typeDefs;