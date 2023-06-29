// eslint-disable-next-line react/prop-types
const FavListBottles = ({ state, bottles }) => {

    return (
        <>
            <h2 className="listFav">Bouteilles favorites:</h2>
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    state.map((bottleFav, index) => {
                        // eslint-disable-next-line react/prop-types
                        const nbrBottles = bottles.filter(bottle => bottle.domaine === bottleFav.domaine)
                        return <li key={index}>{bottleFav.domaine}: {nbrBottles.length} bouteilles</li>;
                    })
                }
            </ul>
        </>
    );
};

export default FavListBottles;
