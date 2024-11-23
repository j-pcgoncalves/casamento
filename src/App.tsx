import { Outlet } from "react-router-dom";

import flower from "/flower_final.png";
import LanguageProvider from "./context/languageContext";

const App = () => {
  return (
    <LanguageProvider>
      <div className="decoration-container">
        <img className="decoration-flower" src={flower} alt="Decorative Flower" />
      </div>

      <Outlet />
    </LanguageProvider>
  )
}

export default App
