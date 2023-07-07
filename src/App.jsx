import "./sass/style.scss";
import Connect from "./components/Connect";
import withConnect from "./components/withConnect";

function App() {
    const EnhancedComponent = withConnect(Connect);

    /*
    ** Suppression du fragment
    */

    return (
            <EnhancedComponent />
    );
}

export default App;
