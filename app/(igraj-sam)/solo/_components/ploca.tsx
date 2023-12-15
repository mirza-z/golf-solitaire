"use client"

import { cn } from "@/lib/utils"
import { Karta } from "./karta"

export const Ploca = () =>{
    return(
        <div className="w-full bg-green-400 h-2/3">
            {/* Karte Gore */}
            <Karta value={1} shape="heart" className="absolute top-[150px] left-[calc(50%-24px)] z-[10]" hidden={false} disabled={false} />

            <Karta value={2} shape="heart" className="absolute top-[165px] left-[calc(45%-24px)] z-[8]" hidden={false} disabled={true} />
            <Karta value={3} shape="heart" className="absolute top-[165px] left-[calc(55%-24px)] z-[8]" hidden={false} disabled={true} />

            <Karta value={4} shape="heart" className="absolute top-[180px] left-[calc(40%-24px)] z-[6]" hidden={false} disabled={true}/>
            <Karta value={5} shape="heart" className="absolute top-[180px] left-[calc(50%-24px)] z-[6]" hidden={false} disabled={true}/>
            <Karta value={6} shape="heart" className="absolute top-[180px] left-[calc(60%-24px)] z-[6]" hidden={false} disabled={true}/>

            <Karta value={7} shape="heart" className="absolute top-[195px] left-[calc(35%-24px)] z-[4]" hidden={false} disabled={true}/>
            <Karta value={8} shape="heart" className="absolute top-[195px] left-[calc(45%-24px)] z-[4]" hidden={false} disabled={true}/>
            <Karta value={9} shape="heart" className="absolute top-[195px] left-[calc(55%-24px)] z-[4]" hidden={false} disabled={true}/>
            <Karta value={10} shape="heart" className="absolute top-[195px] left-[calc(65%-24px)] z-[4]" hidden={false} disabled={true}/>

            {/* Karte Lijevo*/}

            <Karta value={11} shape="heart" className="absolute top-[275px] left-[calc(25%-24px)] z-[4]" hidden={false} disabled={true}/>

            <Karta value={12} shape="heart" className="absolute top-[290px] left-[calc(30%-24px)] z-[6]" hidden={false} disabled={true}/>
            <Karta value={13} shape="heart" className="absolute top-[290px] left-[calc(20%-24px)] z-[6]" hidden={false} disabled={true}/>

            <Karta value={14} shape="heart" className="absolute top-[305px] left-[calc(15%-24px)] z-[8]" hidden={false} disabled={true}/>
            <Karta value={15} shape="heart" className="absolute top-[305px] left-[calc(25%-24px)] z-[8]" hidden={false} disabled={true}/>
            <Karta value={16} shape="heart" className="absolute top-[305px] left-[calc(35%-24px)] z-[8]" hidden={false} disabled={true}/>

            <Karta value={11} shape="club" className="absolute top-[320px] left-[calc(10%-24px)] z-[10]" hidden={false} disabled={false}/>
            <Karta value={12} shape="diamond" className="absolute top-[320px] left-[calc(20%-24px)] z-[10]" hidden={false} disabled={false}/>
            <Karta value={19} shape="diamond" className="absolute top-[320px] left-[calc(30%-24px)] z-[10]" hidden={false} disabled={false}/>
            <Karta value={20} shape="heart" className="absolute top-[320px] left-[calc(40%-24px)] z-[10]" hidden={false} disabled={false}/>

            {/* Karte Desno*/}

            <Karta value={21} shape="heart" className="absolute top-[275px] left-[calc(75%-24px)] z-[4]" hidden={false} disabled={true}/>

            <Karta value={22} shape="heart" className="absolute top-[290px] left-[calc(70%-24px)] z-[6]" hidden={false} disabled={true}/>
            <Karta value={23} shape="heart" className="absolute top-[290px] left-[calc(80%-24px)] z-[6]" hidden={false} disabled={true}/>

            <Karta value={24} shape="heart" className="absolute top-[305px] left-[calc(65%-24px)] z-[8]" hidden={false} disabled={true}/>
            <Karta value={25} shape="heart" className="absolute top-[305px] left-[calc(75%-24px)] z-[8]" hidden={false} disabled={true}/>
            <Karta value={26} shape="heart" className="absolute top-[305px] left-[calc(85%-24px)] z-[8]" hidden={false} disabled={true}/>

            <Karta value={27} shape="heart" className="absolute top-[320px] left-[calc(60%-24px)] z-[10]" hidden={false} disabled={false}/>
            <Karta value={28} shape="spade" className="absolute top-[320px] left-[calc(70%-24px)] z-[10]" hidden={false} disabled={false}/>
            <Karta value={29} shape="heart" className="absolute top-[320px] left-[calc(80%-24px)] z-[10]" hidden={false} disabled={false}/>
            <Karta value={30} shape="spade" className={"absolute top-[320px] left-[calc(90%-24px)] z-[10]"} hidden={false} disabled={false}/>
            
        </div>
    )
}