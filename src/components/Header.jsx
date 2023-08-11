
const Header = ({ connect }) => {
    return (
        <header>
            <h1>RACKS A PINARD</h1>
            {!connect && <p>Inscription</p>}
        </header>
    );
};

export default Header;

//TODO: Disconnect