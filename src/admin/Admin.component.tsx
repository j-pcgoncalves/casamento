import { FormEvent, useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import flower from "/flower_final.png";

const Admin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("isLogin") === "true") {
            navigate("/admin/home");
        }
    });

    const [showAlert, setShowAlert] = useState(false);

    const [email, setEmail] = useState("");
    const handleEmailChange = (event: FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const [password, setPassword] = useState("");
    const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    const handleFormSubmit = async () => {
        if (!email || !password) {
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 1000);
        } else {
            const auth = getAuth();
            
            try {
                await signInWithEmailAndPassword(auth, email, password);
                localStorage.setItem("isLogin", "true");
                navigate("/admin/home");
                
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_) {
                setShowAlert(true);

                setTimeout(() => {
                    setShowAlert(false);
                }, 1000);
            }

        }
    }

    return (
        <>
            <div className="decoration-container">
                <img className="decoration-flower" src={flower} alt="Decorative Flower" />
            </div>

            <div className="form-container">
                <h1>Admin Area</h1>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={handleEmailChange} 
                        className="input-box" 
                        id="email" 
                        type="text" 
                        value={email} 
                        placeholder="Enter the email"
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={handlePasswordChange} 
                        className="input-box" 
                        id="password" 
                        type="password" 
                        value={password} 
                        placeholder="Enter the password"
                        required
                    />
                </div>

                <p 
                    style={{ cursor: "pointer" }} 
                    className="btn-link"
                    onClick={handleFormSubmit}
                >
                    Login
                </p>
            </div>

            <div className={`alert ${showAlert ? "show-alert" : ""} error-alert`}>
                <FaX />
                <p>An error occurred while sending the form</p>
            </div>
        </>
    )
}

export default Admin;