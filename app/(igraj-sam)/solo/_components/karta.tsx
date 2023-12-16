"use client";

import { cn } from "@/lib/utils";
import { Club, Diamond, Heart, Spade } from "lucide-react";
import { useState } from "react";


interface KartaProps{
    id: number;
    className: string;
    value: number;
    shape: string;
    hidden: boolean;
    disabled: boolean;
    handlePress: (id: number)=> void;
}

export const KartaKomponenta = ({
    id,
    className,
    value,
    hidden,
    disabled,
    shape,
    handlePress,
}:KartaProps) =>{

    const [ isClicked, setIsClicked ] = useState(hidden);

    const handleClick = () =>{
        if(disabled==true) return;
        handlePress(id);
        setIsClicked(true);
    }

    return(
        <div onClick={handleClick} hidden={isClicked} className={className}>
            <div className={cn("bg-white border-2 border-black h-14 w-10 rounded-sm text-center flex justify-center items-center font-extrabold text-[20px]", 
                        disabled && "bg-[url('../public/cards.png')] bg-contain bg-no-repeat bg-center")}>
                {   
                    !disabled &&
                    <>
                        {
                            shape === "heart" &&
                            <Heart className="h-3 w-3 absolute top-1 right-1 text-red-500"/> ||
                            shape === "spade" &&
                            <Spade className="h-3 w-3 absolute top-1 right-1" /> ||
                            shape === "diamond" &&
                            <Diamond className="h-3 w-3 absolute top-1 right-1 text-red-500" /> ||
                            shape === "club" &&
                            <Club className="h-3 w-3 absolute top-1 right-1" />
                        }
                        
                        {value>10 && value<12 ? "J" : value>11 && value<13 ? "Q" : value>12 || value>10? "K": value}
                    </>
                }
            </div>
        </div>
    )
}

