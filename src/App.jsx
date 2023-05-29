import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import { useState } from "react";

function App() {

    const [usersList, setUsersList] = useState(null);
    const [userConnect, setUserConnect] = useState(false);
    
    // FUNCTION APPEL A API
    async function callAPI(url) {
        try {
            const user = await fetch(url);
            const dataJson = await user.json();
            setUsersList(dataJson);
            localStorage.setItem("usersList", JSON.stringify(dataJson))

        } catch (err) {
            console.log(err);
        }
    }

    usersList === null && callAPI("./src/api/users.json");


    return (
        <>
            <Header />
            {!userConnect && <Connect setUserConnect={setUserConnect} usersList={usersList} />}
        </>
    );
}

export default App;
