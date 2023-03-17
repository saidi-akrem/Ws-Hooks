
import { useState } from 'react';
import './App.css';
import AddMovies from './components/AddMovies/AddMovies';
import MoviesList from './components/List/MoviesList';
import Filter from './components/search/Filter';



function App() {
  
  const[keyWords,SetKeyWords]=useState('')
  const[rating,setRating]=useState(1)


const [AllMovies,setAllMovies] = useState(
[
  { title:'le parrain  ',
  imgs:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
description:'En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker...',
 rate:'5'},
{ title:'Carter',
imgs:'https://m.media-amazon.com/images/M/MV5BNWEyOThlZTAtMzExMy00NDBhLTk4Y2QtMDg3OTRkNzgyNjEyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
description:'Un homme se réveille amnésique. Guidé par une mystérieuse voix provenant d un dispositif placé dans son oreille ...',
rate:'4',}, 
{ title:' Gladiator',
imgs:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
description:'Un ancien général romain cherche à se venger de l empereur corrompu qui a assassiné sa famille et condamné à l esclavage.',
rate:'4',},
{ title:'Stillwater',
imgs:'https://m.media-amazon.com/images/M/MV5BMDFlZWJmMjMtMmE0ZC00ZGY3LTg4ZTYtNWRjNDYzZjY0MjA1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
description:'Un homme se rend de l Oklahoma jusqu en France pour aider sa fille emprisonnée pour un meurtre qu elle dit ne pas avoir commis...',
rate:'3',},
{ title:'Nobody',
imgs:'https://m.media-amazon.com/images/M/MV5BYmU1Y2U0M2EtYjM1YS00MWVjLTg2NzAtMzMwZDdkNjI4ZTY4XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg',
description:'Victime d un cambriolage, un père de famille modèle se révèle être un ancien tueur de la CIA... En cherchant a se venger...',
rate:'4',},

{
  
  title: "Aladdin",
  description:
      "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make...",
  imgs:
      "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",

  rate: 2,
},
{
  
  title: "Cold War",
  description:
      "In the 1950s, a music director falls in love with a singer and tries to persuade her to flee communist Poland for France.",
  imgs:
      "https://m.media-amazon.com/images/M/MV5BNTJmNzExOGItZTQyMi00YzBlLTk0ZTQtNzAxYmUwZDQwZjU4XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_UY209_CR0,0,140,209_AL_.jpg",
  rate: 3,
},
{
  
  title: "Monster a Go-Go",
  description:
      "A space capsule crash-lands on Earth, and the astronaut aboard disappears. Is there a connection between the missing man ...",
  imgs:
      "https://m.media-amazon.com/images/M/MV5BNjY0OWQ0ZDctNDI4ZC00MTc2LThhOWItYmE2NWQwYjg0OWVjXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX140_CR0,0,140,209_AL_.jpg",
  rate: 1,
},
{
  
  title: "Birdemic: Shock and Terror ",
  description:
      "A horde of mutated birds descends upon the quiet town . With the death toll rising, Two citizens manage to fight back...",
  imgs:
      "https://m.media-amazon.com/images/M/MV5BZTMyNmM1ODYtZmU3OS00NWIwLTg0MWEtNDExY2NlMzYzNTQ4XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR2,0,182,268_AL_.jpg",
  rate: 2,
},
{
  
  title: "Catch me if you can",
  description:
      "Barely 21 yet, Frank is a skilled forger who has passes as a doctor, lawyer and pilot.FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
  imgs:
      "https://images-na.ssl-images-amazon.com/images/I/81V%2Bb69u3xL._SY445_.jpg",
  Rating: 5,
},

{

  title: "300",
  description:
      "King Leonidas of Sparta and a force of 300 legendary men fight the Persians at Thermopylae in 480 B.C. and more ...",
  imgs:
      "https://m.media-amazon.com/images/M/MV5BMTg0NzcxNzYzM15BMl5BanBnXkFtZTcwODI4MTI2MQ@@._V1_.jpg",
  TrailerUrl: "https://www.youtube.com/embed/UrIbxk7idYA",
  rate: 5,
},

]);
const addNewMovie=(newMovie)=>{
  setAllMovies([...AllMovies,newMovie])
}
const seachMov=(text)=>{
  SetKeyWords(text)
}
const rateMovies=(num)=>{
  setRating(num)

}

  return (
    <div className="App">
      
      <AddMovies addNewMovie={addNewMovie}></AddMovies>
      <Filter seachMov={seachMov} rateMovies={rateMovies}></Filter>
      <MoviesList AllMovies={AllMovies.filter(elm=>elm.title.toLowerCase().includes(keyWords.toLowerCase().trim())&& elm.rate>=rating)}></MoviesList>
    </div>
  );
}

export default App;
