import { useEffect, useState } from 'react';
import { movieInstance } from '../../API/api';
import Carousel from '../carusel/carousel';


function Banner() {

    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const getmovies = async() =>{
        try {
            const response = await movieInstance.get('/discover/movie');
            // console.log(results);
            setResults(response.data.results);
            
        } catch (error) {
            setError(error.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getmovies();
    }, []);


    return ( 
        <div className="py-6 banner-section">

            <Carousel data={results} />
            
        </div>
     );
}

export default Banner;