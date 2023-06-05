import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";

function App() {
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


    const EnhancedComponent = withConnect(Connect)

    return (
        <>
            <Header />
            <EnhancedComponent
                usersJson={usersJson}
            />
        </>
    );
}

export default App;
