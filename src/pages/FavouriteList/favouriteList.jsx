import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

function FavList() {
    const [favorites, setFavorites] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    useEffect(() => {
        const savedFavMovies = JSON.parse(localStorage.getItem("favoritesMovies"));
        setFavorites(savedFavMovies);
      }, []);

      

    return ( 
        <>
        <Helmet>
            <title>Favourite - My React App</title>
            <meta name="description" content="This is the home page of my React application." />
        </Helmet>
        <h2 className="text-3xl border-b-2 pb-2 mb-5 border-slate-700">Favourite Movies</h2>
        <Grid container spacing={2}>
        {favorites && favorites.length>0 && favorites.map((movie, index) => {
            // console.log(results);
            
            return (
            <Grid className="relative" key={index} size={{ md: 3 }}>
                <div 
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                // onMouseLeave={() => setHoveredIndex(null)} // Reset on leave
                >
                <img 
                    className="inline cursor-pointer hover:grayscale hover:blur-sm" 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title}
                />
                   
                </div>
                {hoveredIndex === index && (
                <div className={`absolute p-3 top-0 ${hoveredIndex === index ? 'block' : 'hidden'}`}>
                    <h3 className="text-2xl pb-3"><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h3>
                    <h6 className="text-1xl pb-3">{movie.release_date}</h6>
                    <p className="text-sm pb-3">{movie.overview}</p>
                </div>
                
                )
                }
            </Grid>
            );
        })}
        </Grid>
        
        </>
     );
}

export default FavList;