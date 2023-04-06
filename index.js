import 'express-async-errors';
import 'dotenv/config'
import express from 'express';
import morgan from 'morgan';
import { find_lyrics } from "@brandond/findthelyrics";
// import scraper from "azlyrics-scraper";
// import azlyrics from 'js-azlyrics';


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/', express.static('public'));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
});


const lyrics = await find_lyrics("nmixx Young, Dumb, Stupid");
if (lyrics instanceof Error) {
    console.error(lyrics);
} else {
    console.log(lyrics);
}

// optional, used for your own CORS proxy endpoint
// const options = {
//   searchEndpoint: '/azlyricssearch',
//   mainEndpoint: '/azlyrics'
// };

// azlyrics.get('sugar rush ride', options).then((song) => {
//    console.log(`Lyrics for ${song.song} by ${song.artist}:\n${song.lyrics}`);
// });

 
/* <> Required
 * [] Optional
 */
// scraper.search().then(result => {
//     console.log(result);
// }).catch(error => {
//     // Error handling here
// });
 
// scraper.getLyric('sugar rush ride').then(result => {
//     console.log(result.join(""));
// }).catch(error => {
//     // Error handling here
// });
 
// scraper.getLyricFromLink(<URL>).then(result => {
//     console.log(result.join(""));
// }).catch(error => {
//     // Error handling here
// });
 
// scraper.hotSongs().then(result => {
//     console.log(result.join(""));
// }).catch(error => {
//     // Error handling here
// });
 
// scraper.randomArtist([First Letter/Number]).then(result => {
//     console.log(result);
// }).catch(error => {
//     // Error handling here
// });
 
// scraper.randomSong().then(result => {
//     console.log(result);
// }).catch(error => {
//     // Error handling here
// });