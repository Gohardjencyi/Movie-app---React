import { useEffect, useRef, useState } from "react";
import { movieInstance } from "../API/api";


function useHooks(apiUrl) {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
const [isLoading, setIsLoading] = useState(false);
const hasFetched = useRef(false);

const getMovies = async()=>{
    try {
        const results = await movieInstance.get(apiUrl);
        console.log(results);
        setResults(results.data.results);
        
    } catch (error) {
        setError(error.message || "An error occurred");
    } finally {
        setIsLoading(false);
    }
}

useEffect(() => {
    if (!hasFetched.current) {
        getMovies();
        hasFetched.current = true;
    } else if (apiUrl) {
        // Refetch if apiUrl changes
        getMovies();
    }
}, [apiUrl]); // Adding apiUrl to dependency array


    return {
        results,
        error,
        isLoading,
       

    };
}

export default useHooks;