const server = require("express")();
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema.js");

const PORT = process.env.PORT || 4000;

server.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

server.listen(PORT, () => console.log("Server started at : " + PORT));
