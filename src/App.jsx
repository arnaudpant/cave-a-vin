import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";
import { usersJson } from "./api/usersJson";

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


    const EnhancedComponent = withConnect(Connect);

    return (
        <>
            <Header />
            <EnhancedComponent usersJson={usersJson} />
        </>
    );
}

export default App;
