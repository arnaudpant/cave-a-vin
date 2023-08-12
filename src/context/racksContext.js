import { createContext, useContext } from "react";

const racksContext = createContext(undefined);

export default racksContext;

/**
 * HOOK PERSONNALISE POUR TEST
 */
export function useRacksContext() {
    const dataRacks = useContext(racksContext);

    if (dataRacks === undefined) {
        throw new Error('useRacksContext doit etre utilise avec racksContext')
    }

    return dataRacks
}

/** 
* PROVIDER PERSONNALISE
*/

export function RackProvider(children){
    
}
