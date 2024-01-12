"use client"

import { KartaKomponenta } from "./karta"
import { Karta, Level } from "@/types";
import { Tabla } from "./tabla";
import { useEffect, useState } from "react";

interface Level1Props{
    updateLvl: Level[];
    spil: Karta[];
}

export const Level1 = ({
    updateLvl,
    spil
}:Level1Props) =>{
    
    const [ lvl1, setLvl ] = useState(updateLvl);
    const [ karteNaTabli, setKarteNaTabli] = useState(spil.slice(30,52));
    const [ trenutnaKartaNaTabli, setTrenutnaKartaNaTabli] = useState(karteNaTabli[karteNaTabli.length-1].value);
    const [ score, setScore ] = useState(0);
    const [ combo, setCombo ] = useState(1);

    useEffect(() => {
      
    }, [])
    
    

    const handlePress = (id:number) =>{
        if((trenutnaKartaNaTabli+1 != updateLvl[id].value && trenutnaKartaNaTabli-1 != updateLvl[id].value) && 
            !( trenutnaKartaNaTabli==1 && updateLvl[id].value==13) && !( trenutnaKartaNaTabli==13 && updateLvl[id].value==1))
            
            { return; }

        
        const trenutniSpil = karteNaTabli;
        trenutniSpil.pop();
        const karta = { value: updateLvl[id].value, shape: updateLvl[id].shape};
        trenutniSpil.push(karta);
        setKarteNaTabli(trenutniSpil);
        
        setTrenutnaKartaNaTabli(karteNaTabli[karteNaTabli.length-1].value);
        setScore(score + combo*4400);
        setCombo(combo+1);

        updateLvl[id].hidden = true;
        if(id===0){
            updateLvl[1].disabled = false;
            updateLvl[2].disabled = false;
        }
        else if(id===1){
            updateLvl[3].disabled = false;
            if(lvl1[2].hidden === true)
                updateLvl[4].disabled = false;
        }
        else if(id===2){
            updateLvl[5].disabled = false;
            if(lvl1[1].hidden === true)
                updateLvl[4].disabled = false;
        }
        else if(id===3){
            updateLvl[6].disabled = false;
            if(lvl1[4].hidden === true)
                updateLvl[7].disabled = false;
        }
        else if(id===4){
            if(lvl1[3].hidden === true)
                updateLvl[7].disabled = false;
            if(lvl1[5].hidden === true)
                updateLvl[8].disabled = false;
        }
        else if(id===5){
            updateLvl[9].disabled = false;
            if(lvl1[4].hidden === true)
                updateLvl[8].disabled = false;
        }

        else if(id===16){
            if(lvl1[17].hidden === true)
                updateLvl[13].disabled = false;
        }
        else if(id===17){
            if(lvl1[16].hidden === true)
                updateLvl[13].disabled = false;
            if(lvl1[18].hidden === true)
                updateLvl[14].disabled = false;
        }
        else if(id===18){
            if(lvl1[17].hidden === true)
                updateLvl[14].disabled = false;
            if(lvl1[19].hidden === true)
                updateLvl[15].disabled = false;
        }
        else if(id===19){
            if(lvl1[18].hidden === true)
                updateLvl[15].disabled = false;
        }
        else if(id===13){
            if(lvl1[14].hidden === true)
                updateLvl[11].disabled = false;
        }
        else if(id===14){
            if(lvl1[13].hidden === true)
                updateLvl[11].disabled = false;
            if(lvl1[15].hidden === true)
                updateLvl[12].disabled = false;
        }
        else if(id===15){
            if(lvl1[14].hidden === true)
                updateLvl[12].disabled = false;
        }
        else if(id===11){
            if(lvl1[12].hidden === true)
                updateLvl[10].disabled = false;
        }
        else if(id===12){
            if(lvl1[11].hidden === true)
                updateLvl[10].disabled = false;
        }
        else if(id===26){
            if(lvl1[27].hidden === true)
                updateLvl[23].disabled = false;
        }
        else if(id===27){
            if(lvl1[26].hidden === true)
                updateLvl[23].disabled = false;
            if(lvl1[28].hidden === true)
                updateLvl[24].disabled = false;
        }
        else if(id===28){
            if(lvl1[27].hidden === true)
                updateLvl[24].disabled = false;
            if(lvl1[29].hidden === true)
                updateLvl[25].disabled = false;
        }
        else if(id===29){
            if(lvl1[28].hidden === true)
                updateLvl[25].disabled = false;
        }
        else if(id===23){
            if(lvl1[24].hidden === true)
                updateLvl[21].disabled = false;
        }
        else if(id===24){
            if(lvl1[23].hidden === true)
                updateLvl[21].disabled = false;
            if(lvl1[25].hidden === true)
                updateLvl[22].disabled = false;
        }
        else if(id===25){
            if(lvl1[24].hidden === true)
                updateLvl[22].disabled = false;
        }
        else if(id===21){
            if(lvl1[22].hidden === true)
                updateLvl[20].disabled = false;
        }
        else if(id===22){
            if(lvl1[21].hidden === true)
                updateLvl[20].disabled = false;
        }

        setLvl([...updateLvl]);
    }

    const handleKarteNaTabli = (trenutneKarte: Karta[]) =>{
        setKarteNaTabli(trenutneKarte);
        setCombo(1);
        setTrenutnaKartaNaTabli(karteNaTabli[karteNaTabli.length-1].value);
    }

    return(
        <div className="w-full h-full">
            <div className="h-[75%] bg-green-400 ">
              {
                lvl1.map((lvl)=>
                    (
                        <KartaKomponenta key={lvl.id} id={lvl.id} value={lvl.value} shape={lvl.shape} className={lvl.className} hidden={lvl.hidden} disabled={lvl.disabled} handlePress={handlePress}/>
                    )    
                )
              }       
            </div>
            <Tabla karte={karteNaTabli} handleKarteNaTabli={handleKarteNaTabli} score={score}/>
        </div>
    )
}
