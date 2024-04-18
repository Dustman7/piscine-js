const countLeapYears = (date) => {
	let finalResult = 0
	let year = date.getFullYear()
	for (let i = 1 ; i < year ; i++) {
		if(isBissextile(i)) {
			finalResult += 1
			console.log(year, i,finalResult)
		}
	}
	return finalResult
}

const isBissextile = (annee) => (annee % 4 == 0) && ((annee % 100 !== 0) || (annee % 400 == 0)) ? true : false