import { options } from "../config/config.js";
import { connectDB } from "../config/dbConnection.js";

let productsDao;

switch(options.server.persistence) {
    case "mongo":
        connectDB();
        const {ProductsMongo} = await import ('./managers/productsMongo.js')
        const {productsModel} = await import ('./models/products.model.js')
        productsDao = new ProductsMongo(productsModel)
        break;
}

export {productsDao}