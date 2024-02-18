
import Header from "./components/Header";
import AppStateProvider from "./context/AppStateProvider";

import MainApp from "./components/MainApp";
import "./styles/index.css";


function App() {
  return (
    <>

      <AppStateProvider>
        <div className="containerApp">
          <Header />
          <MainApp />
        </div>
      </AppStateProvider>
    </>
  );
}

export default App;