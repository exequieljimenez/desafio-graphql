import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import { rootGraphqlService } from "../repository/index.js";

const schemaGraphql = buildSchema(`
    type Product {
        _id: String,
        nombre: String,
        precio: Int,
        imagen: String
    }

    input ProductInput{
        nombre: String,
        precio: Int,
        imagen: String
    }

    type Query {
        getProducts: [Product]
        getProductById(id: String): Product
    }

    type Mutation {
        addProduct(product: ProductInput): Product
        deleteProduct(id:String): String
        updateProduct(id: String, product: ProductInput): Product
    }
`);

const graphqlController = () => {
    return graphqlHTTP({
        schema: schemaGraphql,
        rootValue: rootGraphqlService,
        graphiql: true
    })
}

export {graphqlController}