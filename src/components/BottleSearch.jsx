import { useEffect, useRef, useState } from "react";
import useSearchBottle from "../old/useSearchBottle";

const BottleSearch = ({ listFullBottles }) => {
    const [bottleInInput, setBottleInInput] = useState("");
    const [searchBottle, setSearchBottle] = useState("");
    const inputRef = useRef();


    const { showBottlesSearch } = useSearchBottle({listFullBottles, searchBottle});
    
    
    // Logique saisie dans l'input et submit
    const handleChange = (e) => {
        setBottleInInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchBottle(bottleInInput);
        inputRef.current.value = "";
    };
    //TODO: Alignement et modif BTN Search

    return (
        <div className="form-bottle">
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <label>Bouteille: </label>
                <input type="text" name="emailInput" ref={inputRef} onChange={handleChange} />
                <input type="submit" value="Rechercher" />
            </form>
            {showBottlesSearch.length > 0 && <p>Nombre de bouteilles {searchBottle} en stock: {showBottlesSearch.length}</p>}
        </div>
    );
};

export default BottleSearch;
