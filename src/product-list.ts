export class Product {
    name: string;
    price: number;
    category: string;

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

export function getProductsFilteredByPrice(products: Product[]): String[] {
    return [...products].filter(product => product.price > 10).map(product => product.name);
}

export function averagePriceFilteredByCategory(products: Product[]): number {
    const filtered = [...products].filter(product => product.category === "alimentos");
    return filtered.reduce((acc, product) => acc + product.price, 0) / filtered.length;
}

export function applyDiscount(products: Product[]): Product[] {
    return [...products].map(product => ({ ...product, price: product.price - (product.price * 0.1) }));
}