import axios from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

class RawgApiClient {
    apiClient = axios.create({
        baseURL: "https://api.rawg.io/api",
        params: {
            key: apiKey,
        },
    });

    getGames = (): Promise<any> => {
        return this.apiClient.get("/games")
            .then((response) => response.data)
            .catch((error) => {
                console.error("Error fetching games:", error);
                throw error;
            });
    }

}

const rawgApiClient = new RawgApiClient();

export default rawgApiClient;



