
import Spil from "@/cardData"
import { Level1 } from "./level-1"
import { Tabla } from "./tabla"

export const Ploca = () =>{
    let spil = Spil

    const IspartajSpil = () =>{
        let currentIndex = spil.length, randomIndex;

        while(currentIndex>0){
            randomIndex = Math.floor(Math.random() * currentIndex );

            currentIndex--;

            [spil[currentIndex], spil[randomIndex]] = [ spil[randomIndex], spil[currentIndex]];
        }
        return spil;
    }

    return(
        <div className="w-full h-3/4">
            <Level1 ispartanSpil={IspartajSpil()}/>
            <Tabla />
        </div>
    )
}