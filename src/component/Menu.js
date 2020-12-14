import React from "react";
import "../css/Menu.css";
import {Link} from "react-router-dom";

function Menu () {
    return(
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>
                <span/>
                <span/>
                <span/>
                <ul id="menu">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/projects"><li>Project</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export {Menu};