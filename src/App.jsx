import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";

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
