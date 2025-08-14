import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import * as XLSX from "xlsx";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import { MoviesContext } from './context/MoviesContex';
import About from './Pages/About/About';
import Movie from './Pages/Movie/Movie';
function App() {
  const [movies, setMovies] = useState([]);
  let [isLoading , setIsLoading]=useState(true)

  const fetchMovies = async () => {
    setIsLoading(true)
    let response = await axios.get('https://yts.mx/api/v2/list_movies.json?quality=3D');
    setIsLoading(false);
    console.log('Response :', response);
    let data = response.data.data.movies;
    console.log('Data : ', data);
    setMovies(data)
  }
  
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <MoviesContext.Provider value={{data:movies , isLoading}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/movie/:id' element={<Movie/>} />
        </Routes>
      </MoviesContext.Provider>


    </>
  )
}

export default App
