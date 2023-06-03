import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import EnhancedComponent from "./components/withConnect";
import withConnect from "./components/withConnect";
// import { useState } from "react";

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

    //const [userConnect, setUserConnect] = useState(false);

    const EnhancedComponent = withConnect(Connect)

    return (
        <>
            <Header />
            <EnhancedComponent
                usersJson={usersJson}
                //setUserConnect={setUserConnect}
            />
        </>
    );
}

export default App;
