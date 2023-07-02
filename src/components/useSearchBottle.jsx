import { useState } from "react";

const useSearchBottle = ({listFullBottles, searchBottle}) => {

    const [showBottlesSeach, setShowBottlesSearch] = useState(1)

    
    //console.log('listFullBottles', listFullBottles)
    //console.log('searchBottle', searchBottle)

    return {showBottlesSeach}

};

export default useSearchBottle;