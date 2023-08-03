const FavListBottles = ({ state, bottles }) => {
    return (
        <div className="list-fav">
            <h2>Bouteilles favorites:</h2>
            <ul>
                {state.map((bottleFav, index) => {
                    const nbrBottles = bottles.filter(
                        (bottle) => bottle.domaine === bottleFav.domaine
                    );
                    return (
                        <li key={index}>
                            {bottleFav.domaine}: {nbrBottles.length} bouteilles
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FavListBottles;
