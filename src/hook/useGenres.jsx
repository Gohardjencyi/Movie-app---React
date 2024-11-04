import { useEffect, useRef, useState } from "react";
import { movieInstance } from "../API/api";


function useGenres() {

    const [genreResults, setgenreResults] = useState([]);
    const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);
const hasFetched = useRef(false);

const getMovies = async()=>{
    try {
        const results = await movieInstance.get('/genre/movie/list');
        console.log(results);
        setgenreResults(results.data.genres);
        
    } catch (error) {
        setError(error.message || "An error occurred");
    } finally {
        setIsLoading(false);
    }
}

useEffect(() => {
    if (!hasFetched.current) { // Check if fetch has already happened
        getMovies();
        hasFetched.current = true; // Set flag to true after fetching
    }
}, []);


    return {
        genreResults,
        error,
        isLoading,
       

    };
}

export default useGenres;