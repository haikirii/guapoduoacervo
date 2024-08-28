import { Link } from "react-router-dom";
import '../../css/index.css';

const Footer = () =>{
    return(
        <>
        <section className="section-footer">
            <footer>
                <div className="container-footer">
                    <div className="row-footer">
                        <div className="footer-col">
                            <h4>Amarantos & Acervos</h4>
                                <ul>
                                <p><span className="gatinho">&quot;Olá, guapito!&quot;</span></p>
                                <p><span className="guapito">&quot;Hola, ¡gatinho!&quot;</span></p>
                                </ul>
                        </div>
                            
                        <div className="footer-col">
                            <h4>Contate-nos</h4>
                            <ul>
                                <li><a href="#">email@exemplo.com</a></li>
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Sobre o Arcevo</h4>
                            <ul>
                                <li><Link to='/Sobre'>Administradores</Link></li>
                                <li><a href="#">Regras</a></li>
                                <li><a href="#">Formulário</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Suporte</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Como funcionamos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        </>
    );
}

export default Footer