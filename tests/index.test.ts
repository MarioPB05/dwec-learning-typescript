import {Movie, findMoviesByGender, topThreeMovies, averageRate, updateMovieRate} from '../src/movie-catalog';
import { Plate, Order, Restaurant } from '../src/restaurant-orders';
import { Day, averageTemperature, getRainyDays, getSunniestDay, weatherReport } from "../src/meteorological-data";
import { addKeyword, orderAlphabetically, searchWord } from "../src/keyword-library";
import { Client, addClient, searchClientById, totalBalance } from "../src/customer-bank";
import { Animal, Zoo } from "../src/virtual-zoo";
import { Product, applyDiscount, averagePriceFilteredByCategory, getProductsFilteredByPrice } from "../src/product-list";
import {filterByLength, orderByLength, toUpper} from "../src/word-length";

describe('Ejercicio 1️⃣ | Catálogo de Películas', () => {
    const movies: Movie[] = [
        {
            title: 'The Shawshank Redemption',
            director: 'Frank Darabont',
            year: 1994,
            genre: 'Drama',
            rate: 10
        },
        {
            title: 'The Godfather',
            director: 'Francis Ford Coppola',
            year: 1972,
            genre: 'Crime',
            rate: 6
        },
        {
            title: 'The Dark Knight',
            director: 'Christopher Nolan',
            year: 2008,
            genre: 'Action',
            rate: 9
        },
        {
            title: '12 Angry',
            director: 'Sidney Lumet',
            year: 1957,
            genre: 'Drama',
            rate: 8
        }
    ];

    it('Debe devolver las películas por género', () => {
        const result = findMoviesByGender(movies, 'Drama');
        expect(result).toEqual([movies[0], movies[3]]);
    });

    it('Debe volver top tres películas', () => {
        const result = topThreeMovies(movies);
        expect(result).toEqual([movies[0], movies[2], movies[3]]);
    });

    it('Debe devolver la puntuación media de las películas', () => {
        const result = averageRate(movies);
        expect(result).toEqual(8.25);
    });

    it('Debe actualizar la puntuación de una película', () => {
        const updatedMovies = updateMovieRate(movies, 'The Godfather', 9);
        expect(updatedMovies).toEqual([
            movies[0],
            { ...movies[1], rate: 9 },
            movies[2],
            movies[3]
        ]);
    });
});

describe('Ejercicio 2️⃣ | Gestión de pedidos en un restaurante', () => {
    const plate1 = new Plate(1, 'Macarrones con queso', 4.55);
    const plate2 = new Plate(2, 'Pizza Carbonara', 7.80);
    const plate3 = new Plate(3, 'Jamón Ibérico y Queso Curado', 25);

    const restaurant = new Restaurant();

    const order = new Order(1, "Mario", [plate1, plate3]);
    const order2 = new Order(2, "Pepe", [plate2, plate2]);
    const order3 = new Order(3, "Mario", [plate3, plate3]);

    it('Debe agregar un pedido', () => {
        restaurant.addOrder(order);

        expect(restaurant.orders).toContain(order);

        restaurant.addOrder(order2);
        restaurant.addOrder(order3);
    });

    it('Debe calcular el total de ventas del restaurante', () => {
       const total = restaurant.totalSales();
       expect(total).toEqual(95.15);
    });

    it('Debe buscar todos los pedidos del cliente "Mario"', () => {
        const orders = restaurant.findOrdersByClient('Mario');
        expect(orders).toEqual([order, order3]);
    });

    it('Debe filtrar los pedidos cuyo importe sea mayor a 16,99 euros', () => {
       const orders = restaurant.filterOrdersByPrice(16.99);
       expect(orders).toEqual([order, order3]);
    });
});

describe('Ejercicio 3️⃣ | Análisis de datos meteorológicos', () => {
    const days: Day[] = [
        new Day('01/01/2025', 12, 75, 0),
        new Day('02/01/2025', 8, 40, 15),
        new Day('03/01/2025', 20, 80, 2.45),
        new Day('04/01/2024', 17.5, 50, 0)
    ];

    it('Debe calcular la temperatura promedio de los días', () => {
       const average = averageTemperature(days);
       expect(average).toEqual(14.38); // Exactamente 14.375
    });

    it('Debe filtrar los días que ha llovido', () => {
       const rainyDays = getRainyDays(days);
       expect(rainyDays).toEqual([days[1], days[2]]);
    });

    it('Debe encontrar el día con la temperatura más alta', () => {
       const day = getSunniestDay(days);
       expect(day).toEqual(days[2]);
    });

    it('Debe devolver un resumen en formato de string', () => {
        const result = `Resumen del mes: \n Días lluviosos: 2 \n Temperatura promedio: 14.38 \n Máxima temperatura: 20ºC el día 03/01/2025`;
        expect(weatherReport(days)).toEqual(result);
    });
});

