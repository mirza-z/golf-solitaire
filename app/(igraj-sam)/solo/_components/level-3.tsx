"use client"

import { KartaKomponenta } from "./karta"
import { Karta, Level } from "@/types";
import { Tabla } from "./tabla";
import { useEffect, useState } from "react";

interface Level1Props{
    updateLvl: Level[];
    spil: Karta[];
    handleLevel: () => void;
}

export const Level3 = ({
    updateLvl,
    spil,
    handleLevel
}:Level1Props) =>{
    
    const [ lvl3, setLv3 ] = useState(updateLvl);
    const [ karteNaTabli, setKarteNaTabli] = useState(spil.slice(27,52));
    const [ trenutnaKartaNaTabli, setTrenutnaKartaNaTabli] = useState(karteNaTabli[karteNaTabli.length-1].value);
    const [ score, setScore ] = useState(0);
    const [ combo, setCombo ] = useState(1);
    const [ comboKarta, setComboKarta ] = useState(karteNaTabli[karteNaTabli.length-2]);
    const [ aktivanKombo, setAktivanKombo ] = useState(false);

    useEffect(() => {
      
    }, [])
    
    

    const handlePress = (id:number) =>{

        if(lvl3[id].value == -1){
            updateLvl[6].zakljucana = false;
            updateLvl[id].hidden = true; 
            updateLvl[6].disabled = false;
            setLv3([...updateLvl]);
            return;
        }

        if((trenutnaKartaNaTabli+1 != updateLvl[id].value && trenutnaKartaNaTabli-1 != updateLvl[id].value) && 
            !( trenutnaKartaNaTabli==1 && updateLvl[id].value==13) && !( trenutnaKartaNaTabli==13 && updateLvl[id].value==1)){ 

                if(aktivanKombo && (comboKarta.value+1 != updateLvl[id].value && comboKarta.value-1 != updateLvl[id].value) && !(
                    comboKarta.value==1 && updateLvl[id].value==13) && !( comboKarta.value==13 && updateLvl[id].value==1)
                ){
                    console.log(comboKarta.value+1 +" " + updateLvl[id].value);
                    return;
                }
                else if(aktivanKombo){
                    console.log(comboKarta.value +" " + updateLvl[id].value);
                    setComboKarta(updateLvl[id]);
                    setScore(score + combo*4400);
                    setCombo(combo+1);
                }
                else{
                    return;
                }
        }
        else{
            let trenutniSpil = karteNaTabli;
            trenutniSpil.pop();
            const karta = { value: updateLvl[id].value, shape: updateLvl[id].shape};
            trenutniSpil.push(karta);
            setKarteNaTabli(trenutniSpil);

            setTrenutnaKartaNaTabli(karteNaTabli[karteNaTabli.length-1].value);
            setScore(score + combo*4400);
            setCombo(combo+1);
            
            if(combo==3){
                trenutniSpil = [...trenutniSpil.slice(0, -2), ...trenutniSpil.slice(-1)];
                setKarteNaTabli(trenutniSpil);
                setAktivanKombo(true);
                console.log(karteNaTabli)
            }
        }

        updateLvl[id].hidden = true;

        if(id===0){
            if(lvl3[1].hidden === true && lvl3[2].hidden ===true)
                updateLvl[16].disabled = false;
            if(lvl3[2].hidden === true && lvl3[3].hidden ===true)
                updateLvl[17].disabled = false;
        }
        else if(id===1){
            if(lvl3[0].hidden === true && lvl3[2].hidden ===true)
                updateLvl[16].disabled = false;
            if(lvl3[4].hidden === true && lvl3[5].hidden ===true)
                updateLvl[18].disabled = false;
            if(lvl3[2].hidden === true && lvl3[5].hidden ===true && lvl3[6].hidden ===true)
                updateLvl[19].disabled = false;
        }
        else if(id===2){
            if(lvl3[0].hidden === true && lvl3[1].hidden ===true)
                updateLvl[16].disabled = false;
            if(lvl3[0].hidden === true && lvl3[3].hidden ===true)
                updateLvl[17].disabled = false;
            if(lvl3[1].hidden === true && lvl3[5].hidden ===true && lvl3[6].hidden ===true)
                updateLvl[19].disabled = false;
            if(lvl3[3].hidden === true && lvl3[6].hidden ===true && lvl3[7].hidden ===true)
                updateLvl[20].disabled = false;
        }
        else if(id===3){
            if(lvl3[0].hidden === true && lvl3[2].hidden ===true)
                updateLvl[17].disabled = false;
            if(lvl3[7].hidden === true && lvl3[8].hidden ===true)
                updateLvl[21].disabled = false;
            if(lvl3[2].hidden === true && lvl3[6].hidden ===true && lvl3[7].hidden ===true)
                updateLvl[20].disabled = false;
        }
        else if(id===4){
            if(lvl3[1].hidden === true && lvl3[5].hidden ===true)
                updateLvl[18].disabled = false;
            if(lvl3[9].hidden === true && lvl3[10].hidden ===true)
                updateLvl[22].disabled = false;
            if(lvl3[5].hidden === true && lvl3[10].hidden ===true && lvl3[11].hidden ===true)
                updateLvl[23].disabled = false;
        }
        else if(id===5){
            if(lvl3[1].hidden === true && lvl3[4].hidden ===true)
                updateLvl[18].disabled = false;
            if(lvl3[1].hidden === true && lvl3[2].hidden ===true && lvl3[6].hidden ===true)
                updateLvl[19].disabled = false;
            if(lvl3[4].hidden === true && lvl3[10].hidden ===true && lvl3[11].hidden ===true)
                updateLvl[23].disabled = false;
            if(lvl3[6].hidden === true && lvl3[11].hidden ===true && lvl3[12].hidden ===true)
                updateLvl[24].disabled = false;
        }
        else if(id===6){
            if(lvl3[1].hidden === true && lvl3[2].hidden ===true && lvl3[5].hidden ===true)
                updateLvl[19].disabled = false;
            if(lvl3[2].hidden === true && lvl3[3].hidden ===true && lvl3[7].hidden ===true)
                updateLvl[20].disabled = false;
            if(lvl3[5].hidden === true && lvl3[11].hidden ===true && lvl3[12].hidden ===true)
                updateLvl[24].disabled = false;
            if(lvl3[7].hidden === true && lvl3[12].hidden ===true && lvl3[13].hidden ===true)
                updateLvl[25].disabled = false;
        }
        else if(id===7){
            if(lvl3[3].hidden === true && lvl3[8].hidden ===true)
                updateLvl[21].disabled = false;
            if(lvl3[2].hidden === true && lvl3[3].hidden ===true && lvl3[6].hidden ===true)
                updateLvl[20].disabled = false;
            if(lvl3[6].hidden === true && lvl3[12].hidden ===true && lvl3[13].hidden ===true)
                updateLvl[25].disabled = false;
            if(lvl3[8].hidden === true && lvl3[13].hidden ===true && lvl3[14].hidden ===true)
                updateLvl[26].disabled = false;
        }
        else if(id===8){
            if(lvl3[3].hidden === true && lvl3[7].hidden ===true)
                updateLvl[21].disabled = false;
            if(lvl3[7].hidden === true && lvl3[13].hidden ===true && lvl3[14].hidden ===true)
                updateLvl[26].disabled = false;
            if(lvl3[14].hidden === true && lvl3[15].hidden ===true)
                updateLvl[27].disabled = false;
        }
        else if(id===9){
            if(lvl3[4].hidden === true && lvl3[10].hidden ===true)
                updateLvl[22].disabled = false;
        }
        else if(id===10){
            if(lvl3[4].hidden === true && lvl3[9].hidden ===true)
                updateLvl[22].disabled = false;
            if(lvl3[4].hidden === true && lvl3[5].hidden ===true && lvl3[11].hidden ===true)
                updateLvl[23].disabled = false;
        }
        else if(id===11){
            if(lvl3[4].hidden === true && lvl3[5].hidden ===true && lvl3[10].hidden ===true)
                updateLvl[23].disabled = false;
            if(lvl3[5].hidden === true && lvl3[6].hidden ===true && lvl3[12].hidden ===true)
                updateLvl[24].disabled = false;
        }
        else if(id===12){
            if(lvl3[5].hidden === true && lvl3[6].hidden ===true && lvl3[11].hidden ===true)
                updateLvl[24].disabled = false;
            if(lvl3[6].hidden === true && lvl3[7].hidden ===true && lvl3[13].hidden ===true)
                updateLvl[25].disabled = false;
        }
        else if(id===13){
            if(lvl3[6].hidden === true && lvl3[7].hidden ===true && lvl3[12].hidden ===true)
                updateLvl[25].disabled = false;
            if(lvl3[7].hidden === true && lvl3[8].hidden ===true && lvl3[14].hidden ===true)
                updateLvl[26].disabled = false;
        }
        else if(id===14){
            if(lvl3[7].hidden === true && lvl3[8].hidden ===true && lvl3[13].hidden ===true)
                updateLvl[26].disabled = false;
            if(lvl3[8].hidden === true && lvl3[15].hidden ===true)
                updateLvl[27].disabled = false;
        }
        else if(id===15){
            if(lvl3[8].hidden === true && lvl3[14].hidden ===true)
                updateLvl[27].disabled = false;
        }
        
        setLv3([...updateLvl]);
    }

    const handleKarteNaTabli = (trenutneKarte: Karta[]) =>{
        if(trenutneKarte.length == 0)
            handleLevel();
        setKarteNaTabli(trenutneKarte);
        setCombo(1);
        setAktivanKombo(false);
        setTrenutnaKartaNaTabli(karteNaTabli[karteNaTabli.length-1].value);
        setComboKarta(karteNaTabli[karteNaTabli.length-2]);
    }

    return(
        <div className="w-full h-full">
            <div className="h-[75%] bg-green-400 ">
              {
                lvl3.map((lvl)=>
                    (
                        <KartaKomponenta key={lvl.id} id={lvl.id} value={lvl.value} shape={lvl.shape} className={lvl.className} hidden={lvl.hidden} disabled={lvl.disabled} handlePress={handlePress} zakljucana={lvl?.zakljucana}/>
                    )    
                )
              }       
            </div>
            <Tabla karte={karteNaTabli} handleKarteNaTabli={handleKarteNaTabli} score={score} comboKarta={comboKarta} combo={combo}/>
        </div>
    )
}
