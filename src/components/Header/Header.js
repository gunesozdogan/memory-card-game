import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles["header-left"]}>
                <h1>Warcraft Memory Game</h1>
                <p>
                    Increase your score by clicking on different character each
                    turn.
                </p>
            </div>
            <div className={styles["header-right"]}>
                <span>Score: {props.score}</span>
                <span>Best Score: {props.bestScore}</span>
            </div>
        </header>
    );
}
