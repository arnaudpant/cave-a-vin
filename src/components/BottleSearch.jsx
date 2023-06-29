import { useState } from "react";

// eslint-disable-next-line react/prop-types
const BottleSearch = ({handleSubmit}) => {
    const [searchBottle, setSearchBottle] = useState("");

        
        const handleChange = (e) => {
            setSearchBottle(e.target.value)
        }

    return (
        <div className="form-bottle">
            <form onSubmit={(e)=> {
                e.preventDefault()
                handleSubmit(searchBottle)}}>
                <label>Bouteille: </label>
                <input
                    type="text"
                    name="emailInput"
                    onChange={handleChange}
                />
                <input type="submit" value="Rechercher" />
            </form>
        </div>
    );
};

export default BottleSearch;
