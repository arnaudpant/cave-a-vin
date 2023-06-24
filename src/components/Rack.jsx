import { useReducer, useRef, useState } from "react";
import ModalBottle from "./ModalBottle";

// eslint-disable-next-line react/prop-types
const Rack = ({ name, bottles, columns, rows }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalBottle, setmodalBottle] = useState();

    // useRef
    const nbrBottles = useRef(calculNbrBottles());

    function calculNbrBottles() {
        let bottlesInRack = 0;
        for (let bottle of bottles) {
            if (bottle.id !== "") {
                bottlesInRack += 1;
            }
        }
        return bottlesInRack; 
    }

    const handleModal = (bottle) => {
        setActiveModal(true);
        setmodalBottle(bottle);
    };

    // useReducer
    function reducerFavoris (state, action) {
        //console.log(state)
        switch (action.type) {
            case 'ADD_FAVORIS': {

                const bottleInFav = {
                    type: action.favBottle.type,
                    domaine: action.favBottle.domaine,
                    aoc: action.favBottle.aoc,
                }

                return [...state, bottleInFav]
            }
        }
        throw Error('Unknown action: ' + action.type); 
    }
    
    const [state, dispatch] = useReducer(reducerFavoris, [])
    console.log(state);

    function handleFavoris (e, bottle) {
        e.stopPropagation()
        dispatch({type: 'ADD_FAVORIS', favBottle: bottle}  )
    }


    return (
        <>
            <h4>
                Rack {name} : {nbrBottles.current} bouteilles{" "}
            </h4>
            <div
                className="rack"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 100px)`,
                    gridTemplateRows: `repeat(${rows}, 80px)`,
                }}
            >
                {activeModal && (
                    <ModalBottle
                        setActiveModal={setActiveModal}
                        modalBottle={modalBottle}
                        handleFavoris={handleFavoris}
                    />
                )}

                {
                    // eslint-disable-next-line react/prop-types
                    bottles.map((bottle, index) => (
                        <div
                            className="bottle"
                            key={index}
                            onClick={() => handleModal(bottle)}
                        >
                            <div
                                className="bottle-color"
                                style={{
                                    backgroundColor:
                                        bottle.type === "rouge"
                                            ? "#914159"
                                            : bottle.type === "blanc"
                                            ? "#FFFDD0"
                                            : bottle.type === "rose"
                                            ? "#F8C3CD"
                                            : bottle.type === "petillant"
                                            ? "#FDEE00"
                                            : null,
                                }}
                            ></div>
                            <p>{bottle.aoc}</p>
                            <p>{bottle.millesime}</p>
                        </div>
                    ))
                }
            </div>
            {state.length > 0 && <div className="listFav">Bouteilles favorites:</div>}
            
        </>
    );
};

export default Rack;
