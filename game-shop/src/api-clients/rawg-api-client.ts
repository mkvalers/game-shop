import axios from "axios";
import type { GameDetails, RawgGameDetailsResponse } from "./rawg-api-types-common";
import type { FetchGenresResponse } from "./hooks/useGenres";
import type { FetchGamesResponse } from "./hooks/useGames";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

class RawgApiClient {
    apiClient = axios.create({
        baseURL: "https://api.rawg.io/api",
        params: {
            key: apiKey,
        },
    });

    getGames = (genreId?: number): Promise<FetchGamesResponse> => {
        return this.apiClient
            .get("/games", {
                params: genreId ? { genres: genreId } : undefined,
            })
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching games:", error);
                throw error;
            });
    };

    genGenres = (): Promise<FetchGenresResponse> => {
        return this.apiClient
            .get("/genres")
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching genres:", error);
                throw error;
            });
    };

    getGameDetails = (id: number): Promise<GameDetails> => {
        return this.apiClient
            .get<RawgGameDetailsResponse>(`/games/${id}`)
            .then((response) => {
                const game = response.data;

                return {
                    id: game.id,
                    image: game.background_image,
                    about: game.description,
                    genre: game.genres?.map((item) => item.name) ?? [],
                    releaseDate: game.released,
                    developer: game.developers?.map((item) => item.name) ?? [],
                };
            })
            .catch((error) => {
                console.error("Error fetching game details:", error);
                throw error;
            });
    };

}

const rawgApiClient = new RawgApiClient();

export default rawgApiClient;



