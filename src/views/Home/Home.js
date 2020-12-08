import React from "react";
import "./Home.css";
import {Menu} from "../../component/Menu";
import {Link} from "react-router-dom";

function Home() {
    return(
        <div className="container__home">
            <Menu/>
            <Link to="/" className="logo">OGHAMM</Link>
            <h1>
                Site en construction
            </h1>
            <div className="presentation">Présentation</div>
            <p><span>&ndash; </span>Bientôt disponible<span> &ndash;</span></p>
            <p className="separator">...</p>
        </div>
    )

}

export {Home};