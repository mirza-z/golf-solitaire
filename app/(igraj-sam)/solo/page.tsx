"use client";

import Spil from "@/cardData"
import { Level1 } from "./_components/level-1" 
import { Level } from "@/types"
import { useEffect, useState } from "react";

const IgrajSam = () =>{
    const [ spil, setSpil ] = useState(Spil);

    useEffect(() =>{
        setSpil(Spil);
    }, [spil])

    const karte=  spil.slice(0, 30);

    const updateLvl: Level[] = [
        { id: 0, value: karte[0].value, shape: karte[0].shape, className: "absolute top-[150px] left-[calc(50%-24px)] z-[10]", hidden: false, disabled: false },
        { id: 1, value: karte[1].value, shape: karte[1].shape, className: "absolute top-[165px] left-[calc(50%-48px)] z-[8]", hidden: false, disabled: true },
        { id: 2, value: karte[2].value, shape: karte[2].shape, className: "absolute top-[165px] left-[calc(50%-0px)] z-[8]", hidden: false, disabled: true},
        { id: 3, value: karte[3].value, shape: karte[3].shape, className: "absolute top-[180px] left-[calc(50%-72px)] z-[6]", hidden: false, disabled: true},
        { id: 4, value: karte[4].value, shape: karte[4].shape, className: "absolute top-[180px] left-[calc(50%-24px)] z-[6]", hidden: false, disabled: true },
        { id: 5, value: karte[5].value, shape: karte[5].shape, className: "absolute top-[180px] left-[calc(50%+24px)] z-[6]", hidden: false, disabled: true},
        { id: 6, value: karte[6].value, shape: karte[6].shape, className: "absolute top-[195px] left-[calc(50%-96px)] z-[4]", hidden: false, disabled: true},
        { id: 7, value: karte[7].value, shape: karte[7].shape, className: "absolute top-[195px] left-[calc(50%-48px)] z-[4]", hidden: false, disabled: true},
        { id: 8, value: karte[8].value, shape: karte[8].shape, className: "absolute top-[195px] left-[calc(50%-0px)] z-[4]", hidden: false, disabled: true},
        { id: 9, value: karte[9].value, shape: karte[9].shape, className: "absolute top-[195px] left-[calc(50%+48px)] z-[4]", hidden: false,  disabled: true},
    
        { id: 10, value: karte[10].value, shape: karte[10].shape, className: "absolute top-[275px] left-[calc(26%-28px)] z-[4]", hidden:false, disabled:true},
        { id: 11, value: karte[11].value, shape: karte[11].shape, className:"absolute top-[290px] left-[calc(26%-48px)] z-[6]", hidden: false, disabled: true},
        { id: 12, value: karte[12].value, shape: karte[12].shape, className:"absolute top-[290px] left-[calc(26%-0px)] z-[6]", hidden: false, disabled: true},
        { id: 13, value: karte[13].value, shape: karte[13].shape, className:"absolute top-[305px] left-[calc(26%-72px)] z-[8]", hidden: false, disabled: true},
        { id: 14, value: karte[14].value, shape: karte[14].shape, className:"absolute top-[305px] left-[calc(26%-24px)] z-[8]", hidden: false, disabled: true},
        { id: 15, value: karte[15].value, shape: karte[15].shape, className:"absolute top-[305px] left-[calc(26%+24px)] z-[8]", hidden: false, disabled: true},
        { id: 16, value: karte[16].value, shape: karte[16].shape, className:"absolute top-[320px] left-[calc(26%-96px)] z-[10]", hidden: false, disabled: false},
        { id: 17, value: karte[17].value, shape: karte[17].shape, className:"absolute top-[320px] left-[calc(26%-48px)] z-[10]", hidden: false, disabled: false},
        { id: 18, value: karte[18].value, shape: karte[18].shape, className:"absolute top-[320px] left-[calc(26%-0px)] z-[10]", hidden: false, disabled: false},
        { id: 19, value: karte[19].value, shape: karte[19].shape, className:"absolute top-[320px] left-[calc(26%+48px)] z-[10]", hidden: false, disabled: false},
    
        { id: 20, value: karte[20].value, shape: karte[20].shape, className: "absolute top-[275px] left-[calc(76%-24px)] z-[4]", hidden: false, disabled: true},
        { id: 21, value: karte[24].value, shape: karte[21].shape, className: "absolute top-[290px] left-[calc(76%-48px)] z-[6]", hidden: false, disabled: true},
        { id: 22, value: karte[22].value, shape: karte[22].shape, className: "absolute top-[290px] left-[calc(76%-0px)] z-[6]", hidden: false, disabled: true},
        { id: 23, value: karte[23].value, shape: karte[23].shape, className: "absolute top-[305px] left-[calc(76%-72px)] z-[8]", hidden: false, disabled: true},
        { id: 24, value: karte[24].value, shape: karte[24].shape, className: "absolute top-[305px] left-[calc(76%-24px)] z-[8]", hidden: false, disabled: true},
        { id: 25, value: karte[25].value, shape: karte[25].shape, className: "absolute top-[305px] left-[calc(76%+24px)] z-[8]", hidden: false, disabled: true},
        { id: 26, value: karte[26].value, shape: karte[26].shape, className: "absolute top-[320px] left-[calc(76%-96px)] z-[10]", hidden: false, disabled: false},
        { id: 27, value: karte[27].value, shape: karte[27].shape, className: "absolute top-[320px] left-[calc(76%-48px)] z-[10]", hidden: false, disabled: false},
        { id: 28, value: karte[28].value, shape: karte[28].shape, className: "absolute top-[320px] left-[calc(76%-0px)] z-[10]", hidden: false, disabled: false},
        { id: 29, value: karte[29].value, shape: karte[29].shape, className: "absolute top-[320px] left-[calc(76%+48px)] z-[10]", hidden: false, disabled: false},
    ];

    return(
        <div className="w-full h-full">
            <Level1 updateLvl={updateLvl} spil={spil}/>
        </div>
    )
}

export default IgrajSam;