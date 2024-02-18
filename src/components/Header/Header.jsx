import EnglishIcon from "../../assets/icons/iconEn.svg";
import SpanishIcon from "../../assets/icons/iconEs.svg";
import { useContext } from "react";
import { I18nContext } from "../../context/I18nProvider";
import styles from "./Header.module.css";
import { AppStateContext } from "../../context/AppStateProvider";

export default function Header() {
  const { lang, setLanguage, t } = useContext(I18nContext);

  const { appData, currentApp, setCurrentApp } = useContext(AppStateContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info_content}>
          <h1 onClick={() => setCurrentApp("")} className={styles.title}>
            React Showcase
          </h1>
          <h2>
            {currentApp !== "" && (
              <p>{appData.find((app) => app.shortName === currentApp).name}</p>
            )}
          </h2>

          <div className={styles.buttons}>
            <button
              className={styles.button_language}
              onClick={() => setLanguage("US")}
            >
              <img src={EnglishIcon} alt="US-Lang" />
            </button>

            <button
              className={styles.button_language}
              onClick={() => setLanguage("ES")}
            >
              <img src={SpanishIcon} alt="ES-Lang" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
