import axios, { AxiosRequestConfig, HeadersDefaults } from "axios";
import { Session } from "next-auth";
import { NewRelease } from "../../interfaces/spotify";
import { generateRandomString } from "../../utils/functions";

const API_URL: string = "https://api.spotify.com";
const API_VERSION: string = "v1";

const AVAILABLE_GENRES_ENDP = "recommendations/available-genre-seeds";


const typicalHeaders = (accessToken: string): { "Authorization": string, "Accept-Encoding": string } => {
    return {
        "Authorization": `Bearer ${accessToken}`,
        "Accept-Encoding": "application/json",
    }
}


const getNewReleases = async (session: Session): Promise<NewRelease | {}> => {
    try {
        const res = await axios.get(`${API_URL}/v1/browse/new-releases`, {
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept-Encoding": "application/json",
            },
            responseType: "json",
            params: {
                country: "JP",
                limit: "15",
            }
        })
        if (res.status === 200) {
            return res.data;
        }
        return {};
    } catch (error: any) {
        const { response: { data: { error: { status, message } } } } = error;
        console.error("Problem getting new releases", message);
        return {};
    }
}

const getFeaturedPlaylists = async (session: Session) => {
    try {
        const timestamp = new Date().toISOString();
        const config: AxiosRequestConfig = {
            url: `${API_URL}/v1/browse/featured-playlists`,
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept-Encoding": "application/json",
            },
            method: "GET",
            params: {
                country: "JP",
                timestamp,
                limit: 5,
            }
        }
        const res = await axios(config);
        if (res.status === 200) {
            return res.data
        }
        console.log("Failed ")
        throw res;
    } catch (error: any) {
        const { response: { data: { error: { status, message } } } } = error;
        console.error("Problem getting featured playlists", message);
        return {};
    }
}

const getAvailableGenres = async (session: Session): Promise<SpotifyApi.AvailableGenreSeedsResponse | undefined> => {
    try {
        const config: AxiosRequestConfig = {
            url: `${API_URL}/${API_VERSION}/${AVAILABLE_GENRES_ENDP}`,
            method: "GET",
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept-Encoding": "application/json",
            },

        }
        const res = await axios(config);
        if (res.status === 200) {
            return res.data;
        }
        throw res;
    } catch (error: any) {
        const { response: { data: { error: { status, message } } } } = error;
        console.error("Problem getting available genres", message);
    }
}

const getTopArtists = async (session: Session) => {
    try {
        const ids = generateRandomString(16);
        console.log('Checking ids', ids)
        const res = await axios.get(`${API_URL}/v1/artists`, {
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept-Encoding": "application/json",
            },
            responseType: "json",
            params: {
                ids,
            }
        });

        if (res.status === 200) {
            return res.data;
        }

        return res.data
    } catch (error: any) {
        const { response: { data: { error: { status, message } } } } = error;
        console.error("Problem getting top artists", message);
        return {};

    }

}


const getSearches = async (session: Session, query: string) => {
    try {
        const config: AxiosRequestConfig = {
            url: `${API_URL}/${API_VERSION}/search`,
            method: "GET",
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept-Encoding": "application/json",
            },
            params: {
                q: `remaster%20track:${query}artist:${query}`,
                type: "track,artist",
                market: "JP",
                limit: 10,
                offset: 0,
            }
        }

        const res = await axios(config);
        if (res.status === 200) {
            console.log("Called");
            return res.data;
        }
        throw res;
    } catch (error: any) {
        const { response: { data: { error: { status, message } } } } = error;
        console.error("Problem getting top artists", message);
        return null;

    }
}

export { getNewReleases, getTopArtists, getFeaturedPlaylists, getAvailableGenres, getSearches }
