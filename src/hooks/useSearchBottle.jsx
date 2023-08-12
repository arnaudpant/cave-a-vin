import { useEffect, useState } from "react";

const useSearchBottle = ({ racksUserConnect, searchBottle }) => {
    const filteredBottleIds = racksUserConnect
        .flatMap((rack) => rack.bottles)
        .filter((bottle) => bottle.aoc === searchBottle)
        .map((bottle) => bottle.id);

    return { filteredBottleIds };
};

export default useSearchBottle;
