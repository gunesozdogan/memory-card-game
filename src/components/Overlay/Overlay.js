import styles from "./Overlay.module.scss";

export default function Overlay(props) {
    return (
        <div
            className={
                props.gameLost || props.score === 12
                    ? styles.overlay
                    : styles.hidden
            }
        >
            <div className={styles["overlay-inner-container"]}>
                <p>
                    {props.gameLost
                        ? "You lost the game!"
                        : "You won the game!"}
                </p>
                <button onClick={props.resetGame}>Restart</button>
            </div>
        </div>
    );
}
