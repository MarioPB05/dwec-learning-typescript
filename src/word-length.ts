export function toUpper(words: string[]): string[] {
    return [...words].map(word => word.toUpperCase());
}

export function filterByLength(words: string[], length: number): string[] {
    return [...words].filter(word => word.length > length);
}

export function orderByLength(words: string[]): string[] {
    return [...words].sort((a, b) => b.length - a.length);
}