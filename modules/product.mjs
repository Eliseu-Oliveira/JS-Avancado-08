export class Product {
    #id;
    constructor(id, name) {
        this.#id = id;
        this.name = name;
    }
}

class Order {
    #id;
    created = new Date();
    #products = [];
    constructor(created) {
        this.created = created;
    }

    addProduct(productCode) {
        if (productCode instanceof Product) {
            this.#products.push(productCode);
        } else {
            throw new Error('Não é um produto válido!')
        }
    }

    calculateShipping() {
        throw new Error('Metodo não implementado');
    }
}

// ordem1.calculateShipping(); // Retorno de erro

export default Order;