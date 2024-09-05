import { Link } from "react-router-dom";
import './index.scss';
import logo from "/image/components/Logo.png";
import acessar from "/image/components/Acessar.png";

const Header = () =>{
    return(
        <>
        <header>  
            <div className="header-content wrapper">
                <div className="logo-header">
                    <div className="logo-header-img">
                        <img src={logo} alt="Logo do Acervo Amaranto" />
                    </div>
                    <div className="logo-header-text">
                        <Link to='/'>Acervo Amaranto</Link>
                    </div>
                </div>

                <div className="header-text">
                        <div className="header-section">
                        <Link to='/Guapoverso'>Guapoduo</Link>
                        </div>
                </div>
                <div className="header-text">
                        <div className="header-section">
                        <Link to='/'>Fanfics</Link>
                        </div>
                </div>
                <div className="header-text">
                        <div className="header-section">
                        <Link to='/NotFound'>Fanarts</Link>
                        </div>
                </div>
                <div className="header-text">
                        <div className="header-section">
                        <Link to='/Sobre'>Sobre</Link>
                        </div>
                </div>

                <div className="button-header">
                    <div>
                        <button>
                            <Link to='/'>Acessar</Link>
                            <img src={acessar} alt="Ícone de acesso à conta." />
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header