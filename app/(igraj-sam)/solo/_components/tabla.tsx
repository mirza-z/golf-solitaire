"use client";

import { Karta } from "@/types";
import { KartaKomponenta } from "./karta";
import { useState } from "react";

interface TablaProps{
    karte: Karta[];
    handleKarteNaTabli: (karta: Karta[])=>void;
    score: number;
    comboKarta: Karta;
    combo: number;
}

export const Tabla = ({
    karte,
    handleKarteNaTabli,
    score,
    comboKarta,
    combo
}:TablaProps) =>{

    const [ num, setNum ] = useState(1);

    const handlePress = (id:number) =>{
        karte.pop();
        setNum(num+1);
        handleKarteNaTabli(karte);
    }

    const handleCombo = () =>{

    }


    return(
        <div className="w-full bg-green-800 h-1/4 flex items-center justify-center">
            <div className="relative left-[-50px] border-2 border-black h-14 w-10 rounded-sm text-center flex justify-center items-center font-extrabold text-[20px] bg-[url('../public/cards.png')] bg-contain bg-no-repeat bg-center">
                {karte.length-1}
            </div>

                {
                    karte.map((karta) =>(
                             <KartaKomponenta key={1} id={-1} value={karta.value} shape={karta.shape} className="absolute" disabled={false} hidden={false} handlePress={handlePress}/>
                    ))
                  
                }

                {
                    combo>3 && <KartaKomponenta key={1} id={-1} value={comboKarta.value} shape={comboKarta.shape} className="absolute left-[58%]" disabled={false} hidden={false} handlePress={handleCombo}/>
                }
            <div className="absolute top-[93%] left-[10%] text-[20px] font-bold">
                <h1>Score: {score}</h1>
            </div>

            <div className="absolute top-[93%] right-[10%] text-[20px] font-bold">
                <h1>Combo: {combo-1}</h1>
            </div>
        </div>
    )
   
}