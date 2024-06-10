import React, { useEffect, useState } from 'react';
import './hero.css';
// import bgImg from '../images/apps.jpeg';
import MovieDate from '../components/MovieDate';
import WatchBtn from '../components/WatchBtn';
// import MovieSwiper from '../components/MovieSwiper';
import MovieContent from '../components/MovieContent';

function Hero() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetchMovies(); 
  }, []);

  const handleSlideChange = _id => {
    const newMovies = movies.map(movie => {
      if (movie._id === _id) {
        movie.active = true;
      }
      return movie;
  });
  setMovies(newMovies);
  
  };
  
  return (
    <div className='hero'>
      {movies && 
      movies.length > 0 &&
      movies.map(movie => (
        <div className='movie'>
          <img src={movie.bgImg} alt="Background" 
          className={`bgImg ${movie.active ? 'active' : undefined}`} 
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                {/* Add your content here */}
                <MovieContent movie={movie} />
              </div>
              <div className='col-lg-6 col-sm-12'>
                <MovieDate movie={movie} />
                <WatchBtn movie={movie} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* {movies && movies.length > 0 && 
      <MovieSwiper slides={movies} slideChange={handleSlideChange} />} */}
    </div>
  );
}

export default Hero;
