import React from "react";
import "./About.css";
import {Menu} from "../../component/Menu";
import {Link} from "react-router-dom";

function About() {
    return(
        <div className="container__home">
            <Menu/>
            <Link to="/" className="logo">OGHAMM</Link>
            <div className="container__pres">
                <div className="cv__left">
                    <div className="nom">Teo Laulan</div>
                    <div className="titre">
                        Etudiant en 4ème année à Epitech, intéressé par le developpement web et spécialisé
                        en React, recherche un stage à temps partiel à partir de mars 2021 ou une mission freelance dès que possible
                    </div>
                    <div className="container__cv">
                        <div className="experiences">
                            <h2>Experiences :</h2>
                            <div className="competences">
                                <div className="barre"/>
                                <div className="liste">
                                    2019/2020
                                    <br/>
                                    Kourier
                                    <br/>
                                    Developpeur front end
                                    <br/>
                                    Description
                                </div>
                            </div>
                            <div className="competences">
                                <div className="barre"/>
                                <div className="liste">
                                    2019/2020
                                    <br/>
                                    Kourier
                                    <br/>
                                    Developpeur front end
                                    <br/>
                                    Description
                                </div>
                            </div>
                            <div className="competences">
                                <div className="barre"/>
                                <div className="liste">
                                    2019/2020
                                    <br/>
                                    Kourier
                                    <br/>
                                    Developpeur front end
                                    <br/>
                                    Description
                                </div>
                            </div>
                        </div>
                        <div className="formations">
                            <h2>Formations</h2>
                            <div className="competences">
                                <div className="barre"/>
                                <div className="liste">
                                    2019/2020
                                    <br/>
                                    Kourier
                                    <br/>
                                    Developpeur front end
                                    <br/>
                                    Description
                                </div>

                            </div>
                            <div className="competences">
                                <div className="barre"/>
                                <div className="liste">
                                    2019/2020
                                    <br/>
                                    Kourier
                                    <br/>
                                    Developpeur front end
                                    <br/>
                                    Description
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv__right">
                    <div className="cv__img"/>
                    <div className="langues">
                        <h2>Langues</h2>
                        <div className="competences">
                            <div className="barre"/>
                            <div className="liste">
                                <div>
                                    <div>Anglais</div>
                                    <div>Puce</div>
                                </div>
                                <div>
                                    <div>Espagnol</div>
                                    <div>Puce</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="langues">
                        <h2>Informatique</h2>
                        <div className="competences">
                            <div className="barre"/>
                            <div className="liste">
                                <div>
                                    <div>HTML/CSS</div>
                                    <div>Puce</div>
                                </div>
                                <div>
                                    <div>JAVASCRIPT</div>
                                    <div>Puce</div>
                                </div>
                                <div>
                                    <div>React/redux</div>
                                    <div>Puce</div>
                                </div>
                                <div>
                                    <div>Wordpress</div>
                                    <div>Puce</div>
                                </div>
                                <div>
                                    <div>C/C++</div>
                                    <div>Puce</div>
                                </div>
                                <div>
                                    <div>Python</div>
                                    <div>Puce</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export {About};