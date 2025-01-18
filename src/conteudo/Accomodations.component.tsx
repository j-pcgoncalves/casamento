import { useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { LanguageContext, LanguageContextType } from "../context/languageContext";
import "./Conteudo.style.css";

const Accomodations = () => {
    const { language } = useContext(LanguageContext) as LanguageContextType;
    const navigate = useNavigate();

    return (
        <>
            <FaAngleLeft onClick={() => navigate(-1)} className="arrow-back" />

            <div className="conteudo-container">
                <p className="conteudo-title">
                    {language == "pt" ? "Onde Ficar" : "Where to Stay"}
                </p>
                <div className="conteudo-text-container">
                    <p className="conteudo-text">
                        {language == "pt" ? "O Monte das Oliveiras fica perto da Guia, no Algarve, e nós vamos ficar hospedados em Vilamoura. Outras opções mais próximas incluem Albufeira e Armação de Pêra." : "Our venue is located near Guia in the Algarve, and we’ll be staying in Vilamoura. Nearby options also include Albufeira and Armação de Pêra, which are both just a short distance away."}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Accomodations;