import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieInstance } from './../../API/api';
import { Helmet } from 'react-helmet';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            try {
                const response = await movieInstance.get(`/movie/${id}`);
                setMovie(response.data);
            } catch (err) {
                setError(err.message || "An error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    console.log(movie);
    
    if (isLoading) return <p>Loading movie details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <>
       <Helmet>
        <title>{movie.title} - My React App</title>
        <meta name="description" content={`Details and information about ${movie.title}`} />
      </Helmet>
      <div className='px-2'>
            {movie && (
                <>
                <div className='flex justify-center'>
                <img
                className="m-0 text-center"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
                </div>
                <div className="grid my-8 lg:grid-cols-6 gap-4" >
                  <div className='col-span-3'>
                  <h1 className='text-5xl mb-3'>{movie.title}</h1>
                  <div className='grid grid-cols-4 mb-3'>
                    <div className='bg-yellow-600 py-2 px-3'>
                    {
                      movie.genres.map((genre, index) => {
                        return (
                          <span key={index}>
                            {genre.name}{index < movie.genres.length - 1 ? ' - ' : ''}
                          </span>
                        );
                      })
                    }
                    </div>
                    <div className='bg-cyan-600 text-center py-2 px-3'>{movie.runtime} mins</div>
                    <div className='bg-emerald-600 text-center py-2 px-3'>{movie.status}</div>
                    <div className='bg-pink-600 text-center py-2 px-3'> {movie.release_date}</div>
                  </div>
                  <p>{movie.overview}</p>
                  </div>
                  <div className='col-span-3 overflow-x-auto max-w-full'>
                  <div className='flex justify-center'>
                  <img
                    className="m-0 text-center"
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.title}
                    width={300}
                  />
                  </div>
                  
                  <table className="whitespace-nowrap min-w-full table-auto border-spacing-4 border border-slate-500">
                    <tbody>
                      <tr>
                        <td className='border p-2 border-slate-700'>Budget</td>
                        <td className='text-center border border-slate-700'>{movie.budget}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Website</td>
                        <td className='break-words text-center border border-slate-700'>{movie.homepage}</td>
                      </tr> 
                      <tr>
                        <td className='border p-2 border-slate-700'>Popularity</td>
                        <td className=' text-center border border-slate-700'>{movie.popularity}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Release Date</td>
                        <td className=' text-center border border-slate-700'>{movie.release_date}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Revenue</td>
                        <td className=' text-center border border-slate-700'>{movie.revenue}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Runtime</td>
                        <td className=' text-center border border-slate-700'>{movie.runtime}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Status</td>
                        <td className=' text-center border border-slate-700'>{movie.status}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Tagline</td>
                        <td className='text-center border border-slate-700'>{movie.tagline}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Vote Average</td>
                        <td className='text-center border border-slate-700'>{movie.vote_average}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Vote Count</td>
                        <td className='text-center border border-slate-700'>{movie.vote_count}</td>
                      </tr>
                      <tr>
                        <td className='border p-2 border-slate-700'>Languages</td>
                        <td className='text-center border border-slate-700'>
                          {
                            movie.spoken_languages.map((language, index) => {
                              return (
                                <span key={index}>
                                  {language.name}{index < movie.spoken_languages.length - 1 ? ' - ' : ''}
                                </span>
                              );
                            })
                          }
                    </td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
                    
                </>
            )}
        </div>
      </>
      
    );
}

export default MovieDetail;
