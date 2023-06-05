import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";
import { useEffect, useState } from "react";

function App() {
    const [userApi, setUserApi] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/api/users.json");
                const jsonData = await response.json();
                setUserApi(jsonData.users);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération du fichier JSON:",
                    error
                );
            }
        };

        fetchData();
    }, []);

    const usersJson = [
        {
            id: "ae45jkl",
            login: "pascal",
            password: 123,
        },
        {
            id: "hj78dgf",
            login: "userTest",
            password: 456,
        },
    ];

    const EnhancedComponent = withConnect(Connect);

    return (
        <>
            <Header />
            <EnhancedComponent usersJson={userApi} />
        </>
    );
}

export default App;
