import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";
import { useEffect, useState } from "react";

function App() {
    const EnhancedComponent = withConnect(Connect);
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const url = "src/api/users.json";

            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData.users);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération du fichier JSON:",
                    error
                );
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <EnhancedComponent usersJson={data} />
        </>
    );
}

export default App;
