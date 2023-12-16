"use client"

import { KartaKomponenta } from "./karta"
import { Karta } from "@/types";

interface Level1Props{
    ispartanSpil: Karta[];
}

export const Level1 = ({
    ispartanSpil,

}:Level1Props) =>{

    const lvl1 = [
        { id: 1, className: "absolute top-[150px] left-[calc(50%-24px)] z-[10]", hidden: false, disabled: false },
        { id: 2, className: "absolute top-[165px] left-[calc(50%-48px)] z-[8]", hidden: false, disabled: true },
        { id: 3, className: "absolute top-[165px] left-[calc(50%-0px)] z-[8]", hidden: false, disabled: true},
        { id: 4, className: "absolute top-[180px] left-[calc(50%-72px)] z-[6]", hidden: false, disabled: true},
        { id: 5, className: "absolute top-[180px] left-[calc(50%-24px)] z-[6]", hidden: false, disabled: true },
        { id: 6, className: "absolute top-[180px] left-[calc(50%+24px)] z-[6]", hidden: false, disabled: true},
        { id: 7, className: "absolute top-[195px] left-[calc(50%-96px)] z-[4]", hidden: false, disabled: true},
        { id: 8, className: "absolute top-[195px] left-[calc(50%-48px)] z-[4]", hidden: false, disabled: true},
        { id: 9, className: "absolute top-[195px] left-[calc(50%-0px)] z-[4]", hidden: false, disabled: true},
        { id: 10, className: "absolute top-[195px] left-[calc(50%+48px)] z-[4]", hidden: false,  disabled: true},
    
        { id: 11, className: "absolute top-[275px] left-[calc(26%-28px)] z-[4]", hidden:false, disabled:true},
        { id: 12, className:"absolute top-[290px] left-[calc(26%-48px)] z-[6]", hidden: false, disabled: true},
        { id: 13, className:"absolute top-[290px] left-[calc(26%-0px)] z-[6]", hidden: false, disabled: true},
        { id: 14, className:"absolute top-[305px] left-[calc(26%-72px)] z-[8]", hidden: false, disabled: true},
        { id: 15, className:"absolute top-[305px] left-[calc(26%-24px)] z-[8]", hidden: false, disabled: true},
        { id: 16, className:"absolute top-[305px] left-[calc(26%+24px)] z-[8]", hidden: false, disabled: true},
        { id: 17, className:"absolute top-[320px] left-[calc(26%-96px)] z-[10]", hidden: false, disabled: false},
        { id: 18, className:"absolute top-[320px] left-[calc(26%-48px)] z-[10]", hidden: false, disabled: false},
        { id: 19, className:"absolute top-[320px] left-[calc(26%-0px)] z-[10]", hidden: false, disabled: false},
        { id: 20, className:"absolute top-[320px] left-[calc(26%+48px)] z-[10]", hidden: false, disabled: false},
    
        { id: 21, className: "absolute top-[275px] left-[calc(76%-24px)] z-[4]", hidden: false, disabled: true},
        { id: 22, className: "absolute top-[290px] left-[calc(76%-48px)] z-[6]", hidden: false, disabled: true},
        { id: 23, className: "absolute top-[290px] left-[calc(76%-0px)] z-[6]", hidden: false, disabled: true},
        { id: 24, className: "absolute top-[305px] left-[calc(76%-72px)] z-[8]", hidden: false, disabled: true},
        { id: 25, className: "absolute top-[305px] left-[calc(76%-24px)] z-[8]", hidden: false, disabled: true},
        { id: 26, className: "absolute top-[305px] left-[calc(76%+24px)] z-[8]", hidden: false, disabled: true},
        { id: 27, className: "absolute top-[320px] left-[calc(76%-96px)] z-[10]", hidden: false, disabled: false},
        { id: 28, className: "absolute top-[320px] left-[calc(76%-48px)] z-[10]", hidden: false, disabled: false},
        { id: 29, className: "absolute top-[320px] left-[calc(76%-0px)] z-[10]", hidden: false, disabled: false},
        { id: 30, className: "absolute top-[320px] left-[calc(76%+48px)] z-[10]", hidden: false, disabled: false},
    ];

    const karte= ispartanSpil.slice(0, 30);

    return(
        <div className="w-full bg-green-400 h-[100%]">

              <KartaKomponenta value={karte[0].value} shape={karte[0].shape} className={lvl1[0].className} disabled={lvl1[0].disabled} hidden={lvl1[0].hidden}/>

              <KartaKomponenta value={karte[1].value} shape={karte[1].shape} className={lvl1[1].className} disabled={lvl1[1].disabled} hidden={lvl1[1].hidden}/>
              <KartaKomponenta value={karte[2].value} shape={karte[2].shape} className={lvl1[2].className} disabled={lvl1[2].disabled} hidden={lvl1[2].hidden}/>

              <KartaKomponenta value={karte[3].value} shape={karte[3].shape} className={lvl1[3].className} disabled={lvl1[3].disabled} hidden={lvl1[3].hidden}/>
              <KartaKomponenta value={karte[4].value} shape={karte[4].shape} className={lvl1[4].className} disabled={lvl1[4].disabled} hidden={lvl1[4].hidden}/>
              <KartaKomponenta value={karte[5].value} shape={karte[5].shape} className={lvl1[5].className} disabled={lvl1[5].disabled} hidden={lvl1[5].hidden}/>

              <KartaKomponenta value={karte[6].value} shape={karte[6].shape} className={lvl1[6].className} disabled={lvl1[6].disabled} hidden={lvl1[6].hidden}/>
              <KartaKomponenta value={karte[7].value} shape={karte[7].shape} className={lvl1[7].className} disabled={lvl1[7].disabled} hidden={lvl1[7].hidden}/>
              <KartaKomponenta value={karte[8].value} shape={karte[8].shape} className={lvl1[8].className} disabled={lvl1[8].disabled} hidden={lvl1[8].hidden}/>
              <KartaKomponenta value={karte[9].value} shape={karte[9].shape} className={lvl1[9].className} disabled={lvl1[9].disabled} hidden={lvl1[9].hidden}/>

              <KartaKomponenta value={karte[10].value} shape={karte[10].shape} className={lvl1[10].className} disabled={lvl1[10].disabled} hidden={lvl1[10].hidden}/>

              <KartaKomponenta value={karte[11].value} shape={karte[11].shape} className={lvl1[11].className} disabled={lvl1[11].disabled} hidden={lvl1[11].hidden}/>
              <KartaKomponenta value={karte[12].value} shape={karte[12].shape} className={lvl1[12].className} disabled={lvl1[12].disabled} hidden={lvl1[12].hidden}/>

              <KartaKomponenta value={karte[13].value} shape={karte[13].shape} className={lvl1[13].className} disabled={lvl1[13].disabled} hidden={lvl1[13].hidden}/>
              <KartaKomponenta value={karte[14].value} shape={karte[14].shape} className={lvl1[14].className} disabled={lvl1[14].disabled} hidden={lvl1[14].hidden}/>
              <KartaKomponenta value={karte[15].value} shape={karte[15].shape} className={lvl1[15].className} disabled={lvl1[15].disabled} hidden={lvl1[15].hidden}/>

              <KartaKomponenta value={karte[16].value} shape={karte[16].shape} className={lvl1[16].className} disabled={lvl1[16].disabled} hidden={lvl1[16].hidden}/>
              <KartaKomponenta value={karte[17].value} shape={karte[17].shape} className={lvl1[17].className} disabled={lvl1[17].disabled} hidden={lvl1[17].hidden}/>
              <KartaKomponenta value={karte[18].value} shape={karte[18].shape} className={lvl1[18].className} disabled={lvl1[18].disabled} hidden={lvl1[18].hidden}/>
              <KartaKomponenta value={karte[19].value} shape={karte[19].shape} className={lvl1[19].className} disabled={lvl1[19].disabled} hidden={lvl1[19].hidden}/>

              <KartaKomponenta value={karte[20].value} shape={karte[20].shape} className={lvl1[20].className} disabled={lvl1[20].disabled} hidden={lvl1[20].hidden}/>

              <KartaKomponenta value={karte[21].value} shape={karte[21].shape} className={lvl1[21].className} disabled={lvl1[21].disabled} hidden={lvl1[21].hidden}/>
              <KartaKomponenta value={karte[22].value} shape={karte[22].shape} className={lvl1[22].className} disabled={lvl1[22].disabled} hidden={lvl1[22].hidden}/>

              <KartaKomponenta value={karte[23].value} shape={karte[23].shape} className={lvl1[23].className} disabled={lvl1[23].disabled} hidden={lvl1[23].hidden}/>
              <KartaKomponenta value={karte[24].value} shape={karte[24].shape} className={lvl1[24].className} disabled={lvl1[24].disabled} hidden={lvl1[24].hidden}/>
              <KartaKomponenta value={karte[25].value} shape={karte[25].shape} className={lvl1[25].className} disabled={lvl1[25].disabled} hidden={lvl1[25].hidden}/>

              <KartaKomponenta value={karte[26].value} shape={karte[26].shape} className={lvl1[26].className} disabled={lvl1[26].disabled} hidden={lvl1[26].hidden}/>
              <KartaKomponenta value={karte[27].value} shape={karte[27].shape} className={lvl1[27].className} disabled={lvl1[27].disabled} hidden={lvl1[27].hidden}/>
              <KartaKomponenta value={karte[28].value} shape={karte[28].shape} className={lvl1[28].className} disabled={lvl1[28].disabled} hidden={lvl1[28].hidden}/>
              <KartaKomponenta value={karte[29].value} shape={karte[29].shape} className={lvl1[29].className} disabled={lvl1[29].disabled} hidden={lvl1[29].hidden}/>              
            
        </div>
    )
}