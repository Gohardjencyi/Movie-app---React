import { useState } from 'react';
import Grid from '@mui/material/Grid2';
// import useMovie from '../../hook/useMovies';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import useHooks from '../../hook/useHooks';

function MovieList(props) {
  const { results = [] } = useHooks('/discover/movie');
  const [favorites, setFavorites] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = props.Pagination; // Number of movies per page

  console.log(results);
  

  const setFavourite = (movie) => {

  // Check if the movie is already in favorites
  const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);

    if (!isAlreadyFavorite) {
      const updatedFavMovies = [...favorites, movie];
      setFavorites(updatedFavMovies);
      localStorage.setItem("favoritesMovies", JSON.stringify(updatedFavMovies));
    }
  };


  // Calculate the indexes for slicing the results array
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  // const currentMovies = results.slice(indexOfFirstMovie, indexOfLastMovie);
  const currentMovies = results ? results.slice(indexOfFirstMovie, indexOfLastMovie) : [];

// Calculate total pages
const totalPages = results.length > 0 ? Math.ceil(results.length / moviesPerPage) : 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Grid container spacing={2}>
        {currentMovies && currentMovies.length > 0 && currentMovies.map((movie, index) => (
          <Grid className="relative" key={index} size={{ md: 3 }}>
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
              className={`hover:blur-sm`}
            >
              <img
                className="inline cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <button
                className="absolute btn-favorite right-7 top-7"
                onClick={() => setFavourite(movie)}
              >
                <FavoriteIcon />
              </button>
            </div>
            {hoveredIndex === index && (
              <div className={`absolute bg-slate-900/[.06]  p-3 top-0 ${hoveredIndex === index ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl pb-3">
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
                <h6 className="text-1xl pb-3">{movie.release_date}</h6>
                <p className="text-sm pb-3">{movie.overview}</p>
              </div>
            )}
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex + 1)}
            className={`px-4 py-2 rounded ${currentPage === pageIndex + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default MovieList;
