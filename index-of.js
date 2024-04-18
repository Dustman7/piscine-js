function indexOf(arr, index, debut = 0) {
    for (let i = debut; i < arr.length; i++) {
        if (arr[i] === index) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr,index, debut = arr.length-1) {
    for (let i = debut; i >= 0; i--) {
        if (arr[i] === index) {
            return i
        }
    }
    return -1
}

function includes(array, index) {
    if (indexOf(array, index) != '-1') {
        return true
    }else{
        return false
    }

}