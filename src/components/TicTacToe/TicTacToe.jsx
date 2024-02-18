import TicTacProvider from "../../context/TicTacProvider";
import History from "../TicTacComponents/History/History";
import Square from "../TicTacComponents/Square/Square";
import styles from "./TicTacToe.module.css";

function TicTacToe() {
  return (
    <>
      <TicTacProvider>
        <div className={styles.container_tictactoe}>
          <div className={styles.main_container}>
            <div className={styles.container}>
              <div className={styles.square}>
                <Square />
              </div>
              <History />
            </div>
          </div>
        </div>
      </TicTacProvider>
    </>
  );
}

export default TicTacToe;
