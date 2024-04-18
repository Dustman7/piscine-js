const planet = {
    earth : 1,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132 
}

function dogYears (key, age) {
    var sec = 31557600;
    age = age / sec
    var tour = planet[key]
    age = age / tour * 7
    return Math.round(age * 100) / 100  
}