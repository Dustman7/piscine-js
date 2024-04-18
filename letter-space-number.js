function letterSpaceNumber(str){
    const regexString = /[a-zA-Z0-9_]\s\d\b/g
    const res = str.match(regexString)
    console.log(res)
    if (res != null){
        for(let i = 0;i<res.length;i++){
        }
    }else {
        const res = []
        return res
    }
    return res
}