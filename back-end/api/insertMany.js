import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currObj, index) => {
  const newAtistObj = { ...currObj };
  delete newAtistObj.id;
  return newAtistObj;
});

const newSongsArray = songsArray.map((currObj, index) => {
  const newSongObj = { ...currObj };
  delete newSongObj.id;
  return newSongObj;
});

const insertSongs = await db.collection("songs").insertMany(newSongsArray);
const insertArtist = await db.collection("artists").insertMany(newArtistArray);

console.log(insertSongs);
console.log(insertArtist);
