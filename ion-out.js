function ionOut(string) {
    let array = []
    let regexIon = /(\w*)(?=tion)/g
    let indexmatch = string.match(regexIon)
    
    if(indexmatch === null){
        return array
    }

    for (let i = 0; i < indexmatch.length; i++){
        if (i%2 === 0){
            indexmatch[i] = indexmatch[i] + 't'
            array.push(indexmatch[i])
        }
    }
    return array
}