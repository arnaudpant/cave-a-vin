import "./sass/style.scss";
import Header from "./components/Header";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";
import { usersJson } from "./api/usersJson";

function App() {
    const EnhancedComponent = withConnect(Connect);

    return (
        <>
            <Header />
            <EnhancedComponent usersJson={usersJson} />
        </>
    );
}

export default App;
