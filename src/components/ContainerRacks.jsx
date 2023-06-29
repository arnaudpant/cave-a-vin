import Rack from "./Rack";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Header from "./Header";
import BottleSearch from "./BottleSearch";

// eslint-disable-next-line react/prop-types
const ContainerRacks = ({ userId }) => {
    // Liste de tous les racks
    const [dataRacks, setDataRacks] = useState([]);
    // Racks filtrés par user
    const [listRacks, setListRacks] = useState([]);

    // Recupération de tous les racks de l'api
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

    // Tri des racks pour affichage uniquement de ceux de l'user connecté
    useEffect(() => {
        const tempRacks = [];
        [...dataRacks].map((rack) => {
            rack.id === userId && tempRacks.push(rack);
        });
        setListRacks(tempRacks);

        return () => {
            setListRacks([]);
        };
    }, [dataRacks, userId]);

    const handleSubmit = (searchBottle) => {
        //e.preventDefault()
        console.log(searchBottle)
        }


    return (
        <>
            <Header signIn={true} />
            <div className="container">
                <BottleSearch handleSubmit={handleSubmit} />
                <h3>Liste des racks</h3>
                <div className="box-racks">
                    <ErrorBoundary
                        key={userId}
                        // eslint-disable-next-line react/no-unescaped-entities
                        fallback={<div> Une erreur s'est produite </div>}
                    >
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
                    </ErrorBoundary>
                </div>
            </div>
        </>
    );
};

export default ContainerRacks;
