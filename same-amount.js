function sameAmount(string,argR1,argR2){
    const R1 = new RegExp(argR1,'g')
    const R2 = new RegExp(argR2,'g')
    const finRegex1 = string.match(R1)
    const finRegex2 = string.match(R2)
    if((finRegex1 != null&&finRegex2!=null)&&(finRegex1.length === finRegex2.length)){
        return true
    }
    return false
}