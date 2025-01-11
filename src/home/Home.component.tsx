import { NavLink } from "react-router-dom";
import { useContext } from "react";

import "./Home.style.css";
import { LanguageContext, LanguageContextType } from "../context/languageContext";
import flor1 from "/flor_1.png";
import flor2 from "/flor_2.png";

const Home = () => {
    const { language } = useContext(LanguageContext) as LanguageContextType;
    const numList: number[] = [0, 1, 2];

    return (
        <div className="home-container">
            <div className="main-convite-container">
                {numList.map((num) => (
                    <img id={`flor-${num}-1`} key={`flor-${num}-1`} src={flor1} alt="Flor Decoração" />
                ))}

                {numList.map((num) => (
                    <img id={`flor-${num}-2`} key={`flor-${num}-1`} src={flor2} alt="Flor Decoração" />
                ))}

                <div className="convite-container">
                    <p className="home-top">You're invited to the wedding of</p>
                    <p className="home-title">Leonor<br /> <span className="title-and">AND</span><br /> Darren</p>
                    <p className="home-date"><b>18</b> | <b>07</b> | <b>2025</b></p>
                    <p className="home-location">Monte das Oliveiras<br /> Guia, Algarve</p>

                    <div className="btn-container">
                        <NavLink to="/ceremony" className="btn-link">
                            {language == "pt" ? "Cerimónia e Receção" : "Ceremony and Reception"}
                        </NavLink>
                        <NavLink to="/accomodations" className="btn-link">
                            {language == "pt" ? "Onde Ficar" : "Where to Stay"}
                        </NavLink>
                        <NavLink to="/form" className="btn-link">
                            {language == "pt" ? "Aceitam o convite?" : "RSVP"}
                        </NavLink>
                        <NavLink to="/faqs" className="btn-link">
                            {language == "pt" ? "FAQs" : "FAQs"}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;