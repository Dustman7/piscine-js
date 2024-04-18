function cutFirst(string) {
    return string.slice(2)
}

function cutLast(string) {
    let words = ''
    if (string.length >2){
        for (let i = 0 ; i< string.length-2; i++){
            words = words + string[i]
        }
    }
    return words
}

function cutFirstLast(string) {
    let words = ''
    if (string.length >2){
        for (let i = 2 ; i< string.length-2; i++){
            words = words + string[i]
        }
    }
    return words
}

function keepFirst(string) {
    let words = ''
    if (string.length >2){
        for (let i = 0 ; i < 2; i++){
            words = words + string[i]
        }
    }else{
        return string
    }
    return words
}

function keepLast(string) {
    let words = ''
    if (string.length >2){
        for (let i = string.length-2 ; i < string.length; i++){
            words = words + string[i]
            
        }
    }else{
        return string
    }
    return words
}

function keepFirstLast(string) {
    let words = ''
    let worldend = ''
    if (string.length >3){
        for (let i = 0, j = string.length-2 ; i< 2, j< string.length; i++,j++){
            words = words + string[i]
            worldend = worldend + string[j]
        }
        let wordfinal = words + worldend
        return wordfinal
    }else{
        return string
    }
    
}
