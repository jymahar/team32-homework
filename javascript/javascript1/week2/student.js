const class07Students = [];
addStudentToClass(name);
console.log(class07Students);
addStudentToClass("Mary");
addStudentToClass("Tom");
addStudentToClass("Richard");
console.log(class07Students);
//Adready present student
addStudentToClass("John");
console.log(class07Students);

addStudentToClass("Mads");
addStudentToClass("Henry");
console.log(class07Students);
//class is full
addStudentToClass("Iga");
console.log(class07Students);
addStudentToClass("Queen");
console.log(class07Students);

console.log("Total Number of students in class 07: "+getNumberOfStudents());


/**
 * Function to add students in Class
 * @param {string} studentName
 */
function addStudentToClass(studentName) {

    if(studentName == '') {
        return;
    } else if (class07Students.length == 6 && studentName !="Queen") {
        console.log("Cannot add more students to Class 07");
    } else if (studentName != " " && class07Students.indexOf(studentName) >-1) {
        console.log(`Student ${studentName} is already in the class`);

    } else {
      class07Students.push(studentName);
    }

    return;
 
}
/**
 * 
 * @returns Funtion to return total no of Students in Class
 */
function getNumberOfStudents() {
  return class07Students.length;

}