import React from "react";
import styles from "./Characters.module.css";

export default function Characters(props) {
    return (
        <React.Fragment>
            {props.characters.map((character, index) => (
                <div className={styles["character-container"]} key={index}>
                    <img
                        className={styles.img}
                        src={character.image}
                        alt={"anduin"}
                    ></img>
                    <h3>{character.fullName}</h3>
                </div>
            ))}
        </React.Fragment>
    );
}
