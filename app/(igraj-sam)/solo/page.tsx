"use client";

import Spil from "@/cardData"
import { Level } from "@/types"
import { useEffect, useState } from "react";

import { Level1 } from "./_components/level-1" 
import { Level2 } from "./_components/level-2";
import { Level3 } from "./_components/level-3";

const IgrajSam = () =>{
    const [ spil, setSpil ] = useState(Spil);
    const [ level, setLevel] = useState(1);
    const [ updateLevel3, setUpdateLevel3] = useState<Level[]>([]);

    const ispartaj = () =>{
        let currentIndex = spil.length, randomIndex;

        while(currentIndex>0){
            randomIndex = Math.floor(Math.random() * currentIndex );

            currentIndex--;

            [spil[currentIndex], spil[randomIndex]] = [ spil[randomIndex], spil[currentIndex]];
        }
    }

    ispartaj();

    useEffect(() =>{
    }, []);

    let karte = spil.slice(0, 30);

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

    const updateLvl2: Level[] = [
        { id: 0, value: karte[0].value, shape: karte[0].shape, className: "absolute top-[155px] left-[calc(50%-52px)] z-[10]", hidden: false, disabled: false },
        { id: 1, value: karte[1].value, shape: karte[1].shape, className: "absolute top-[155px] left-[calc(50%+4px)] z-[10]", hidden: false, disabled: false },

        { id: 2, value: karte[2].value, shape: karte[2].shape, className: "absolute top-[165px] left-[calc(50%-24px)] z-[8]", hidden: false, disabled: true},

        { id: 3, value: karte[3].value, shape: karte[3].shape, className: "absolute top-[190px] left-[calc(50%-100px)] z-[6]", hidden: false, disabled: true},
        { id: 4, value: karte[4].value, shape: karte[4].shape, className: "absolute top-[190px] left-[calc(50%-48px)] z-[6]", hidden: false, disabled: true },
        { id: 5, value: karte[5].value, shape: karte[5].shape, className: "absolute top-[190px] left-[calc(50%-0px)] z-[6]", hidden: false, disabled: true},
        { id: 6, value: karte[6].value, shape: karte[6].shape, className: "absolute top-[190px] left-[calc(50%+52px)] z-[6]", hidden: false, disabled: true},

        { id: 7, value: karte[7].value, shape: karte[7].shape, className: "absolute top-[225px] left-[calc(50%-124px)] z-[8]", hidden: false, disabled: false},
        { id: 8, value: karte[8].value, shape: karte[8].shape, className: "absolute top-[225px] left-[calc(50%-76px)] z-[8]", hidden: false, disabled: false},
        { id: 9, value: karte[9].value, shape: karte[9].shape, className: "absolute top-[225px] left-[calc(50%-24px)] z-[8]", hidden: false,  disabled: false},
        { id: 10, value: karte[10].value, shape: karte[10].shape, className: "absolute top-[225px] left-[calc(50%+28px)] z-[8]", hidden:false, disabled: false},
        { id: 11, value: karte[11].value, shape: karte[11].shape, className:"absolute top-[225px] left-[calc(50%+76px)] z-[8]", hidden: false, disabled: false},

        { id: 12, value: karte[12].value, shape: karte[12].shape, className:"absolute top-[255px] left-[calc(50%-148px)] z-[6]", hidden: false, disabled: true},
        { id: 13, value: karte[13].value, shape: karte[13].shape, className:"absolute top-[255px] left-[calc(50%-100px)] z-[6]", hidden: false, disabled: true},
        { id: 14, value: karte[14].value, shape: karte[14].shape, className:"absolute top-[255px] left-[calc(50%-48px)] z-[6]", hidden: false, disabled: true},
        { id: 15, value: karte[15].value, shape: karte[15].shape, className:"absolute top-[255px] left-[calc(50%+0px)] z-[6]", hidden: false, disabled: true},
        { id: 16, value: karte[16].value, shape: karte[16].shape, className:"absolute top-[255px] left-[calc(50%+52px)] z-[6]", hidden: false, disabled: true},
        { id: 17, value: karte[17].value, shape: karte[17].shape, className:"absolute top-[255px] left-[calc(50%+98px)] z-[6]", hidden: false, disabled: true},

        { id: 18, value: karte[18].value, shape: karte[18].shape, className:"absolute top-[285px] left-[calc(50%-124px)] z-[6]", hidden: false, disabled: true},
        { id: 19, value: karte[19].value, shape: karte[19].shape, className:"absolute top-[285px] left-[calc(50%-24px)] z-[6]", hidden: false, disabled: true},
        { id: 20, value: karte[20].value, shape: karte[20].shape, className: "absolute top-[285px] left-[calc(50%+76px)] z-[6]", hidden: false, disabled: true},

        { id: 21, value: karte[24].value, shape: karte[21].shape, className: "absolute top-[295px] left-[calc(50%-153px)] z-[8]", hidden: false, disabled: false},
        { id: 22, value: karte[22].value, shape: karte[22].shape, className: "absolute top-[295px] left-[calc(50%-97px)] z-[8]", hidden: false, disabled: false},
        { id: 23, value: karte[23].value, shape: karte[23].shape, className: "absolute top-[295px] left-[calc(50%-52px)] z-[8]", hidden: false, disabled: false},
        { id: 24, value: karte[24].value, shape: karte[24].shape, className: "absolute top-[295px] left-[calc(50%+4px)] z-[8]", hidden: false, disabled: false},
        { id: 25, value: karte[25].value, shape: karte[25].shape, className: "absolute top-[295px] left-[calc(50%+49px)] z-[8]", hidden: false, disabled: false},
        { id: 26, value: karte[26].value, shape: karte[26].shape, className: "absolute top-[295px] left-[calc(50%+103px)] z-[8]", hidden: false, disabled: false},
    ];

    const handleKljuc = () =>{
        let mjesta = [16,17,18,21,22,23,26,27];
        let x = Math.floor(Math.random() * mjesta.length);
        const noveKarte = [
            ...karte.slice(0, mjesta[x]),
            {value: -1, shape: "club"},
            ...karte.slice(mjesta[x])
        ];
        console.log(noveKarte);

        const update: Level[] = [
            { id: 0, value: noveKarte[0].value, shape: noveKarte[0].shape, className: "absolute top-[150px] left-[calc(50%-24px)] z-[8]", hidden: false, disabled: false },
    
            { id: 1, value: noveKarte[1].value, shape: noveKarte[1].shape, className: "absolute top-[210px] left-[calc(50%-70px)] z-[8]", hidden: false, disabled: false },
            { id: 2, value: noveKarte[2].value, shape: noveKarte[2].shape, className: "absolute top-[210px] left-[calc(50%-24px)] z-[8]", hidden: false, disabled: false},
            { id: 3, value: noveKarte[3].value, shape: noveKarte[3].shape, className: "absolute top-[210px] left-[calc(50%+22px)] z-[8]", hidden: false, disabled: false},
    
            { id: 4, value: noveKarte[4].value, shape: noveKarte[4].shape, className: "absolute top-[270px] left-[calc(50%-116px)] z-[8]", hidden: false, disabled: false},
            { id: 5, value: noveKarte[5].value, shape: noveKarte[5].shape, className: "absolute top-[270px] left-[calc(50%-70px)] z-[8]", hidden: false, disabled: false},
            { id: 6, value: noveKarte[6].value, shape: noveKarte[6].shape, className: "absolute top-[270px] left-[calc(50%-24px)] z-[8]", hidden: false, disabled: true, zakljucana: true},
            { id: 7, value: noveKarte[7].value, shape: noveKarte[7].shape, className: "absolute top-[270px] left-[calc(50%+22px)] z-[8]", hidden: false, disabled: false},
            { id: 8, value: noveKarte[8].value, shape: noveKarte[8].shape, className: "absolute top-[270px] left-[calc(50%+68px)] z-[8]", hidden: false, disabled: false},
    
            { id: 9, value: noveKarte[9].value, shape: noveKarte[9].shape, className: "absolute top-[330px] left-[calc(50%-162px)] z-[8]", hidden: false,  disabled: false},
            { id: 10, value: noveKarte[10].value, shape: noveKarte[10].shape, className: "absolute top-[330px] left-[calc(50%-116px)] z-[8]", hidden:false, disabled: false},
            { id: 11, value: noveKarte[11].value, shape: noveKarte[11].shape, className:"absolute top-[330px] left-[calc(50%-70px)] z-[8]", hidden: false, disabled: false},
            { id: 12, value: noveKarte[12].value, shape: noveKarte[12].shape, className:"absolute top-[330px] left-[calc(50%-24px)] z-[8]", hidden: false, disabled: false},
            { id: 13, value: noveKarte[13].value, shape: noveKarte[13].shape, className:"absolute top-[330px] left-[calc(50%+22px)] z-[8]", hidden: false, disabled: false},
            { id: 14, value: noveKarte[14].value, shape: noveKarte[14].shape, className:"absolute top-[330px] left-[calc(50%+68px)] z-[8]", hidden: false, disabled: false},
            { id: 15, value: noveKarte[15].value, shape: noveKarte[15].shape, className:"absolute top-[330px] left-[calc(50%+114px)] z-[8]", hidden: false, disabled: false},
    
            { id: 16, value: noveKarte[16].value, shape: noveKarte[16].shape, className:"absolute top-[180px] left-[calc(50%-50px)] z-[6]", hidden: false, disabled: true},
            { id: 17, value: noveKarte[17].value, shape: noveKarte[17].shape, className:"absolute top-[180px] left-[calc(50%+2px)] z-[6]", hidden: false, disabled: true},
    
            { id: 18, value: noveKarte[18].value, shape: noveKarte[18].shape, className:"absolute top-[240px] left-[calc(50%-96px)] z-[6]", hidden: false, disabled: true},
            { id: 19, value: noveKarte[19].value, shape: noveKarte[19].shape, className:"absolute top-[240px] left-[calc(50%-50px)] z-[6]", hidden: false, disabled: true},
            { id: 20, value: noveKarte[20].value, shape: noveKarte[20].shape, className: "absolute top-[240px] left-[calc(50%+2px)] z-[6]", hidden: false, disabled: true},
            { id: 21, value: noveKarte[24].value, shape: noveKarte[21].shape, className: "absolute top-[240px] left-[calc(50%+48px)] z-[6]", hidden: false, disabled: true},
    
            { id: 22, value: noveKarte[22].value, shape: noveKarte[22].shape, className: "absolute top-[300px] left-[calc(50%-142px)] z-[6]", hidden: false, disabled: true},
            { id: 23, value: noveKarte[23].value, shape: noveKarte[23].shape, className: "absolute top-[300px] left-[calc(50%-96px)] z-[6]", hidden: false, disabled: true},
            { id: 24, value: noveKarte[24].value, shape: noveKarte[24].shape, className: "absolute top-[300px] left-[calc(50%-50px)] z-[6]", hidden: false, disabled: true},
            { id: 25, value: noveKarte[25].value, shape: noveKarte[25].shape, className: "absolute top-[300px] left-[calc(50%+2px)] z-[6]", hidden: false, disabled: true},
            { id: 26, value: noveKarte[26].value, shape: noveKarte[26].shape, className: "absolute top-[300px] left-[calc(50%+48px)] z-[6]", hidden: false, disabled: true},
            { id: 27, value: noveKarte[27].value, shape: noveKarte[27].shape, className: "absolute top-[300px] left-[calc(50%+94px)] z-[6]", hidden: false, disabled: true},
        ];

        setUpdateLevel3([...update]);
        console.log(updateLevel3)
    }

    const handleLevel = () =>{
        ispartaj();
        setLevel(level+1);
        if(level == 2){
            handleKljuc();
        }
        console.log(level)
    }

    return(
        <div className="w-full h-full select-none">
            <h2 className="absolute top-5 left-[12%]">ZA SLJEDECI LVL PRELISTAJ SVE KARTE</h2>
            { level==1 && <Level1 updateLvl={updateLvl} spil={spil} handleLevel={handleLevel}/> }
            { level==2 && <Level2 updateLvl={updateLvl2} spil={spil} handleLevel={handleLevel}/>}
            { level==3 && <Level3 updateLvl={updateLevel3} spil={spil} handleLevel={handleLevel}/>}
            { level>3 && <h1>Pravi se. Restartuj da ponovo igras</h1>}
        </div>
    )
}

export default IgrajSam;