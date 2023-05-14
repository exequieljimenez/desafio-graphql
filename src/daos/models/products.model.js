import mongoose from "mongoose";

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    imagen: String
});

const productsModel = mongoose.model(productsCollection, productsSchema);

export {productsModel}