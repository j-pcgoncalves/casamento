import { NavLink } from "react-router-dom";

import ptFlag from "/pt_flag.jpg";
import ukFlag from "/uk_flag.jpg";
import "./Home.style.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="flags-container">
                <img className="flag" src={ptFlag} alt="Portuguese Flag" />
                <img className="flag" src={ukFlag} alt="English Flag" />
            </div>

            <p className="home-top">SAVE THE DATE</p>
            <p className="home-title">Leonor & Darren</p>
            <p className="home-date"><b>18</b> | <b>07</b> | <b>2025</b></p>
            <p className="home-location">Monte das Oliveiras<br /> Guia, Algarve</p>

            <div className="btn-container">
                <NavLink to="/ceremony" className="btn-link">
                    Cerimónia e Receção
                </NavLink>
                <NavLink to="/accomodations" className="btn-link">
                    Acomodações
                </NavLink>
                <NavLink to="/form" className="btn-link">
                    Formulário
                </NavLink>
            </div>
        </div>
    )
}

export default Home;