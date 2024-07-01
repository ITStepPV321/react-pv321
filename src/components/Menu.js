import { Link, NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            {/* The public API for rendering a history-aware <a> */}
            {/* <NavLink className=""></NavLink> */}
            <Link to="/"> Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts"> Contacts</Link>
        </nav>
    )
}