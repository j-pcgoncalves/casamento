import { NavLink } from "react-router-dom";

import ptFlag from "/pt_flag.jpg";
import ukFlag from "/uk_flag.jpg";
import "./Home.style.css";
import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "../context/languageContext";

const Home = () => {
    const {language, setLanguage} = useContext(LanguageContext) as LanguageContextType;

    console.log(language);

    const handleLanguageChange = (language: string) => {
        setLanguage(language);
    }

    return (
        <div className="home-container">
            <div className="flags-container">
                <img onClick={() => handleLanguageChange("pt")} className="flag" src={ptFlag} alt="Portuguese Flag" />
                <img onClick={() => handleLanguageChange("en")} className="flag" src={ukFlag} alt="English Flag" />
            </div>

            <p className="home-top">SAVE THE DATE</p>
            <p className="home-title">Leonor & Darren</p>
            <p className="home-date"><b>18</b> | <b>07</b> | <b>2025</b></p>
            <p className="home-location">Monte das Oliveiras<br /> Guia, Algarve</p>

            <div className="btn-container">
                <NavLink to="/ceremony" className="btn-link">
                    {language == "pt" ? "Cerimónia e Receção" : "Ceremony and Reception"}
                </NavLink>
                <NavLink to="/accomodations" className="btn-link">
                    {language == "pt" ? "Acomodações" : "Accomodations"}
                </NavLink>
                <NavLink to="/form" className="btn-link">
                    {language == "pt" ? "Formulário" : "Form"}
                </NavLink>
            </div>
        </div>
    )
}

export default Home;