export class Product {
    name: string;
    price: number;
    quantity: number;
    id: number;
    updatedPrice: number;



    constructor(id: number, name: string, price: number, quantity: number, updatedPrice: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.updatedPrice = updatedPrice;

    }

}
