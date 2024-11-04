import { useState } from 'react';
import '../AllMovie/allMovie.css';
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import useMovie from '../../hook/useMovies';
import useGenres from '../../hook/useGenres';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import useHooks from '../../hook/useHooks';
import { Helmet } from 'react-helmet';

function AllMovie() {
  const { results=[] } = useHooks('/discover/movie');
  const { genreResults=[] } = useGenres();
  const [favorites, setFavorites] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [genres, setGenres] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // Number of movies per page

  const setFavourite = (movie) => {
    const updatedFavMovies = [...favorites, movie];
    setFavorites(updatedFavMovies);
    localStorage.setItem("favoritesMovies", JSON.stringify(updatedFavMovies));
  };

  // Calculate the indexes for slicing the results array
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter and paginate movies based on selected genre and search value
  const filteredMovies = results.filter((movie) => {
    const matchesGenre = genres ? movie.genre_ids.includes(genres) : true;
    const matchesSearch = movie.title.toLowerCase().includes(searchValue.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handleChange = (event) => {
    const selectedGenre = event.target.value;
    setGenres(selectedGenre === 'all' ? null : selectedGenre);
    setCurrentPage(1);
  };

  return (
    <>
    <Helmet>
        <title>Movies - My React App</title>
        <meta name="description" content="This is the home page of my React application." />
      </Helmet>
      <div className="filter-div">
        <div className="search-form flex align-middle">
        <div className="search-movie">
          <Autocomplete
            disablePortal
            options={results.map((option) => option.title)}
            sx={{ width: 300 }}
            value={searchValue}
            onInputChange={(event, newValue) => {
              setSearchValue(newValue);
              setCurrentPage(1); // Reset to first page after search
            }}
            renderInput={(params) => <TextField {...params} label="Search Movie" />}
          />
          </div>
          <div className="genres">
            <FormControl sx={{ ml: 2,mb:5, minWidth: 80 }} size="medium">
              <InputLabel id="genre-select-label">Genres</InputLabel>
              <Select
                labelId="genre-select-label"
                id="genre-select"
                value={genres}
                className='text-lime-700'
                label="Genre"
                onChange={handleChange}
              >
                <MenuItem value="all">All</MenuItem>
                {genreResults.map((genre, index) => (
                  <MenuItem key={index} value={genre.id}>{genre.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <Grid container spacing={2}>
        {currentMovies && currentMovies.length > 0 && currentMovies.map((movie, index) => (
          <Grid className="relative" key={index} size={{ md: 3 }}>
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className="inline cursor-pointer hover:blur-sm"
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
              <div className={`absolute p-3 top-0 ${hoveredIndex === index ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl pb-3"><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
                <h6 className="text-1xl pb-3">{movie.release_date}</h6>
                <p className="text-sm pb-3">{movie.overview}</p>
              </div>
            )}
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      {totalPages > 1 && (
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
      )}
    </>
  );
}

export default AllMovie;
