import { useReducer, useRef, useState } from "react";
import ModalBottle from "./ModalBottle";
import FavListBottles from "./FavListBottles";


// pourquoi utiliser un ref pour le nombre de bouteilles ?
// performance revoir le lazy loading dans ce cas
// pourquoi utiliser une fonction pour lea props bottles ?
// le reducer doit etre externe au composant
// le reducer doit etre dans un fichier à part


// eslint-disable-next-line react/prop-types
const Rack = ({ name, bottles, columns, rows }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalBottle, setModalBottle] = useState(null);

    // Affichage nombre de bouteilles dans le rack avec
    // useRef
    const nbrBottles = useRef(calculNbrBottles());

    function calculNbrBottles() {
        // eslint-disable-next-line react/prop-types
        return bottles.filter((bottle) => bottle.id !== "").length;
    }

    // Activation du modal
    const openModal = () => setActiveModal(true);
    const closeModal = () => setActiveModal(false);

    const handleModal = (bottle) => {
        setModalBottle(bottle);
        openModal();
    };

    // useReducer pour afficher les bouteilles misent en favoris
    function reducerFavoris(state, action) {
        switch (action.type) {
            case "ADD_FAVORIS": {
                const bottleInFav = {
                    type: action.favBottle.type,
                    domaine: action.favBottle.domaine,
                    aoc: action.favBottle.aoc,
                };

                return [...state, bottleInFav];
            }
        }
        throw Error("Unknown action: " + action.type);
    }

    const [state, dispatch] = useReducer(reducerFavoris, []);

    function handleFavoris(bottle) {
        dispatch({ type: "ADD_FAVORIS", favBottle: bottle });
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
                    gridTemplateRows: `repeat(${rows}, 100px)`,
                }}
            >
                {activeModal && (
                    <ModalBottle
                        closeModal={closeModal}
                        activeModal={activeModal}
                    >
                        <h2>Vin {modalBottle.type}</h2>
                        <h3>{modalBottle.aoc}</h3>
                        <div className="rack-modal__infos">
                            <p>{modalBottle.domaine}</p>
                            <p>{modalBottle.millesime}</p>
                            <p>Date achat: {modalBottle.achat}</p>
                        </div>
                        <button
                            className="rack-modal__btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleFavoris(modalBottle);
                            }}
                        >
                            Favoris
                        </button>
                    </ModalBottle>
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
                            <p className="millesime">{bottle.millesime}</p>
                        </div>
                    ))
                }
            </div>
            {state.length > 0 && (
                <FavListBottles state={state} bottles={bottles} />
            )}
        </>
    );
};

export default Rack;
