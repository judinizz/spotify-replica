import axios from "axios";
import "dotenv/config";

const URL = "https://spotify-replica-6sha.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artists`);
const responseSong = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSong.data;
