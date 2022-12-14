import React, { useState } from "react";
import styles from "./Main.module.css";

import Overlay from "../Overlay/Overlay";

import Characters from "../Characters/Characters";
import anduinImg from "../../images/anduin.jpeg";
import deathwingImg from "../../images/deathwing.jpeg";
import garroshImg from "../../images/garrosh.jpeg";
import grommashImg from "../../images/grommash.jpeg";
import guldanImg from "../../images/guldan.jpeg";
import illidanImg from "../../images/illidan.jpeg";
import jainaImg from "../../images/jaina.jpeg";
import lichkingImg from "../../images/lichking.jpeg";
import rexxarImg from "../../images/rexxar.jpeg";
import sylvanasImg from "../../images/sylvanas.jpeg";
import thrallImg from "../../images/thrall.jpeg";
import tirionImg from "../../images/tirion.jpeg";

export default function Main(props) {
    let { score, bestScore } = props;
    const { setScore, setBestScore } = props;
    const initialState = [
        {
            fullName: "Anduin Wrynn",
            image: anduinImg,
        },
        {
            fullName: "Deathwing",
            image: deathwingImg,
        },
        {
            fullName: "Garrosh Hellscream",
            image: garroshImg,
        },
        {
            fullName: "Grommash Hellscream",
            image: grommashImg,
        },
        {
            fullName: "Gul'dan ",
            image: guldanImg,
        },
        {
            fullName: "Illidan Stormrage",
            image: illidanImg,
        },
        {
            fullName: "Jaina Proudmoore",
            image: jainaImg,
        },
        {
            fullName: "The Lich King (Arthas)",
            image: lichkingImg,
        },
        {
            fullName: "Rexxar",
            image: rexxarImg,
        },
        {
            fullName: "Sylvanas Windrunner",
            image: sylvanasImg,
        },
        {
            fullName: "Thrall",
            image: thrallImg,
        },
        {
            fullName: "Tirion Fordring",
            image: tirionImg,
        },
    ];

    const [characters, setCharacters] = useState(initialState);
    const [selectedCharacters, setSelectedCharacters] = useState([]);
    const [gameLost, setGameLost] = useState(false);

    function shuffleCharacters(arr) {
        const copyArr = arr.slice();
        copyArr.sort(() => Math.random() - 0.5);
        return copyArr;
    }

    function isIncluded(arr, item) {
        if (arr.includes(item)) return true;
        return false;
    }

    function resetGame() {
        if (score > bestScore) setBestScore(score);
        setScore(0);
        setSelectedCharacters([]);
        setGameLost(false);
    }

    function handleClick(e) {
        const clickedCharacterName = e.target.getAttribute("data-key");
        const newCharacters = shuffleCharacters(characters);

        if (!isIncluded(selectedCharacters, clickedCharacterName)) {
            // adding selected card to selected characters array
            setSelectedCharacters(
                selectedCharacters.concat([clickedCharacterName])
            );
            setScore(score + 1);

            // if same character is selected resets the game
        } else {
            setGameLost(true);
        }

        // shuffles cards
        setCharacters(newCharacters);
    }

    return (
        <React.Fragment>
            <Overlay score={score} resetGame={resetGame} gameLost={gameLost} />
            <main className={styles["character-container"]}>
                <Characters
                    characters={characters}
                    handleClick={handleClick}
                    score={score}
                    bestScore={bestScore}
                    setScore={setScore}
                    setBestScore={setBestScore}
                ></Characters>
            </main>
        </React.Fragment>
    );
}
