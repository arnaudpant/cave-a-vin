import { useEffect, useState } from "react";
import Rack from "./Rack";
import BottleSearch from "./BottleSearch";
import { useRacksContext } from "../context/racksContext";

const ContainerRacks = () => {
    /** CONTEXT */
    const [dataRacks, stateId ] = useRacksContext()
    /** STATES */
    const [racksUserConnect, setRacksUserConnect] = useState([]);

    /**
     * Affichage uniquement des racks du user connecté
     */
    useEffect(() => {
        setRacksUserConnect(
            [...dataRacks.racks].filter((rack) => rack.id === stateId)
        )
    }, [dataRacks]);


    return (
        <>
            <div className="container">
                <BottleSearch racksUserConnect={racksUserConnect} />
                <h2>Liste des racks</h2>
                <div className="box-racks">
                    {racksUserConnect &&
                        racksUserConnect.map((rack, index) => (
                            <Rack
                                key={index}
                                name={rack.name}
                                bottles={rack.bottles}
                                columns={rack.columns}
                                rows={rack.rows}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default ContainerRacks;
