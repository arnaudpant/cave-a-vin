import { useRef, useState } from "react";
import useSearchBottle from "../hooks/useSearchBottle";

const BottleSearch = ({ racksUserConnect }) => {
    const [bottleInInput, setBottleInInput] = useState("");
    const [searchBottle, setSearchBottle] = useState("");
    const inputRef = useRef();

    const { filteredBottleIds } = useSearchBottle({
        racksUserConnect,
        searchBottle,
    });

    const handleChange = (e) => {
        setBottleInInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchBottle(bottleInInput);
        inputRef.current.value = "";
    };

    return (
        <div className="form-bottle">
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <label>Bouteille: </label>
                <input
                    type="text"
                    name="emailInput"
                    ref={inputRef}
                    onChange={handleChange}
                />
                <input type="submit" value="Rechercher" />
            </form>
            {filteredBottleIds.length > 0 && (
                <p>
                    Nombre de bouteilles {searchBottle} en stock:{" "}
                    {filteredBottleIds.length}
                </p>
            )}
        </div>
    );
};

export default BottleSearch;
