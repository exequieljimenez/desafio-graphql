import { productsDao } from "../daos/factory.js";
import { ProductRepository } from "./product.repository.js";

const rootGraphqlService = new ProductRepository(productsDao)

export {rootGraphqlService}