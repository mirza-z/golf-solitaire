"use client"

import Spil from "@/cardData"
import { Level1 } from "./level-1"
import { Tabla } from "./tabla"
import { Karta } from "@/types"
import { useState } from "react"


export const Ploca = () =>{
    let spil = Spil

    const handleSpil = () =>{
        let currentIndex = spil.length, randomIndex;

        while(currentIndex>0){
            randomIndex = Math.floor(Math.random() * currentIndex );

            currentIndex--;

            [spil[currentIndex], spil[randomIndex]] = [ spil[randomIndex], spil[currentIndex]];
        }
        return spil;
    } 
    const [ ispartan, setIspartan ] = useState<Karta[]>(handleSpil())

    return(
        
        <div className="w-full h-3/4">
            <Level1 ispartanSpil={ispartan} />
            <Tabla />
        </div>
    )
}