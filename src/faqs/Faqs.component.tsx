import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { faqData } from "./faqData";
import { LanguageContext, LanguageContextType } from "../context/languageContext";
import "./Faqs.style.css";

const Faqs = () => {
    const { language } = useContext(LanguageContext) as LanguageContextType;
    const navigate = useNavigate();
    const [indexAtivo, setIndexAtivo] = useState(9);

    const handleIndexChange = (index: number): void => {
        if (indexAtivo === index) {
            setIndexAtivo(9);
        } else {
            setIndexAtivo(index);
        }
    }

    return (
        <>
            <FaAngleLeft onClick={() => navigate(-1)} className="arrow-back" />

            <div className="faqs-container">
                {faqData.map((faq, index) => (
                    <div key={index} className={`faq ${indexAtivo === index ? "faq-open" : ""}`}>
                        <div onClick={() => handleIndexChange(index)} className="faq-title">
                            <p>{language == "pt" ? faq.titlePT : faq.titleEN}</p>
                            <FaAngleDown className={indexAtivo === index ? "rotate-arrow" : ""} />
                        </div>
                        <div className={`faq-text ${indexAtivo === index ? "faq-text-open" : ""}`}>{language == "pt" ? faq.answerPT : faq.answerEN}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Faqs;