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
    const todaysDay = currentDate.getDay();

    const count = (todaysDay+ noOfDays)% 7;
    
    const dayNames = ["Sunday","Monday", "Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

    return dayNames[count];

}