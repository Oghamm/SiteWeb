import React from "react";
import "./Projects.css";
import {Menu} from "../../component/Menu";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <div className="container__projects">
            <Menu/>
            <div className="logo__container">
                <Link to="/" className="logo">OGHAMM</Link>
            </div>
            <h1>Tous mes projets :</h1>
            <div className="List_projects">
                <ul>
                    <Link to="/pendu"><li>Pendu</li></Link>
                    <Link to="/projects/cassebrique"><li>Casse-brique</li></Link>
                    <Link to="/projects/memory"><li>Memory</li></Link>
                </ul>
            </div>
        </div>
    )

}

export {Projects};
