/**
 * Ejercicio 3 - Mario Perdiguero Barrera
 */
export class Day {
    date: string;
    temperature: number;
    humidity: number;
    precipitation: number;

    constructor(date: string, temperature: number, humidity: number, precipitation: number) {
        this.date = date;
        this.temperature = temperature;
        this.humidity = humidity;
        this.precipitation = precipitation;
    }
}

export function averageTemperature(days: Day[]): number {
    return Number(([...days].reduce((total, day) => total + day.temperature, 0) / days.length).toFixed(2));
}

export function getRainyDays(days: Day[]): Day[] {
    return [...days].filter((day) => day.precipitation > 0);
}

export function getSunniestDay(days: Day[]): Day {
    return [...days].sort((a, b) => b.temperature - a.temperature)[0];
}

export function weatherReport(days: Day[]): string {
    const rainyDays = getRainyDays(days).length;
    const averageTemp = averageTemperature(days);
    const maxTemperature = getSunniestDay(days);

    return `Resumen del mes: \n Días lluviosos: ${rainyDays} \n Temperatura promedio: ${averageTemp} \n Máxima temperatura: ${maxTemperature.temperature}ºC el día ${maxTemperature.date}`;
}