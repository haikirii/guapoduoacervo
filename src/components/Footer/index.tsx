import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import brImg from '/image/components/languages/br.png'
import espImg from '/image/components/languages/esp.png'
import engImg from '/image/components/languages/eng.png'
import styles from "./index.module.scss";

const Footer = () =>{

    const { theme } = useContext(ThemeContext);

    return(
        <footer className={`${styles.footer} ${styles[theme]}`}>
            <div className={`${styles.container} wrapper`}>
                <div className={`${styles.siteMap}`}>
                    <h4>SiteMap</h4>
                    <a href="/t">Link de Página</a>
                    <a href="/t">Link de Página</a>
                    <a href="/t">Link de Página</a>
                </div>
                <div className={`${styles.suporte}`}>
                    <h4>Suporte</h4>
                    <a href="/t">FAQ</a>
                    <a href="/t">Link de Página</a>
                </div>
                <div className={`${styles.sobre}`}>
                    <h4>Sobre</h4>
                    <a href="/t">Administradores</a>
                    <a href="/t">Regras</a>
                    <a href="/t">Formulário</a>
                </div>
                <div className={`${styles.contato}`}>
                    <h4>Contato</h4>
                    <div className={`${styles.contatoSvg}`}>
                        <a href="/t">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </a>
                        <a href="/t">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </a>
                        <a href="/t">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </a>
                        <a href="/t">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </a>
                    </div>
                    <span>email@exemplo.com</span>
                </div>
            </div>
            <div className={`${styles.lang} wrapper`}>
                <button className={`${styles.br}`}>
                    <img src={brImg} alt="botão mudar idioma para português" />
                </button>
                <button className={`${styles.esp}`}> 
                    <img src={espImg} alt="botão mudar idioma para espanhol" />
                </button>
                <button className={`${styles.eng}`}>   
                    <img src={engImg} alt="botão mudar idioma para inglês" />
                </button>
            </div>
            <div className={`${styles.comerc} wrapper`}>
                <span>Acervo Amarando © 2024</span>
            </div>
        </footer>
    );
}

export default Footer;