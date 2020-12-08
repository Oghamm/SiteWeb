import React from "react";
import "./Projects.css";
import {Menu} from "../../component/Menu";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <div className="container__projects">
            <Menu/>
            <Link to="/" className="logo">OGHAMM</Link>
            <h1>Tous mes projets :</h1>
            <div className="List_projects">
                <ul>
                    <a href="http://localhost:3000/projects/pendu"><li>Pendu</li></a>
                    <a href="http://localhost:3000/projects/cassebrique"><li>Case-brique</li></a>
                    <a href="http://localhost:3000/projects/memory"><li>Memory</li></a>
                </ul>
            </div>
        </div>
    )

}

export {Projects};