import { Link } from "react-router-dom";
import './index.scss';

const BotaoHeader = (props: {label: string, link: string}) =>{
    return(
        <div className="text">
            <div className="section">
            <Link to={props.link}> {props.label} </Link>
            </div>
        </div>
    );
}

export default BotaoHeader