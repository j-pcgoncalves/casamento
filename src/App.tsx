import { Outlet } from "react-router-dom";
import { useContext } from "react";

import ptFlag from "/pt_flag.jpg";
import ukFlag from "/uk_flag.jpg";
import flower from "/flower_final.png";
import { LanguageContext, LanguageContextType } from "./context/languageContext";

const App = () => {
  const { setLanguage } = useContext(LanguageContext) as LanguageContextType;

  return (
    <>
      <div className="flags-container">
          <img onClick={() => setLanguage("pt")} className="flag" src={ptFlag} alt="Portuguese Flag" />
          <img onClick={() => setLanguage("en")} className="flag" src={ukFlag} alt="English Flag" />
      </div>
      <div className="decoration-container">
        <img className="decoration-flower" src={flower} alt="Decorative Flower" />
      </div>

      <Outlet />
    </>
  )
}

export default App
