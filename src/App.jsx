import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import { useState } from "react";

function App() {

    const usersJson = [
        {
            name: "arnaud",
            password: 123
        },
        {
            name: "userTest",
            password: 456
        }
    ]
    
    const [userConnect, setUserConnect] = useState(false);




    return (
        <>
            <Header />
            {!userConnect && <Connect setUserConnect={setUserConnect} usersList={usersJson} />}
        </>
    );
}

export default App;