describe('Ejercicio 4️⃣ | Biblioteca de palabras clave', () => {
    const words = [
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'Vue',
        'Svelte'
    ];

    it('Debe buscar una palabra clave dentro del array y devolver su posición', () => {
        const result = searchWord(words, 'React');
        expect(result).toEqual(2);

        const result2 = searchWord(words, 'Python');
        expect(result2).toEqual(-1);
    });

    it('Debe añadir nuevas palabras clave evitando los duplicados', () => {
        const result = addKeyword(words, 'React');

        expect(result).toEqual(words);

        const result2 = addKeyword(words, 'Python');

        expect(result2).toEqual([...words, 'Python']);
    });

    it('Debe ordenar las palabras alfabéticamente', () => {
        const result = orderAlphabetically(words);
        expect(result).toEqual(['Angular', 'JavaScript', 'React', 'Svelte', 'TypeScript', 'Vue']);
    });
});

describe('Ejercicio 5️⃣ | Banco de clientes', () => {
    const clients: Client[] = [
        new Client(1, 'Mario', 100),
        new Client(2, 'Pepe', 200),
        new Client(3, 'Juan', 300)
    ];

    clients[0].deposit(100);
    clients[1].withdraw(100);

    it('Debe agregar un nuevo cliente', () => {
        const newClient = new Client(4, 'Laura', 400);
        const result = addClient(clients, newClient);

        expect(result).toEqual([...clients, newClient]);
    });

    it('Debe buscar un cliente por id', () => {
        const result = searchClientById(clients, 2);
        expect(result).toEqual(clients[1]);

        const result2 = searchClientById(clients, 6);
        expect(result2).toBeUndefined();
    });

    it('Debe calcular el saldo total del banco', () => {
        const total = totalBalance(clients);
        expect(total).toEqual(600);
    });
});

describe('Ejercicio 6️⃣ | Zoológico virtual', () => {
    const animals = [
        new Animal('Elefante', 'Dumbo', 5, 'Savanna'),
        new Animal('Tigre', 'Shere Khan', 3, 'Jungla'),
        new Animal('Oso', 'Baloo', 10, 'Montaña')
    ];

    const zoo = new Zoo(animals);

    it('Debe agregar un nuevo animal', () => {
        const animal = new Animal('Cebra', 'Marty', 8, 'Savanna');

        animal.increaseAge();

        animal.setHabitat('Savanna');

        zoo.addAnimal(animal);

        expect(zoo.animals).toContain(animal);
    });

    it('Debe buscar animales por especie', () => {
        const result = zoo.searchAnimalsBySpecies('Tigre');

        expect(result).toEqual([animals[1]]);
    });

    it('Debe obtener los animales de un hábitat específico', () => {
        const result = zoo.getAnimalsByHabitat('Savanna');

        expect(result).toEqual([animals[0], animals[3]]);
    });
});

describe('Ejercicio 7️⃣ | Transformación de un listado de productos', () => {
    const products = [
        new Product("Manzana", 5, "alimentos"),
        new Product("Cereal", 12, "alimentos"),
        new Product("Detergente", 15, "limpieza"),
        new Product("Shampoo", 8, "higiene"),
    ];

    it('Debe obtener un array con los nombres de los productos cuyo precio sea superior a 10', () => {
        const result = getProductsFilteredByPrice(products);
        expect(result).toEqual(["Cereal", "Detergente"]);
    });

    it('Debe calcular el precio promedio de los productos de la categoría "alimentos"', () => {
        const result = averagePriceFilteredByCategory(products);
        expect(result).toEqual(8.5);
    });

    it('Debe crear un nuevo array con el descuento del 10% aplicado a todos los productos', () => {
        const result = applyDiscount(products);
        expect(result).toEqual([
            { name: "Manzana", price: 4.5, category: "alimentos" },
            { name: "Cereal", price: 10.8, category: "alimentos" },
            { name: "Detergente", price: 13.5, category: "limpieza" },
            { name: "Shampoo", price: 7.2, category: "higiene" }
        ]);
    });
});

describe('Ejercicio 8️⃣ | Clasificación de palabras por longitud', () => {
   const words = ["manzana", "pera", "melon", "plátano", "kiwi", "fresa"];

   it('Debe poner las palabras en mayúsculas', () => {
       const result = toUpper(words);
       expect(result).toEqual(["MANZANA", "PERA", "MELON", "PLÁTANO", "KIWI", "FRESA"]);
   });

    it('Debe filtrar las palabras por longitud', () => {
         const result = filterByLength(words, 5);
         expect(result).toEqual(["manzana", "plátano"]);
    });

    it('Debe ordenar las palabras por longitud', () => {
        const result = orderByLength(words);
        console.log(result);
        expect(result).toEqual(["manzana", "plátano", "melon", "fresa", "pera", "kiwi"]);
    });
});