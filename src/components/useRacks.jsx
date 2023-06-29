import { useEffect, useState } from "react";


const useRacks = ({dataRacks, userId}) => {

    const [listRacks, setListRacks] = useState([]);

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
    return {listRacks}
};

export default useRacks;