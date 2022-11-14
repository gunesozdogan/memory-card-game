import { useState } from "react";
import styles from "./Main.module.css";

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

export default function Main() {
    const characters = [
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

    const [charactersOrder, setCharactersOrder] = useState([characters]);

    return (
        <main className={styles["character-container"]}>
            <Characters characters={characters}></Characters>
        </main>
    );
}
