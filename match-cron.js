const matchCron = (cron, date) => {
	let testArray = cron.split(" ");
	let minutes = date.getMinutes()
	let hour = date.getHours()
	let dayInTheMonth = date.getDate()
	let month = date.getMonth() + 1
	let daysInAWeek = date.getDay()
	let secondArray = [minutes, hour, dayInTheMonth, month, switchDays(daysInAWeek)]
	let finalValue = false
	for (let i = 0 ; i < testArray.length ; i++) {
		if (testArray[i] !== "*" && testArray[i] == secondArray[i]) {
			finalValue = true
		} else if (testArray[i] !== "*" && testArray[i] !== secondArray[i]){
			finalValue = false
		}
	}

	if (cron === "* * * * *") {
		finalValue = true
	}
	console.log(testArray, secondArray)
	return finalValue
}

const switchDays = (data) => {
	if (data == 0) {
		return 7
	}
	return data
}