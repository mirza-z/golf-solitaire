"use client";

import { cn } from "@/lib/utils";
import { Club, Diamond, Heart, Spade } from "lucide-react";


interface KartaProps{
    className: string;
    value: number;
    shape: string;
    hidden: boolean;
    disabled: boolean;
}

export const Karta = ({
    className,
    value,
    hidden,
    disabled,
    shape
}:KartaProps) =>{

    const handleClick = () =>{
        if(disabled) return;
        console.log("hi " + value);
    }

    return(
        <div onClick={handleClick} hidden={hidden} className={className}>
            <div className={cn("bg-white border-2 border-black h-14 w-10 rounded-sm text-center flex justify-center items-center font-extrabold text-[20px]", 
                        disabled && "bg-[url('../public/cards.png')] bg-contain bg-no-repeat bg-center")}>
                {   
                    !disabled &&
                    <>
                        {
                            shape === "heart" &&
                            <Heart className="h-3 w-3 absolute top-1 right-1" fill="100"/> ||
                            shape === "spade" &&
                            <Spade className="h-3 w-3 absolute top-1 right-1" fill="100"/> ||
                            shape === "diamond" &&
                            <Diamond className="h-3 w-3 absolute top-1 right-1" fill="100"/> ||
                            shape === "club" &&
                            <Club className="h-3 w-3 absolute top-1 right-1" fill="100"/>
                        }
                        
                        {value>10 && value<12 ? "J" : value>11 && value<13 ? "Q" : value>12 || value>10? "K": value}
                    </>
                }
            </div>
        </div>
    )
}

