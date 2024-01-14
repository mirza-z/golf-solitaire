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

export const Level2 = ({
    updateLvl,
    spil,
    handleLevel
}:Level1Props) =>{
    
    const [ lvl2, setLv2 ] = useState(updateLvl);
    const [ karteNaTabli, setKarteNaTabli] = useState(spil.slice(27,52));
    const [ trenutnaKartaNaTabli, setTrenutnaKartaNaTabli] = useState(karteNaTabli[karteNaTabli.length-1].value);
    const [ score, setScore ] = useState(0);
    const [ combo, setCombo ] = useState(1);
    const [ comboKarta, setComboKarta ] = useState(karteNaTabli[karteNaTabli.length-2]);
    const [ aktivanKombo, setAktivanKombo ] = useState(false);

    useEffect(() => {
      
    }, [])
    
    

    const handlePress = (id:number) =>{
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
            if(lvl2[1].hidden === true)
                updateLvl[2].disabled = false;
        }
        else if(id===1){
            if(lvl2[0].hidden === true)
                updateLvl[2].disabled = false;
        }
        else if(id===2){
            if(lvl2[8].hidden === true && lvl2[9].hidden === true)
                updateLvl[4].disabled = false;
            if(lvl2[9].hidden === true && lvl2[10].hidden === true)
                updateLvl[5].disabled = false;
        }
        else if(id===7){
            if(lvl2[8].hidden === true)
                updateLvl[3].disabled = false;
            if(lvl2[18].hidden === true){
                updateLvl[12].disabled = false;
            }
            if(lvl2[18].hidden ===true && lvl2[8].hidden === true){
                updateLvl[13].disabled = false;
            }         
        }
        else if(id===8){
            if(lvl2[7].hidden === true)
                updateLvl[3].disabled = false;
            if(lvl2[2].hidden && lvl2[9].hidden === true){
                updateLvl[4].disabled = false;
            }
            if(lvl2[7].hidden && lvl2[18].hidden === true){
                updateLvl[13].disabled = false;
            }
            if(lvl2[15].hidden && lvl2[9].hidden === true){
                updateLvl[14].disabled = false;
            }         
        }
        else if(id===9){
            if(lvl2[8].hidden === true && lvl2[2].hidden === true)
                updateLvl[4].disabled = false;
            if(lvl2[2].hidden && lvl2[10].hidden === true){
                updateLvl[5].disabled = false;
            }
            if(lvl2[8].hidden && lvl2[19].hidden === true){
                updateLvl[14].disabled = false;
            }
            if(lvl2[10].hidden && lvl2[19].hidden === true){
                updateLvl[15].disabled = false;
            }         
        }
        else if(id===10){
            if(lvl2[2].hidden === true && lvl2[9].hidden === true)
                updateLvl[5].disabled = false;
            if(lvl2[11].hidden){
                updateLvl[6].disabled = false;
            }
            if(lvl2[9].hidden && lvl2[19].hidden === true){
                updateLvl[15].disabled = false;
            }
            if(lvl2[11].hidden && lvl2[20].hidden === true){
                updateLvl[16].disabled = false;
            }         
        }
        else if(id===11){
            if(lvl2[10].hidden === true && lvl2[20].hidden === true)
                updateLvl[16].disabled = false;
            if(lvl2[10].hidden){
                updateLvl[6].disabled = false;
            }
            if(lvl2[20].hidden){
                updateLvl[17].disabled = false;
            }      
        }
        else if(id===18){
            if(lvl2[7].hidden === true)
                updateLvl[12].disabled = false;
            if(lvl2[7].hidden && lvl2[8].hidden){
                updateLvl[13].disabled = false;
            }    
        }
        else if(id===19){
            if(lvl2[8].hidden === true && lvl2[9].hidden)
                updateLvl[14].disabled = false;
            if(lvl2[9].hidden && lvl2[10].hidden){
                updateLvl[15].disabled = false;
            }    
        }
        else if(id===20){
            if(lvl2[11].hidden === true)
                updateLvl[17].disabled = false;
            if(lvl2[10].hidden && lvl2[11].hidden){
                updateLvl[16].disabled = false;
            }    
        }
        else if(id===21){
            if(lvl2[22].hidden === true)
                updateLvl[18].disabled = false;  
        }
        else if(id===22){
            if(lvl2[21].hidden === true)
                updateLvl[18].disabled = false;  
        }
        else if(id===23){
            if(lvl2[24].hidden === true)
                updateLvl[19].disabled = false;  
        }
        else if(id===24){
            if(lvl2[23].hidden === true)
                updateLvl[19].disabled = false;  
        }
        else if(id===25){
            if(lvl2[26].hidden === true)
                updateLvl[20].disabled = false;  
        }
        else if(id===26){
            if(lvl2[25].hidden === true)
                updateLvl[20].disabled = false;  
        }

        setLv2([...updateLvl]);
    }

    const handleKarteNaTabli = (trenutneKarte: Karta[]) =>{
        if(trenutneKarte.length == 0)
            handleLevel
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
                lvl2.map((lvl)=>
                    (
                        <KartaKomponenta key={lvl.id} id={lvl.id} value={lvl.value} shape={lvl.shape} className={lvl.className} hidden={lvl.hidden} disabled={lvl.disabled} handlePress={handlePress}/>
                    )    
                )
              }       
            </div>
            <Tabla karte={karteNaTabli} handleKarteNaTabli={handleKarteNaTabli} score={score} comboKarta={comboKarta} combo={combo}/>
        </div>
    )
}
