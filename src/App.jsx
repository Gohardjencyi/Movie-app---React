import './App.css'
import Footer from './components/Footer/Footer';
import Navmenu from './components/Navmenu/Navmenu';
import Routing from './routing/Routings';

function App() {
    return ( 
        <>
          <div className='content-section bg-slate-900'>
            <div className='container py-8 m-auto'>
              <Routing />
            </div>
          </div>
        </>
       
     );
}

export default App;