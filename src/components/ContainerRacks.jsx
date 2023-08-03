import { useEffect, useState } from "react";
//import useRacks from "../old/useRacks";
//import useFetch from "../hooks/useFetch";
import Rack from "./Rack";
import BottleSearch from "./BottleSearch";

const ContainerRacks = ({ userId }) => {
    const [dataRacks, setDataRacks] = useState([]);
    const [listRacks, setListRacks] = useState([]);

    /* Hook personnalisé */

    //const { listRacks } = useRacks({ dataRacks, userId });

    /* FETCH API Liste des racks via useFetch PB */
    // FIXME:  A voir pour utiliser le hook personnalise

    // const { data, loading, error } = useFetch("src/api/racks.json");

    // FETCH API Liste de tous les racks
    // TODO: Mettre le fetch dans App
    useEffect(() => {
        const fetchRacks = async () => {
            const url = "src/api/racks.json";

            try {
                const response = await fetch(url);
                const racksJson = await response.json();
                setDataRacks(racksJson.racks);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRacks();
    }, []);

    // Filtrer que les racks de l'utilisateur
    useEffect(() => {
        const tempRacks = [...dataRacks].filter((rack) => rack.id === userId);
        setListRacks(tempRacks);

        return () => {
            setListRacks([]);
        };
    }, [dataRacks, userId]);

    return (
        <>
            <div className="container">
                <BottleSearch listFullBottles={listRacks} />
                <h2>Liste des racks</h2>
                <div className="box-racks">
                    {listRacks &&
                        listRacks.map((rack, index) => (
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
