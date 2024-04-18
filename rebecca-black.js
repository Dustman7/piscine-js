const isBissextile = (annee) => (annee % 4 == 0) && ((annee % 100 !== 0) || (annee % 400 == 0)) ? true : false
function isFriday(Date = new Date()) {
    return Date.getDay() === 5;
  }

function isWeekend(Date = new Date()) {
    return Date.getDay() === 6 || Date.getDay() === 7;
  }
function isLeapYear(Date) {
    return isBissextile(Date.getFullYear()) ? true : false
}

function isLastDayOfMonth(date) {
  const defineDayInMonth = (mois) => {
    if (mois == 0 || mois == 2 || mois == 4 || mois == 6 || mois == 7 ||mois == 9 || mois == 11) {
      return 1
    } else if (mois == 1) {
      return 0
    } else {
      return -1
    }
  }
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    if (day == 31 && defineDayInMonth(month) == 1) {
      return true
    } else if (day == 29 && defineDayInMonth(month) == 0 && isBissextile(year)) {
      return true
    } else if (day == 28 && defineDayInMonth(month) == 0 && !isBissextile(year)) {
      return true
    } else if (day == 30 && defineDayInMonth(month) == -1) {
      return true
    } else {
      return false
    }
    
  }
  
  
