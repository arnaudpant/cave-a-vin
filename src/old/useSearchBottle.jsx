import { useEffect, useState } from "react";

const useSearchBottle = ({ listFullBottles, searchBottle }) => {
    const filteredBottleIds = listFullBottles
        .flatMap((rack) => rack.bottles)
        .filter((bottle) => bottle.aoc === searchBottle)
        .map((bottle) => bottle.id);

    return { filteredBottleIds };
};

export default useSearchBottle;
