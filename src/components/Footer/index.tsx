import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import brImg from '/image/components/languages/br.png'
import espImg from '/image/components/languages/esp.png'
import engImg from '/image/components/languages/eng.png'
import styles from "./index.module.scss";

import BotaoMudarIdioma from './BotaoMudarIdioma';
import FooterLinks from './FooterLinks';
import { Item } from './FooterLinks';

const svgIconProv = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
)

const Footer = () => {

    const { theme } = useContext(ThemeContext);

    const Sitemap: Item[] = [
        { href: "/t", text: "Link de Página Link de Página", isLink: true, isSvg: false },
        { href: "/t", text: "Link de Página Link de Página", isLink: true, isSvg: false },
        { href: "/t", text: "Link de Página Link de Página", isLink: true, isSvg: false },
        { href: "/t", text: "Link de Página Link de Página", isLink: true, isSvg: false },
    ];

    const Suporte: Item[] = [
        { href: "/t", text: "FAQ", isLink: true, isSvg: false },
        { href: "/t", text: "Como Funcionamos", isLink: true, isSvg: false },
    ];

    const Sobre: Item[] = [
        { href: "/t", text: "Administradores", isLink: true, isSvg: false },
        { href: "/t", text: "Regras", isLink: true, isSvg: false },
        { href: "/t", text: "Formulário", isLink: true, isSvg: false },
    ];

    const Contato: Item[] = [
        { href: "/t", text: "", isLink: true, isSvg: true, svgIcon: svgIconProv },
        { href: "/t", text: "", isLink: true, isSvg: true, svgIcon: svgIconProv },
        { href: "/t", text: "", isLink: true, isSvg: true, svgIcon: svgIconProv },
        { href: "/t", text: "", isLink: true, isSvg: true, svgIcon: svgIconProv },
        { text: "email@exemplo.com", isLink: false, isSvg: false },
    ];

    return(
        <footer className={`${styles.footer} ${styles[theme]}`}>
            <div className={`${styles.container} wrapper`}>
                <div className={``}>
                    <FooterLinks
                        title='Sitemap'
                        items={Sitemap}
                    />
                </div>
                <div className={``}>
                    <FooterLinks
                        title='Suporte'
                        items={Suporte}
                    />
                </div>
                <div className={``}>
                    <FooterLinks
                        title='Sobre'
                        items={Sobre}
                    />
                </div>
                <div className={``}>
                    <FooterLinks
                        title='Contato'
                        items={Contato}
                    />
                </div>
            </div>
            <div className={`${styles.lang} wrapper`}>
                <BotaoMudarIdioma src={brImg} lang={'portugês'} />
                
                <BotaoMudarIdioma src={espImg} lang={'espanhol'} />
                
                <BotaoMudarIdioma src={engImg} lang={'inglês'} />
            </div>
            <div className={`${styles.comerc} wrapper`}>
                <span>Acervo Amarando © 2024</span>
            </div>
        </footer>
    );
}

export default Footer;