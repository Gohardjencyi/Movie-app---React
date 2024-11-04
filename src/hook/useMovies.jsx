import { useEffect, useRef, useState } from "react";
import { movieInstance } from "../API/api";


function useMovie() {

    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);
const hasFetched = useRef(false);

const getMovies = async()=>{
    try {
        const results = await movieInstance.get('/discover/movie');
        // console.log(results);
        setResults(results.data.results);
        
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
        results,
        error,
        isLoading,
       

    };
}

export default useMovie;