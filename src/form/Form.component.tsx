import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";

import { LanguageContext, LanguageContextType } from "../context/languageContext";
import "./Form.style.css";
import { FaCheck, FaX } from "react-icons/fa6";

const Form = () => {
    const { language } = useContext(LanguageContext) as LanguageContextType;
    const navigate = useNavigate();

    const [formValid, setFormValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [nome, setNome] = useState("");
    const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
        setNome(event.currentTarget.value);
    }

    const [restricoes, setRestricoes] = useState("");
    const handleRestricoesChange = (event: FormEvent<HTMLTextAreaElement>) => {
        setRestricoes(event.currentTarget.value);
    }

    const handleFormSubmit = () => {

        if (nome) {
            setFormValid(true);
            setShowAlert(true);
            setNome("");
            setRestricoes("");
            setTimeout(() => {
                setShowAlert(false);
                setFormValid(false);

                navigate("/");
            }, 1000);
        } else {
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 1500);
        }
    }

    return (
        <>
            <FaAngleLeft onClick={() => navigate(-1)} className="arrow-back" />
         
            <div className="form-container">
                <div className="input-container">
                    <label htmlFor="nome">{language === "pt" ? "Nome" : "Name"}</label>
                    <input 
                        onChange={handleNameChange} 
                        className="input-box" 
                        id="nome" 
                        type="text" 
                        value={nome} 
                        placeholder={language === "pt" ? "Insira o nome" : "Enter your name"}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="restricoes">{language === "pt" ? "Restrições Alimentares" : "Dietary Restrictions"}</label>
                    <textarea 
                        id="restricoes" 
                        className="input-box"
                        onChange={handleRestricoesChange} 
                        value={restricoes}
                        placeholder={language === "pt" ? "Insira quaisquer restrições alimentares" : "Enter any dietary restrictions"}
                    ></textarea>
                </div>

                <p 
                    style={{ cursor: "pointer" }} 
                    className="btn-link"
                    onClick={handleFormSubmit}
                >
                    {language === "pt" ? "Submeter" : "Submit"}
                </p>
            </div>
            
            <div className={`alert ${showAlert ? "show-alert" : ""} ${formValid ? "success-alert" : "error-alert"}`}>
                {formValid ? (
                    <FaCheck />
                ) : (
                    <FaX />
                )}
                <p>{formValid ? language === "pt" ? "O seu formulário foi enviado com sucesso" : "The form was sent successfully" : language === "pt" ? "Ocorreu um erro ao enviar o seu formulário" : "An error occurred while sending the form"}</p>
            </div>
        </>
    );
}

export default Form;