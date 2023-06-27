

// eslint-disable-next-line react/prop-types
const Header = ({signIn}) => {
    return (
        <header>
            <h1>RACKS A PINARD</h1>
            {!signIn && <p>Inscription</p>}
        </header>
    );
};

export default Header;