export default function reducerFavoris(state, action) {
    switch (action.type) {
        case "ADD_FAVORIS": {
            const bottleInFav = {
                type: action.favBottle.type,
                domaine: action.favBottle.domaine,
                aoc: action.favBottle.aoc,
            };
            return [...state, bottleInFav];
        }
        default:
            return state
    }
}

