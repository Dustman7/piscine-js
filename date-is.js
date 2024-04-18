function isValid(date) {
        if (isNaN(date) || date == 0) {
            return false
        } else {
            return true
        }
}


function isAfter(date1,date2) {
    return date1 > date2;
}

function isBefore(date1,date2) {
    return date1 < date2;
}

function isFuture(date) {
    const today = new Date();
    return date > today;
}

function isPast(date) {
    if(!isValid(date)){
        return false
    }
    let today = new Date()
    let fin = date - today
    if(fin<0){
        return true
    }else{
        return false
    }
}



