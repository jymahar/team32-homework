let firstWords =["Easy", "Awesome", "Crazy","Soul" , "Magic", "Wonderful", "Amazing","Incredible", "Rare", "Unique"];

let secondWords=["Corporation","Company", "Limited" ,"Technology", "Tech", "Corp","Associate", "Association","Venture", ];

const randomNumberOne= Math.floor(Math.random() * 10);
const randomNumberTwo= Math.floor(Math.random() * 10);

let startupName = "";
startupName = firstWords[randomNumberOne] + " " + secondWords[randomNumberTwo];

let output = `The startup: ${startupName} contains ${startupName.length} characters`;

console.log(output);