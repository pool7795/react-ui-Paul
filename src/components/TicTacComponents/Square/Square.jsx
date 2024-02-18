import { useContext, useEffect, useState } from "react";
import { TicTacContext } from "../../../context/TicTacProvider";
import calculateWinner from "../../../utils/calculateWinner";
import styles from "./Square.module.css";
import { I18nContext } from "../../../context/I18nProvider";

function SquareElement({ handlePlay, value, winpos, id }) {
  return (
    <div onClick={handlePlay} className={styles.cuadricula}>
      <p
        className={`${winpos.includes(id) && styles.win_green} ${
          styles.display
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Square() {
  const [tied, setTied] = useState(false);

  const {
    currentMove,
    xIsNext,
    winner,
    currentSquare,
    putWinner,
    updateHistory,
    setCurrentMove,
  } = useContext(TicTacContext);

  const [win, winpos] = calculateWinner(currentSquare);

  useEffect(() => {
    if (win) {
      putWinner(win);
    } else {
      putWinner(null);
    }
  });

  useEffect(() => {
    if (currentMove === 9 && win === null) {
      setTied(true);
    } else {
      setTied(false);
    }
  }, [currentMove, win]);

  function handlePlay(index) {
    if (win || currentSquare[index]) {
      return;
    }

    const newSquare = currentSquare.slice();

    setCurrentMove(currentMove + 1);
    if (xIsNext) {
      newSquare[index] = "X";
    } else {
      newSquare[index] = "O";
    }

    updateHistory(newSquare);
  }

  const {t} = useContext(I18nContext);

  return (
    <>
      <div className={styles.container_board}>
        {winner && <h1>{`${t("winner")}: ${winner}`}</h1>}
        {tied && <h1>{t("Empate")}</h1>}
        <div className={styles.container}>
          <SquareElement
            winpos={winpos}
            id={0}
            value={currentSquare[0]}
            handlePlay={() => handlePlay(0)}
          />
          <SquareElement
            winpos={winpos}
            id={1}
            value={currentSquare[1]}
            handlePlay={() => handlePlay(1)}
          />
          <SquareElement
            winpos={winpos}
            id={2}
            value={currentSquare[2]}
            handlePlay={() => handlePlay(2)}
          />

          <SquareElement
            winpos={winpos}
            id={3}
            value={currentSquare[3]}
            handlePlay={() => handlePlay(3)}
          />
          <SquareElement
            winpos={winpos}
            id={4}
            value={currentSquare[4]}
            handlePlay={() => handlePlay(4)}
          />
          <SquareElement
            winpos={winpos}
            id={5}
            value={currentSquare[5]}
            handlePlay={() => handlePlay(5)}
          />

          <SquareElement
            winpos={winpos}
            id={6}
            value={currentSquare[6]}
            handlePlay={() => handlePlay(6)}
          />
          <SquareElement
            winpos={winpos}
            id={7}
            value={currentSquare[7]}
            handlePlay={() => handlePlay(7)}
          />
          <SquareElement
            winpos={winpos}
            id={8}
            value={currentSquare[8]}
            handlePlay={() => handlePlay(8)}
          />
        </div>
      </div>
    </>
  );
}

export default Square;
