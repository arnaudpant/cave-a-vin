import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import { useState } from "react";

function App() {
    const usersJson = [
        {
            login: "pascal",
            password: 123,
        },
        {
            login: "userTest",
            password: 456,
        },
    ];

    const [userConnect, setUserConnect] = useState(false);

    return (
        <>
            <Header />
            {userConnect ? (
                <h2>Utilisateur connecté</h2>
            ) : (
                <Connect
                    usersJson={usersJson}
                    setUserConnect={setUserConnect}
                />
            )}
        </>
    );
}

export default App;
