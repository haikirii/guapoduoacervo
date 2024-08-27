import { Link } from "react-router-dom";
import '../../css/index.css';

const Header = () =>{
    return(
        <>
        <header className="header">
            <h1>
                <a href="">
                    <img alt="Arcevo Guapoduo" className="logo" src="image/Amaranthitem.webp" width="40" height="40"/>
                    <span><a href="index.html">Acervo Guapoduo</a></span>
                </a>
            </h1>
            
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Guapoverso'>Guapoverso</Link>
                    </li>
                    <li>
                        <Link to='/Categoria'>Categorias</Link>
                    </li>
                    <li className="dropdown">
                        <button className="dropdown-button">Acessar</button>
        
                        <div className="dropdown-content">
                            <Link to='/Fanfics'>Fanfics</Link>
                            <Link to='/Autores'>Autores</Link>
                            <Link to='/Genero'>Gênero</Link>
                        </div>
                    </li>
                    <li>
                        <Link to='Sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header