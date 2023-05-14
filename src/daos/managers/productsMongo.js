class ProductsMongo {
    constructor(model) {
        this.model = model;
    }

    async getProducts() {
        try {
            const products = await this.model.find();
            return products;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getProductById(id) {
        try {
            const product = await this.model.findById(id)
            if(!product) {
                throw new Error('No se encontró el producto');
            } else {
                return product
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async addProduct(product) {
        try {
            const productSaved = await this.model.create(product);
            return productSaved
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteProduct(id) {
        try {
            const deletedProduct = await this.model.findByIdAndDelete(id);
            if(!deletedProduct) {
                throw new Error('No se puede borrar un producto inexistente')
            }
            return "Producto borrado"
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateProduct(id, product) {
        try {
            const updatedProduct = await this.model.updateOne({id: id}, {$set: product})
            return updatedProduct
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export {ProductsMongo}