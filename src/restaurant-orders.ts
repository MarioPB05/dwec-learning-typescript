/**
 * Ejercicio 2 - Mario Perdiguero Barrera
 */
export class Plate {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class Order {
    id: number;
    client: string;
    plates: Plate[];

    constructor(id: number, client: string, plates: Plate[]) {
        this.id = id;
        this.client = client;
        this.plates = plates;
    }
}

export class Restaurant {
    orders: Order[] = [];

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    totalSales(): number {
        return Number([...this.orders]
            .map((order: Order) => order.plates.map((plate: Plate) => plate.price))
            .flat()
            .reduce((total, price) => total + price, 0)
            .toFixed(2));
    }

    findOrdersByClient(client: string): Order[] {
        return [...this.orders].filter((order: Order) => order.client === client);
    }

    filterOrdersByPrice(minPrice: number) {
        return [...this.orders].filter((order: Order) => {
           const total = order.plates.map((plate: Plate) => plate.price).reduce((total, price) => total + price, 0);

           return total > minPrice;
        });
    }
}