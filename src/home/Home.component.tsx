import { NavLink } from "react-router-dom";
import { useContext } from "react";

import "./Home.style.css";
import { LanguageContext, LanguageContextType } from "../context/languageContext";

const Home = () => {
    const { language } = useContext(LanguageContext) as LanguageContextType;

    return (
        <div className="home-container">
            <p className="home-top">You're invited to the wedding of</p>
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
                    {language == "pt" ? "Aceitam o convite?" : "RSVP"}
                </NavLink>
                <NavLink to="/faqs" className="btn-link">
                    {language == "pt" ? "FAQs" : "FAQs"}
                </NavLink>
            </div>
        </div>
    )
}

export default Home;