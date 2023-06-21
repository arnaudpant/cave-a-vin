import Rack from "./Rack";
import { racks } from "../api/racks";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ContainerRacks = ({ userId }) => {
    const [listRacks, setListRacks] = useState([]);

    useEffect(() => {
        const tempRacks = [...listRacks];
        racks.map((rack) => {
            rack.id === userId && tempRacks.push(rack);
        });
        setListRacks(tempRacks);
    }, [userId]);


    return (
        <div className="container">
            <h3>Liste des racks</h3>
            <div className="box-racks">
                {listRacks &&
                    listRacks.map((rack, index) => (
                        <Rack bottles={rack.bottles} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default ContainerRacks;
