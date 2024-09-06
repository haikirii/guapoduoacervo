import Header from "../../components/Header/";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/";

//Excluir depois
import FooterWip from "../../components/FooterWip";
import HeaderWip from "../../components/HeaderWip";

const PageLayout = () =>{
    return(
        <>
            <HeaderWip/>
            <Outlet/>
            <FooterWip/>
        </>
    );
}

export default PageLayout