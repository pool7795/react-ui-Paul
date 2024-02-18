import { useContext } from "react";
import { TicTacContext } from "../../../context/TicTacProvider";
import styles from "./History.module.css";
import { I18nContext } from "../../../context/I18nProvider";

function History() {
  const { history, setCurrentMove, resetGame } = useContext(TicTacContext);

  const {t} = useContext(I18nContext);

  return (
    <>
      <div className={styles.container}>
        <button className={styles.resetButtom} onClick={() => resetGame()}>
          {t("Reset")}
        </button>
        <p className={styles.text}>{t("Go_to")}</p>
        <div className={styles.list_buttons}>
          {history.map((_, index) => {
            if (index === 0) return;
            return (
              <button
                className={styles.button_content}
                onClick={() => setCurrentMove(index)}
                key={index}
              >
                {t("history")} {index}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default History;
