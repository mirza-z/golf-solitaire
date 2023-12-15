import { Button } from "@/components/ui/button";
import Link from "next/link";


const MainMenuPage = () =>{
    return(
        <div className="min-h-full flex bg-green-900">
            <div className="flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-6 pb-10">
                <h1 className="font-bold text-[40px] absolute top-56">Golf Solitaire</h1>

                <Button className="text-green-800 font-bold text-xl absolute top-80 px-[60px]">
                    <Link href="/solo">
                        Igraj sam
                    </Link>      
                </Button>

                <Button className="text-green-800 font-bold text-xl absolute top-[42%]">
                    Igraj s prijateljima
                </Button>

                <Button className="text-green-800 font-bold text-xl absolute top-[50%] px-[47px]">
                    Highscores
                </Button>
            </div>
        </div>
    )
};

export default MainMenuPage;