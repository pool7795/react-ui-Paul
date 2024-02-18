import { useContext } from "react";
import { AppStateContext } from "../../context/AppStateProvider";
import styles from "./MainView.module.css";

function MainView() {
  const { appData, setCurrentApp } = useContext(AppStateContext);

  return (
    <>
      <div className={styles.container}>
        {appData.map((app) => (
          <div
            className={styles.container_card}
            key={"app-" + app.shortName}
            onClick={() => setCurrentApp(app.shortName)}
          >
            <div className={styles.container_img}>
              <img src={app.imgUrl} />
            </div>
            <div className={styles.title}>
              <h2>{app.name}</h2>
            </div>
            <div className={styles.container_tag}>
              {app.tags.map((tag, index) => (
                <div className={styles.tag} key={"tag-" + index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainView;
