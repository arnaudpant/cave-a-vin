import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";
// import { useEffect, useState } from "react";

function App() {

    // *** RECUPERATION DU JSON AVEC USEEFFECT ***

    //const [userApi, setUserApi] = useState();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("/src/api/users.json");
    //             const jsonData = await response.json();
    //             setUserApi(jsonData.users);
    //         } catch (error) {
    //             console.error(
    //                 "Erreur lors de la récupération du fichier JSON:",
    //                 error
    //             );
    //         }
    //     };

    //     fetchData();
    // }, []);

    const usersJson = [
        {
            id: "ae45jkl",
            login: "p",
            password: 1,
            racks: [
                    {
                        id: "qqqsss",
                        type: "rouge",
                        domaine: "Chateau la pompe",
                        aoc: "bordeaux",
                        millesime : 2019,
                        achat: 2023
                    },
                    {
                        id: "aaaddd",
                        type: "rouge",
                        domaine: "Chateau la pompe",
                        aoc: "bordeaux",
                        millesime : 2019,
                        achat: 2023
                    },
                    {
                        id: "fffggg",
                        type: "blanc",
                        domaine: "Montlouis",
                        aoc: "tourraine",
                        millesime : 2017,
                        achat: 2022
                    }, 
                ],
            
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
            <EnhancedComponent usersJson={usersJson} />
        </>
    );
}

export default App;
