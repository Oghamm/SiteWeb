import React, {useEffect, useState, useReducer} from "react";
import {Menu} from "../../component/Menu";

import "./Casebrique.css";

function Cassebrique() {
    const reducer = (state, payload) => ({ ...state, ...payload });
    const[posBall, setPosBall] = useReducer(reducer, {X: 0, Y: 0})

    const [pos, setPos] = useState(0);
    const [moveX, setMoveX] = useState(1);
    const [moveY, setMoveY] = useState(1);
    const { innerWidth: width, innerHeight: height } = window;
    const [started, setStarted] = useState(false);

    function handleClick() {
        setStarted(started => !started);
        console.log(started);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setPosBall(posBall.X = posBall.X + moveX, posBall.Y= posBall.Y +moveY);
            if (posBall.X > height*80/100 - 40 && pos === posBall.Y) {
                setMoveX(-1);
            }
            else if (posBall.X > height*80/100 - 40 && pos !== posBall.Y) {
                setPosBall(posBall.X = 0, posBall.Y= 0);
            }
            if (posBall.X < 1) {
                setMoveX(1);
            }
            if (posBall.Y > width/2-12) {
                setMoveY(-1);
            }
            if (posBall.Y < (width/2) * -1 +10){
                setMoveY(1);
            }
        }, 1);
        return () => clearInterval(timer);
    }, [posBall.X,posBall.Y, moveX, moveY, width, height, pos, posBall]);

    function moveBar (event){
        if (event.key === 'ArrowLeft' && pos > 0 - (width/2 - 40)) {
            event.preventDefault();
            setPos(pos=> pos - 25);
        }
        else if (event.key === 'ArrowRight' && pos < (width / 2 - 40)) {
            event.preventDefault();
            setPos(pos=> pos + 25);
        }
    }


    useEffect(() => {
        document.addEventListener("keydown", moveBar, false);

        return () => {
            document.removeEventListener("keydown", moveBar, false);
        };
    });


    return (
        <div className="container">
            <div className="container__top" >
                <Menu/>
                Mon premier casse-brique en react
                <button onClick={handleClick}>Start</button>
            </div>
            <div className="game">
                <div className="bawl" style={{top:posBall.X + "px", left:posBall.Y+"px"}}/>
                <div className="barre"  style={{left:pos + "px"}}/>
            </div>
        </div>
    )
}

export {Cassebrique};