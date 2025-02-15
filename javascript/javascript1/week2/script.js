
const firstName = "Benjamin";
const surName = "Hughes";
const isFemale = false;
const useFormalName= false;

const fullname1= getFullname(firstName, surName, useFormalName, isFemale);
const fullname2= getFullname(firstName, surName, true, isFemale);
const fullname3= getFullname("Jyoti", " Mahar", true,true );

const fullname4= getFullname(" ", " Mahar", true,true );

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);


/**
 * Function to get fullname
 * @param {string} firstName 
 * @param {string} surName 
 * @param {boolean} useFormalName 
 *  @param {boolean} isFemale 
 */
function getFullname(firstName, surName, useFormalName, isFemale) {

    if (!firstName.trim() && !surName.trim()) {
        return "Missing both First Name and Sur Name";
    } else if (!firstName.trim()) {
        return "Missing First Name";
    } else if (!surName.trim()) {
        return "Missing Sur Name";
    }
  
    if(!useFormalName){
     return (firstName + " " + surName);
    } else if(useFormalName && !isFemale) {
        return ("Lord " + firstName + " " + surName);
    } else {
        return ("Lady " + firstName + " " + surName);
    }
}