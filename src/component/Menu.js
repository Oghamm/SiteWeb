import React from "react";
import "../css/Menu.css";

function Menu () {
    return(
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox"/>
                <span/>
                <span/>
                <span/>
                <ul id="menu">
                    <a href="/"><li>Home</li></a>
                    <a href="http://localhost:3000/projects"><li>Project</li></a>
                    <a href="http://localhost:3000/about"><li>About</li></a>
                    <a href="/"><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    )
}

export {Menu};