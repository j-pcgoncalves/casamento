import { useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { LanguageContext, LanguageContextType } from "../context/languageContext";
import "./Conteudo.style.css";

const Ceremony = () => {
    const { language } = useContext(LanguageContext) as LanguageContextType;
    const navigate = useNavigate();

    return (
        <>
            <FaAngleLeft onClick={() => navigate(-1)} className="arrow-back" />

            <div className="conteudo-container">
                <p className="conteudo-title">
                    {language == "pt" ? "Cerimónia e Receção" : "Ceremony and Reception"}
                </p>
                <div className="conteudo-text-container">
                    <p className="conteudo-text">
                        {language == "pt" ? "Venham celebrar connosco com uma noite de jantar, dança e muita diversão! Pedimos que cheguem às 15h30 em ponto para darmos início à cerimónia, seguida de cocktails e um jantar delicioso." : "Come celebrate with us for an evening of dinner, dancing and good times! Please arrive by 15h30 sharp so we can kick things off with our ceremony, followed by cocktails and a delicious dinner."}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Ceremony;