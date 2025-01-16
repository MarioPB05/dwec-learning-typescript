/**
 * Ejercicio 1 - Mario Perdiguero Barrera
 */
export class Movie {
    title: string;
    director: string;
    year: number;
    genre: string;
    rate: number;

    constructor(title: string, director: string, year: number, genre: string, rate: number) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.rate = rate;
    }
}

export function findMoviesByGender(movies: Movie[], genre: string): Movie[] {
    return [...movies].filter(movie => movie.genre === genre);
}

export function topThreeMovies(movies: Movie[],): Movie[] {
    return [...movies].sort((a, b) => b.rate - a.rate).slice(0, 3);
}

export function averageRate(movies: Movie[],): number {
    return [...movies].reduce((acc, movie) => acc + movie.rate, 0) / movies.length;
}

export function updateMovieRate(movies: Movie[], title: string, newRate: number): Movie[] {
    return [...movies].map(movie => movie.title === title ? { ...movie, rate: newRate } : movie);
}