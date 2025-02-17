// Code your solution here
function findMatching(drivers, name){
   return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(drivers, name){
length = name.length
return drivers.filter(driver => driver.slice(0, name.length) == name)
}


function matchName(drivers, name){
    return drivers.filter(driver => driver.name == name)
}