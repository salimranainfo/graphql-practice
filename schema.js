const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

// Database
const db = [
  {
    id: "1",
    name: "Product 1",
    description: "Some text",
    colors: ["Navy", "Black", "Red"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "2",
    name: "Product 2",
    description: "Some text",
    colors: ["Navy", "Black", "Red"],
    sizes: ["S", "M", "L"],
  },
];

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    colors: { type: new GraphQLList(GraphQLString) },
    sizes: { type: new GraphQLList(GraphQLString) },
  },
});

// const Order = new GraphQLObjectType({});

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve: () => {
        return db;
      },
    },
    product: {
      type: ProductType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        return db.find((product) => product.id === args.id);
      },
    },
    // orders: {
    //   type: Order,
    //   resolve: () => {
    //     // Return list of products
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
});
