"use client";

import { Karta } from "@/types";
import { KartaKomponenta } from "./karta";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface TablaProps{
    karte: Karta[];
}

export const Tabla = ({
    karte
}:TablaProps) =>{

    const handlePress = () =>{
        karte.shift();
    }


    return(
        <div className="w-full bg-green-800 h-1/4 flex items-center justify-center">
                {
                    karte.map((karta) =>(
                             <KartaKomponenta id={-1} value={karta.value} shape={karta.shape} className="absolute" disabled={false} hidden={false} handlePress={handlePress}/>
                    ))
                  
                }
        </div>
    )
   
}