import { NavLink } from "react-router-dom";
import "./Home.style.css";

const Home = () => {
    return (
        <div className="home-container">
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