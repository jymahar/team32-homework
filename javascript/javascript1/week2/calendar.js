//Event application

console.log(getEventWeekday(9));

console.log(getEventWeekday(2));


/**
 * Function to get Day of week from today's date
 * after noOfDays
 * @param {Number} noOfDays 
 * @returns 
 */
function getEventWeekday(noOfDays) {

    const currentDate = new Date();
    let todaysDay = currentDate.getDay();

    let count = (todaysDay+ noOfDays)% 7;
    
    const dayNames = ["Monday", "Tuesday","Wednesday", "Thursday", "Friday","Saturday" , "Sunday"];

    return dayNames[count-1];

}