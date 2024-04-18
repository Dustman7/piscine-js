function multiply(a, b) {
    let mult = 0;
    if(b<=0){
      b=-b;
      a=-a;
    }

    for(let i=1; i<=b; i++){
      mult += a;
     }
     return mult;
  }

  function divide(a, b){
    let quotient = 0
    if (b >= 0 & a > 0 | b <= 0 & a < 0){
        if (a < 0){
            a = -a
        }
        if (b < 0){
            b = -b
        }
        while (a >= b)
        {
            a = a - b;
            quotient = quotient+1;     
        }
        return quotient;
    }else if (a < 0 | b < 0){
        if (a < 0){
            a = -a
        }
        if (b < 0){
            b = -b
        }
        while (a >= b)
        {
            a = a - b;
            quotient = quotient+1;     
        }
        quotient = "-"+quotient
        return Number(quotient)
    } else {
        return
    }
}

function modulo(a, b) {
    let div = divide(a,b)
    let mult = multiply(div, b)
    let aend = a - mult 
    return aend
    /*for(let i = b; i <= a; i = i + b) {
        if (i > a) {
            var c = (a-(i-b))
            return c
        } else {
            continue
        }
    }*/
}

//console.log(modulo(-123,22))
