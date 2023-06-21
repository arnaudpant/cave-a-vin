import { useState } from "react";
import ModalBottle from "./ModalBottle";

// eslint-disable-next-line react/prop-types
const Rack = ({ name, bottles, columns, rows }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalBottle, setmodalBottle] = useState();

    const handleModal = (bottle) => {
        setActiveModal(true);
        setmodalBottle(bottle);
    };

    return (
        <>
            <h4>Rack {name}</h4>
            <div
                className="rack"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 100px)`,
                    gridTemplateRows: `repeat(${rows}, 80px)`,
                }}
            >
                {activeModal && <ModalBottle setActiveModal={setActiveModal} modalBottle={modalBottle} /> }

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
        </>
    );
};

export default Rack;
