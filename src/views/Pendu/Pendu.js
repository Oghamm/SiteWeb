import React, { Component } from 'react'
import Letter from "./Letter";
import shuffle from 'lodash.shuffle';
import "./Pendu.css"
import {Menu} from "../../component/Menu";

export const ALPHA1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
export const ALPHA2 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
export const WORDS = ["AXE","BEL","COQ","COU","GAZ","GEL","SKI","TAS","BEAU","BOXE","BRUN","CERF","DAME","DRAP","DUNE","EMEU","MINE","OURS","PION","RHUM","TEST",
    "VERT","AIMER","AVION","BALAI","BANJO","BARBE","BUCHE","GIFLE","JAMBE","KOALA","MAMAN","POMME","PRUNE","ROBOT","RUGBY","TAUPE","TYRAN","ACAJOU","ALARME",
    "AVIRON","BRONZE","CLOCHE","CIRAGE"]

class Pendu extends Component {
    state= {
        firstLine: ALPHA1,
        secondLine: ALPHA2,
        wordToFind: "",
        usedLetters:[],

    }

    computeDisplay(phrase, usedLetters) {
        return phrase.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : '_')
        )
    }

    gameStart = () => {
        const candidate = shuffle(WORDS);
        this.setState({wordToFind:candidate[0]})
        this.setState({usedLetters:[]});
        console.log(this.state.wordToFind);
    }

    isWon = () => {
        if (!this.computeDisplay(this.state.wordToFind, this.state.usedLetters).includes('_') && this.state.wordToFind) {
            return("C'est gagné!");
        }
    }

    handleClickLetter = (letter) => {
        this.setState({usedLetters: this.state.usedLetters + letter});
    }

    render() {
        const {firstLine, secondLine} = this.state;

        return (
            <div className="App">
                <Menu/>
                <div className="header">Bienvenue dans mon jeu du pendu</div>
                <button onClick={this.gameStart} className="start_button">Commencer une partie</button>
                <div className="WordToFind">{this.computeDisplay(this.state.wordToFind, this.state.usedLetters)}</div>
                <div className="Alphabet">
                    {firstLine.map((letter,index) => (
                        <Letter letter={letter} key={index} onClick={this.handleClickLetter} index={index}/>
                    ))}
                </div>
                <div className="Alphabet">
                    {secondLine.map((letter,index) => (
                        <Letter letter={letter} key={index} onClick={this.handleClickLetter} index={index}/>
                    ))}
                </div>
                <div className="Won">{this.isWon()}</div>
            </div>
        );
    }


}

export default Pendu;