import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

// import flower from "/flower_final.png";
import { db } from "../../firebaseConfig";
import "./AdminHome.style.css";

type ConvidadosDataType = {
    nome: string;
    restricoes: string;
    isGoing: string;
}

const AdminHome = () => {
    const navigate = useNavigate();

    const [convidadosGoingList, setConvidadosGoingList] = useState<ConvidadosDataType[]>([]);
    const [convidadosNotGoingList, setConvidadosNotGoingList] = useState<ConvidadosDataType[]>([]);

    const [showGoing, setShowGoing] = useState<boolean>(true);
    const [showNotGoing, setShowNotGoing] = useState<boolean>(false);

    const handleGoingChange = (isGoing: boolean) => {
        if (isGoing) {
            setShowGoing(true);
            setShowNotGoing(false);
        } else {
            setShowGoing(false);
            setShowNotGoing(true);
        }
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "convidados"));
                const newConvidadosList: ConvidadosDataType[] = [];
    
                querySnapshot.forEach((doc) => {
                    const convidadoData = doc.data();
    
                    const convidadoInfo = {
                        nome: convidadoData.nome,
                        restricoes: convidadoData.restricoes,
                        isGoing: convidadoData.isGoing
                    };
    
                    newConvidadosList.push(convidadoInfo);
                });

                const newConvidadosNotGoingList = newConvidadosList.filter((convidado) => convidado.isGoing === "false");
                const newConvidadosGoingList = newConvidadosList.filter((convidado) => convidado.isGoing === "true");
    
                setConvidadosGoingList(newConvidadosGoingList);
                setConvidadosNotGoingList(newConvidadosNotGoingList);
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

            <div className="btn-container">
                <p 
                    style={showGoing ? {backgroundColor: "var(--text-primary-color)", color: "var(--bg-primary-color)"} : {}} 
                    className="btn-link"
                    onClick={() => handleGoingChange(true)}
                >
                    Going to the wedding
                </p>
                <p 
                    style={showNotGoing ? {backgroundColor: "var(--text-primary-color)", color: "var(--bg-primary-color)"} : {}} 
                    className="btn-link"
                    onClick={() => handleGoingChange(false)}
                >
                    Not Going to the wedding
                </p>
            </div>

            {showGoing ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Dietary Restrictions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {convidadosGoingList.map((convidado, index) => (
                            <tr key={index}>
                                <td>{convidado.nome}</td>
                                <td>{convidado.restricoes ? convidado.restricoes : "None"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {convidadosNotGoingList.map((convidado, index) => (
                            <tr key={index}>
                                <td>{convidado.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </>
    )
}

export default AdminHome;