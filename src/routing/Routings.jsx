import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home/home';
import About from './../pages/About/about';
import Contact from './../pages/Contact/contact';
import FavList from './../pages/FavouriteList/favouriteList';
import Navmenu from './../components/Navmenu/Navmenu';
import Footer from '../components/Footer/Footer';
import AllMovie from '../pages/AllMovie/allMovie';
import MovieDetails from '../components/movieDetails/movieDetails';

function App() {
  return (
    <Router>
      <Navmenu />
      <div className='py-10'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorite" element={<FavList />} />
          <Route path="/allmovie" element={<AllMovie />} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
