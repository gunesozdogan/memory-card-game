import React from "react";
import styles from "./Characters.module.css";

export default function Characters(props) {
    return (
        <React.Fragment>
            {props.characters.map((character, index) => (
                <div
                    onClick={props.handleClick}
                    className={styles["character-container"]}
                    key={index}
                    data-key={character.fullName}
                >
                    <img
                        className={styles.img}
                        src={character.image}
                        alt={character.fullName + " Image"}
                        data-key={character.fullName}
                    ></img>
                    <h3>{character.fullName}</h3>
                </div>
            ))}
        </React.Fragment>
    );
}
