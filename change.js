function get (key) {
    return sourceObject[key]

}

function set (key, value){
    const tru = sourceObject[key] = value
    return tru
}