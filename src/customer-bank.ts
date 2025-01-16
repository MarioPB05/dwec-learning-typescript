/**
 * Ejercicio 5 - Mario Perdiguero Barrera
 */
export class Client {
    id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error('No hay suficiente saldo');
        }

        this.balance -= amount;
    }

    status(): string {
        return `Cliente: ${this.name} | Saldo: ${this.balance}€`;
    }
}

export function addClient(clients: Client[], client: Client): Client[] {
    if (clients.find(c => c.id === client.id)) {
        return clients;
    }

    return [...clients, client];
}

export function searchClientById(clients: Client[], id: number): Client | undefined {
    return clients.find(c => c.id === id);
}

export function totalBalance(clients: Client[]): number {
    return clients.reduce((acc, c) => acc + c.balance, 0);
}