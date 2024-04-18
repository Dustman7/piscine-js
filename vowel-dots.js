const vowels = /[aeiouAEIOU]/g
function vowelDots(string){
    let fin = ''
    
    const res = string.match(vowels)
    
    let j = 0
    if(res === null){
        return string
    }
    for(let i = 0;i<string.length;i++){
        if(string[i]!==res[j]){
            fin += string[i]
        }
        if(string[i]===res[j]){
            fin += string[i]+'.'
            j++
        }
        if(j === res.length){
             fin += string.slice(i+1)
             return fin
         }
     }    
    return fin
}