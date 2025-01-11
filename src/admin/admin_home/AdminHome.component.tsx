import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

// import flower from "/flower_final.png";
import { db } from "../../firebaseConfig";
import "./AdminHome.style.css";

type ConvidadosDataType = {
    nome: string;
    restricoes: string;
}

const AdminHome = () => {
    const navigate = useNavigate();

    const [convidadosList, setConvidadosList] = useState<ConvidadosDataType[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "convidados"));
                const newConvidadosList: ConvidadosDataType[] = [];
    
                querySnapshot.forEach((doc) => {
                    const convidadoData = doc.data();
    
                    const convidadoInfo = {
                        nome: convidadoData.nome,
                        restricoes: convidadoData.restricoes
                    };
    
                    newConvidadosList.push(convidadoInfo);
                });
    
                setConvidadosList(newConvidadosList);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_) {
                localStorage.removeItem("isLogin");
                navigate("/admin");
            }
        }

        if (localStorage.getItem("isLogin") !== "true") {
            navigate("/admin");
        }

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            {/* <div className="decoration-container">
                <img className="decoration-flower" src={flower} alt="Decorative Flower" />
            </div> */}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dietary Restrictions</th>
                    </tr>
                </thead>

                <tbody>
                    {convidadosList.map((convidado, index) => (
                        <tr key={index}>
                            <td>{convidado.nome}</td>
                            <td>{convidado.restricoes ? convidado.restricoes : "None"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AdminHome;