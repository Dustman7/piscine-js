/*function pyramid(str, num){
   let ret = ''
    let sp = ''
    for(let i = 1; i<= num; i++){
        let y = 0
        while (y < i){
            sp = str.repeat(num) + ret
            sp += str
            if (i !== num){
                sp += '\n'
                }
            y ++
        }            
        
        return sp
       
    } console.log(pyramid('a', 5))
}
let ret = ''
    for(let i = 1; i<= num; i++){
        let y = 0
        for (let j = 1; j <= num - i; j++) {
            ret += ' '
        }
            while (y < i){
                y ++
                ret += str
                if (i > 1){
                    ret += str
                }
                
                //console.log(ret)
            }
            if (i !== num){
                ret += '\n'
            }
        
    }
    return ret
}*/
function pyramid(str, num){
    let ret = ''
    for(let i = 1; i<= num; i++){
        let y = 0
        let j =0
        let a = num
                while (j < num-i){
                    for(let tr = 1; tr <= str.length; tr++ ){
                    ret += " "
                    }
                    j++
                }
                while (a > num - i){
                    ret += str
                    a--

                }   
                while (y < i- 1){
                    ret += str
                    y ++
                }
                if (i !== num){
                    ret += '\n'
                }   
    }
    return ret 
}
