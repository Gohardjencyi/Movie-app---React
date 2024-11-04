
import logo from '../../assets/images/MassMovie.png';
import './navmenu.css';
import { NavLink } from 'react-router-dom';


function Navmenu() {
    const Menu=[
        {
            name:"Home",
            url:"/",
            
        },
        {
            name:"About",
            url:"/about",
        },
        {
            name:"Contact",
            url:"/contact",
        },
        {
            name:"Favorite",
            url:"/favorite",
        },
        {
            name:"All Movies",
            url:"/allmovie",
        }
    ]
        
    return ( 
        <header className="header-section flex justify-between items-center">  
        <div className="flex lg:flex-row flex-col items-center">  
            <div className="text-blue-600 text-2xl">
                <img src={logo} alt="logo" width={50} />
            </div>  
            <nav className="lg:ml-6">  
                <ul className="flex lg:space-x-6 space-x-3 my-5">  
                {Menu && Menu.map((item,index) => (
                            <li key={index}>
                                <NavLink to={item.url}
                                 className={({ isActive }) =>  
                                        isActive ? "text-sky-600" : "text-gray-800 hover:text-blue-600"
                                    } >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                </ul>  
            </nav>  
        </div>  
        {/* <div className="flex items-center space-x-4">  
            <a href="/login" className="text-gray-800 hover:text-blue-600">Log in</a>  
            <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign up</a>  
        </div>   */}
    </header>  
     );
}

export default Navmenu;