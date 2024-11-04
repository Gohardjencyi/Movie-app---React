import { Link } from "@mui/material";
import Banner from "../../components/Banner/banner";
import MovieList from "../../components/Movie/movie";

function Home() {
    return ( 
    <>
    <Banner/>
        <h2 className="flex justify-between text-3xl border-b-2 pb-2 mb-5 border-slate-700">Discover Movies <Link variant="a" className="no-underline text-zinc-300 text-sm" href="/allmovie">View All</Link></h2>
        
        <MovieList Pagination={8}/>
        </>
     );
}

export default Home;