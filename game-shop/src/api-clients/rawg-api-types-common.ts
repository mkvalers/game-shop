interface RawgNamedItem {
    name: string;
}

export interface RawgGameDetailsResponse {
    id: number;
    name: string;
    description: string;
    background_image?: string;
    released?: string;
    genres?: RawgNamedItem[];
    developers?: RawgNamedItem[];
}

export interface GameDetails {
    id: number;
    image?: string;
    about: string;
    genre: string[];
    releaseDate?: string;
    developer: string[];
}