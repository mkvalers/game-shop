import axios from "axios";
import type { GameOrdering } from "./types";

interface RawgNamedItem {
    name: string;
}

export interface ParentPlatform {
    id: number;
    name: string;
    slug: string;
}

export interface ParentPlatformEntry {
    platform: ParentPlatform;
}

export interface Game {
    id: number;
    slug: string;
    name: string;
    released?: string;
    background_image?: string;
    rating: number;
    metacritic?: number;
    parent_platforms?: ParentPlatformEntry[];
}

export interface FetchGamesResponse {
    count: number;
    next?: string;
    previous?: string;
    results: Game[];
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count?: number;
    image_background?: string;
}

export interface FetchGenresResponse {
    count: number;
    next?: string;
    previous?: string;
    results: Genre[];
}

interface RawgGameInfoResponse {
    id: number;
    name: string;
    description: string;
    background_image?: string;
    released?: string;
    genres?: RawgNamedItem[];
    developers?: RawgNamedItem[];
    parent_platforms?: ParentPlatformEntry[];
}

export interface GameInfo {
    id: number;
    name: string;
    image?: string;
    about: string;
    genre: string[];
    releaseDate?: string;
    developer: string[];
    parent_platforms?: ParentPlatformEntry[];
}

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

class RawgApiClient {
    apiClient = axios.create({
        baseURL: "https://api.rawg.io/api",
        params: {
            key: apiKey,
        },
    });

    getGames = (
        genreId?: number,
        searchQuery?: string,
        ordering?: GameOrdering,
    ): Promise<FetchGamesResponse> => {
        const params: { genres?: number; search?: string; ordering?: GameOrdering } = {};

        if (genreId) params.genres = genreId;
        if (searchQuery) params.search = searchQuery;
        if (ordering) params.ordering = ordering;

        return this.apiClient
            .get("/games", { params: Object.keys(params).length > 0 ? params : undefined })
            .then((response) => response.data);
    };

    getGamesByUrl = (url: string): Promise<FetchGamesResponse> =>
        this.apiClient.get<FetchGamesResponse>(url).then((response) => response.data);

    getGenres = (): Promise<FetchGenresResponse> =>
        this.apiClient.get("/genres").then((response) => response.data);

    getGameInfo = (id: number): Promise<GameInfo> =>
        this.apiClient
            .get<RawgGameInfoResponse>(`/games/${id}`)
            .then((response) => {
                const game = response.data;
                return {
                    id: game.id,
                    name: game.name,
                    image: game.background_image,
                    about: game.description,
                    genre: game.genres?.map((item) => item.name) ?? [],
                    releaseDate: game.released,
                    developer: game.developers?.map((item) => item.name) ?? [],
                    parent_platforms: game.parent_platforms,
                };
            });
}

const rawgApiClient = new RawgApiClient();

export default rawgApiClient;



