/**
 * Ejercicio 4 - Mario Perdiguero Barrera
 */
export function searchWord(words: string[], keyword: string): number {
    return words.indexOf(keyword);
}

export function addKeyword(words: string[], keyword: string): string[] {
    if (words.includes(keyword)) {
        return words;
    }

    return [...words, keyword];
}

export function orderAlphabetically(words: string[]): string[] {
    return words.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
}