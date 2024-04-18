function citiesOnly(arr){
    let array = arr.map(place =>{
        return place.city
    })
    return array
}

function upperCasingStates(arr){
    let ret =''
    let array = arr.map( place =>{
        for(let i =0; i < place.length;i++){
            
            if (i == 0 ){
               ret = place[i].toUpperCase()
            } else if (place[i-1]  == " "){
                ret += place[i].toUpperCase()
            }else {
                ret += place[i]
            }
        }
        return ret
    })
    return array
}

function fahrenheitToCelsius(arr){
    let array = arr.map(function Celsia(value){
        value = parseInt(value)
        let cel = (value -32)*5/9
        cel = Math.floor(cel)
        return cel+'°C'
        })
    return array
}

function trimTemp(arr){
    let ret = ''
    let array = arr.map(place =>{
        for(let i = 0; i < place.temperature.length; i++){
            if (place.temperature[i] !== " "){
                ret += place.temperature[i]
            }
        }
        place.temperature = ret
        ret =''
        return place
    })
    return array
}

function Upper(place){
    let ret =''
    for(let i =0; i < place.length;i++){        
        if (i == 0 ){
           ret = place[i].toUpperCase()
        } else if (place[i-1]  == " "){
            ret += place[i].toUpperCase()
        }else {
            ret += place[i]
        }
    }
    return ret
}

function tempForecasts(states){
    let array = states.map(all =>{
        const regex = /\s/g
        const resRegex = new RegExp(regex)
        const regexSpace = /\s\w/g
        const regexSp = new RegExp(regexSpace)
        let strin = all.temperature
        let res2 = all.state.match(regexSp)
        let res = strin.replace(resRegex,'')
        if(res2!== null){
            all.state = all.state.replace(regexSp,res2[0].toUpperCase())
        }
        res = parseInt(res)
        let cel = (res -32)*5/9
        cel = Math.floor(cel)
        let strRes = cel+'°Celsius in '+all.city+', ' + all.state[0].toUpperCase()+all.state.slice(1)
        return strRes
    })  
    return array
}