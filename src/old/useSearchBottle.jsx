import { useEffect, useState } from "react";

const useSearchBottle = ({ listFullBottles, searchBottle }) => {
    const [showBottlesSearch, setShowBottlesSearch] = useState([]);

    useEffect(() => {
        let idBottles = [];
        searchBottle !== "" &&
        
            listFullBottles.forEach((rack) => {
                rack.bottles.map((bottle) => {
                    bottle.aoc === searchBottle
                        ? idBottles.push(bottle.id)
                        : null;
                });
                setShowBottlesSearch(idBottles);
            });
        return () => setShowBottlesSearch([]);
    }, [searchBottle]);


    return { showBottlesSearch };
};

export default useSearchBottle;
