import { Link } from "react-router-dom";
import './index.module.scss';
import acessar from "/image/components/Acessar.png";

const BotaoHeader = (props: {label: string, alt: string}) =>{
    return(
        <div className="button-header">
            <div>
                <button>
                    <Link to='/'> {props.label} </Link>
                    <img src={acessar} alt={props.alt} />
                </button>
            </div>
        </div>
    );
}

export default BotaoHeader