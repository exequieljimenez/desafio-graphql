import mongoose from "mongoose";
import { options } from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(options.mongo.url);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log('Hubo un error al conectarse a la base de datos');
    }
}

export {connectDB}