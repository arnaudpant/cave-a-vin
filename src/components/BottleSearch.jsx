import { useState } from "react";
import useSearchBottle from "./useSearchBottle";

// eslint-disable-next-line react/prop-types
const BottleSearch = () => {
    const [bottleInInput, setBottleInInput] = useState("");
    const [searchBottle, setSearchBottle] = useState("");
    const {showBottlesSeach} = useSearchBottle(searchBottle);

        
        const handleChange = (e) => {
            setBottleInInput(e.target.value)
        }
        
        const handleSubmit = (e) => {
            e.preventDefault()
            setSearchBottle(bottleInInput)
            console.log(searchBottle);
            }

    return (
        <div className="form-bottle">
            <form onSubmit={(e)=> {
                handleSubmit(e)}}>
                <label>Bouteille: </label>
                <input
                    type="text"
                    name="emailInput"
                    onChange={handleChange}
                />
                <input type="submit" value="Rechercher" />
            </form>
            {showBottlesSeach && <p>Affichage bouteilles search</p>}
        </div>
    );
};

export default BottleSearch;
