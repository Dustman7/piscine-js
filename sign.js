function sign (uno) {
    if (uno > 0) {
        return 1
    } else if (uno == 0){
        return 0
    } else {
        return -1
    }
}

function sameSign (uno, dos) {
    if (sign(uno) == sign(dos)) {
        return true
    }else{
        return false
    }

}