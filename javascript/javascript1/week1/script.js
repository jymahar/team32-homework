
futureAge(1988,2030);
dogAgeCalculator();

/*
Function to calculate future age
*/
function futureAge(dob, futureYear) {

const yearOfBirth = dob;
const yearFuture = futureYear;

let age = yearFuture - yearOfBirth;

let result = `You will be ${age} years old in  ${yearFuture}`;
console.log(result);

}
/*
Function to calculate dogs age
*/
function dogAgeCalculator() {

const dogYearOfBirth =2023;
const dogYearFuture = 2030;

const shouldShowResultInDogYears= true;

let dogYear=dogYearFuture - dogYearOfBirth;

if(!shouldShowResultInDogYears) {
    //In Human years :Multiple by 7
    dogYear= 7*dogYear;

}
 result = `Your dog will be ${dogYear} ${shouldShowResultInDogYears ? "dog": "human"} years old in ${dogYearFuture}`;

 console.log(result);

}

function housePriceEstimator() {
    const gardenSizeInM2 = 100;
    const width =8;
    const height= 10;
    const depth= 10;
    let volumeInMeters =width*height*depth;
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

}