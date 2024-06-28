import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <a><Link to="/"> Home</Link></a>
            <a> <Link to="/about">About</Link></a>
            <a> <Link to="/contacts"> Contacts</Link></a>
        </nav>
    )
}