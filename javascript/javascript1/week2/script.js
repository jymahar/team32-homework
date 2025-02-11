
const firstname = "Benjamin";
const surname = "Hughes";
const isFemale = false;
const useFormalName= false;

const fullname1= getFullname(firstname, surname, useFormalName, isFemale);
const fullname2= getFullname(firstname, surname, true, isFemale);
const fullname3= getFullname("Jyoti", "Mahar", true,true );

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

/**
 * Function to get fullname
 * @param {string} firstname 
 * @param {string} surname 
 * @param {boolean} useFormalName 
 */
function getFullname(firstname, surname, useFormalName, isFemale) {

    if(firstname === '' || surname === '') {
        alert("Please enter your first or last name");
        return;
    }
  
    if(!useFormalName){
     return (firstname + " " + surname);
    } else if(useFormalName && !isFemale) {
        return ("Lord " + firstname + " " + surname);
    } else {
        return ("Lady " + firstname + " " + surname);
    }
}