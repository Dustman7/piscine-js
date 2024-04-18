const dayOfTheYear = (date) => {
	let finalResult = date.getDate()
	let month = date.getMonth()
	console.log(finalResult)
	for (let i = month - 1 ; i >=0 ; i--) {
		switch (defineDayInMonth(i)) {
			case 1:
				console.log(i + 1, finalResult, "+ 31")
				finalResult += 31
				break;
			case 0:
				if (isBissextile(date.getFullYear())) {
					console.log(i + 1, finalResult, "+ 29")
					finalResult += 29
				} else {
					console.log(i + 1, finalResult, "+ 28")
					finalResult += 28
				} 
				break;
			case -1:
				console.log(i + 1, finalResult, "+ 30")
				finalResult += 30
				break;
		}
	}
	return finalResult
}

const defineDayInMonth = (mois) => {
	if (mois == 0 || mois == 2 || mois == 4 || mois == 6 || mois == 7 ||mois == 9 || mois == 11) {
		return 1
	} else if (mois == 1) {
		return 0
	} else {
		return -1
	}
}

const isBissextile = (annee) => (annee % 4 == 0) && ((annee % 100 !== 0) || (annee % 400 == 0)) ? true : false