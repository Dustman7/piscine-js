function longWords(arr) {
   let Bfin =(str)=>str.length > 4
       return arr.every(Bfin)
} 
//         for(var j=0; arr.lenght; j++){
//             if (typeof arr[j] !== "string") {
//                 Bfin = false
//                 break
//             }else if (typeof arr[j] === "string"){
//                 Bfin = true
//         }
//         return Bfin 
//         }
           
//     }
// }




function oneLongWord(arr) {
    let even = (element) => element.length >= 10
    return arr.some(even)
}

function noLongWords(arr) {
    let verif = (current) => current.length < 7
    return arr.every(verif)
}
