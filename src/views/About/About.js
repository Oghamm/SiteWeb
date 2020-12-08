import React from "react";
import "./About.css";
import {Menu} from "../../component/Menu";
import {Link} from "react-router-dom";

function About() {
    return(
        <div className="container__home">
            <Menu/>
            <Link to="/" className="logo">OGHAMM</Link>
            <h1>
                About me
            </h1>
        </div>
    )

}


export {About};