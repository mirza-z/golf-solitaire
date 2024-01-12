import { Karta } from "./types";

const Spil: Karta[] = [
    { value: 1, shape: "heart"},
    { value: 2, shape: "heart"},
    { value: 3, shape: "heart"},
    { value: 4, shape: "heart"},
    { value: 5, shape: "heart"},
    { value: 6, shape: "heart"},
    { value: 7, shape: "heart"},
    { value: 8, shape: "heart"},
    { value: 9, shape: "heart"},
    { value: 10, shape: "heart"},
    { value: 11, shape: "heart"},
    { value: 12, shape: "heart"},
    { value: 13, shape: "heart"},

    { value: 1, shape: "diamond"},
    { value: 2, shape: "diamond"},
    { value: 3, shape: "diamond"},
    { value: 4, shape: "diamond"},
    { value: 5, shape: "diamond"},
    { value: 6, shape: "diamond"},
    { value: 7, shape: "diamond"},
    { value: 8, shape: "diamond"},
    { value: 9, shape: "diamond"},
    { value: 10, shape: "diamond"},
    { value: 11, shape: "diamond"},
    { value: 12, shape: "diamond"},
    { value: 13, shape: "diamond"}, 

    { value: 1, shape: "club"},
    { value: 2, shape: "club"},
    { value: 3, shape: "club"},
    { value: 4, shape: "club"},
    { value: 5, shape: "club"},
    { value: 6, shape: "club"},
    { value: 7, shape: "club"},
    { value: 8, shape: "club"},
    { value: 9, shape: "club"},
    { value: 10, shape: "club"},
    { value: 11, shape: "club"},
    { value: 12, shape: "club"},
    { value: 13, shape: "club"},

    { value: 1, shape: "spade"},
    { value: 2, shape: "spade"},
    { value: 3, shape: "spade"},
    { value: 4, shape: "spade"},
    { value: 5, shape: "spade"},
    { value: 6, shape: "spade"},
    { value: 7, shape: "spade"},
    { value: 8, shape: "spade"},
    { value: 9, shape: "spade"},
    { value: 10, shape: "spade"},
    { value: 11, shape: "spade"},
    { value: 12, shape: "spade"},
    { value: 13, shape: "spade"},
]

let currentIndex = Spil.length, randomIndex;

while(currentIndex>0){
    randomIndex = Math.floor(Math.random() * currentIndex );

    currentIndex--;

    [Spil[currentIndex], Spil[randomIndex]] = [ Spil[randomIndex], Spil[currentIndex]];
}

export default Spil;


