import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://ju:vJsr15182830!@clusterspotifyreplica.xkwgw.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSpotifyReplica";

const client = new MongoClient(URI);

export const db = client.db("spotify");
