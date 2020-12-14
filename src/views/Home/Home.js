import React from "react";
import "./Home.css";
import {Menu} from "../../component/Menu";
import {Link} from "react-router-dom";


function Home() {



    return(
        <div className="container__home">
            <Menu/>
            <Link to="/" className="logo">OGHAMM</Link>
            <div className="container__pres">
                <div className="presentation">
                    <div className="first__line">Bonjour,</div>
                    <div className="lines"> Je suis Teo Laulan,</div>
                    <div className="lines">Developpeur Web React,</div>
                    <div className="lines">situé à Bordeaux</div>
                </div>
                <div className="right__box">
                    <Link to="/about" className="about" >
                        <div className="text">Apprenez-en plus sur moi</div>
                    </Link>
                    <Link to="/projects" className="project" >
                        <div className="text">Découvrez mes projets et réalisations</div>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export {Home};