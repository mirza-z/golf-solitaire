"use client";

import { cn } from "@/lib/utils";
import { Circle, Club, Diamond, Heart, Key, KeyRound, Lock, LockKeyhole, Spade } from "lucide-react";

interface KartaProps{
    id: number;
    className: string;
    value: number;
    shape: string;
    hidden: boolean;
    disabled: boolean;
    handlePress: (id: number)=> void;
    zakljucana?: boolean;
}

export const KartaKomponenta = ({
    id,
    className,
    value,
    hidden,
    disabled,
    shape,
    handlePress,
    zakljucana
}:KartaProps) =>{

    const handleClick = () =>{
        if(disabled==true) return;
        handlePress(id);

    }

    return(
        <div onClick={handleClick} hidden={hidden} className={className}>
            <div className={cn("bg-white border-2 border-black h-14 w-10 rounded-sm text-center flex justify-center items-center font-extrabold text-[20px]", 
                        disabled && "bg-[url('../public/cards.png')] bg-contain bg-no-repeat bg-center",)}>
                {
                    zakljucana && <>
                        <Circle className="absolute w-8 h-8 fill-white" />
                        <LockKeyhole className="z-[80] h-4 w-4"/>
                    </>
                }
                {   
                    !disabled && value!=-1 &&
                    <>
                        {
                            shape === "heart" &&
                            <Heart className="h-3 w-3 absolute top-1 right-1 text-red-500 fill-red-500"/> ||
                            shape === "spade" &&
                            <Spade className="h-3 w-3 absolute top-1 right-1 fill-black" /> ||
                            shape === "diamond" &&
                            <Diamond className="h-3 w-3 absolute top-1 right-1 text-red-500 fill-red-500" /> ||
                            shape === "club" &&
                            <Club className="h-3 w-3 absolute top-1 right-1 fill-black" />
                        }
                        
                        {value>10 && value<12 ? "J" : value>11 && value<13 ? "Q" : value>12 || value>10? "K": value}
                    </>
                }
                {
                    !disabled && value==-1 &&
                    <>
                        <div className="h-full w-full bg-yellow-300 flex justify-center items-center">
                            <KeyRound className="h-5 w-5" />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

