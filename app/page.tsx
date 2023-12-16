import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-green-900 h-full">
        <h1 className="font-bold text-[40px] absolute top-56">Golf Solitaire</h1>

        <Button className="text-green-800 font-bold text-xl absolute top-[38%] px-[60px]">
            <Link href="/solo">
                Igraj sam
            </Link>      
        </Button>

        <Button className="text-green-800 font-bold text-xl absolute top-[48%]">
            Igraj s prijateljima
        </Button>

        <Button className="text-green-800 font-bold text-xl absolute top-[58%] px-[47px]">
            Highscores
        </Button>
    </div>
  )
}
