import axios from "axios";
import { Session } from "next-auth";
import { NewRelease } from "../../interfaces/spotify";

const API_URL: string = "https://api.spotify.com";

const getNewReleases = async (session: Session): Promise<NewRelease | {}> => {
    console.log("Check new releases session", session)
    let a: NewRelease;
    try {
        const res = await axios.get(`${API_URL}/v1/browse/new-releases`, {
            headers: {
                "Authorization": `Bearer ${session.accessToken}`,
                "Accept-Encoding": "application/json",
            },
            responseType: "json",
            params: {
                country: "JP",
                limit: "5",
            }
        })
        if (res.status === 200) {
            console.log('Check res', res.data);
            return res.data;
        }
        return {};
    } catch (error: any) {
        const { response: { data: { error: { status, message } } } } = error;
        console.error("Problem getting new releases", message);
        return {};
    }
}

export { getNewReleases }