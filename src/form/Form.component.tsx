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

    const [convidados, setConvidados] = useState<string[]>([]);
    const handleConvidadosChange = (event: FormEvent<HTMLInputElement>) => {
        const nrConvidados = event.currentTarget.value;

        setConvidados(Array(+nrConvidados).fill(""));
    }
    const handleConvidadoNomeChange = (event: FormEvent<HTMLInputElement>, index: number) => {
        const newArrayConvidados = [...convidados];
        newArrayConvidados[index] = event.currentTarget.value;

        setConvidados(newArrayConvidados);
    }

    const [restricoes, setRestricoes] = useState("");
    const handleRestricoesChange = (event: FormEvent<HTMLTextAreaElement>) => {
        setRestricoes(event.currentTarget.value);
    }

    const checkConvidadosNomes = (arrayConvidados: string[]) => {
        let nomesConvidadosValid = true;

        if (arrayConvidados.length > 0) {
            for (let i = 0; i < arrayConvidados.length; i++) {
                if (arrayConvidados[i].length === 0) {
                    nomesConvidadosValid = false;
                }
            }
        } else {
            nomesConvidadosValid = false;
        }


        return nomesConvidadosValid;
    }

    const handleFormSubmit = () => {
        const isConvidadosValid = checkConvidadosNomes(convidados);

        if (nome && isConvidadosValid) {
            setFormValid(true);
            setShowAlert(true);
            setNome("");
            setConvidados([]);
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
                    <label htmlFor="nr_convidados">{language === "pt" ? "Nrº de convidados" : "Nrº of guests"}</label>
                    <input 
                        className="input-box" 
                        id="nr_convidados" 
                        type="number" 
                        onChange={handleConvidadosChange}
                        placeholder={language === "pt" ? "Insira o nrº de convidados" : "Enter the number of guests"}
                        required
                    />
                </div>

                {convidados.map((convidado, index) => (
                    <div key={index} className="input-container">
                        <label htmlFor={`convidado_${index + 1}`}>{language === "pt" ? `Nome do convidado #${index + 1}` : `Name of guest #${index + 1}`}</label>
                        <input 
                            className="input-box" 
                            id={`convidado_${index + 1}`}
                            type="text" 
                            onChange={(event) => handleConvidadoNomeChange(event, index)}
                            value={convidado}
                            placeholder={language === "pt" ? `Insira o nome do convidado #${index + 1}` : `Enter the name of guest #${index + 1}`}
                            required
                        />
                    </div>
                ))}

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