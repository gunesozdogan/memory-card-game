import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className="App">
            <Header score={score} bestScore={bestScore} />
            <Main
                score={score}
                bestScore={bestScore}
                setScore={setScore}
                setBestScore={setBestScore}
            />
        </div>
    );
}

export default App;
