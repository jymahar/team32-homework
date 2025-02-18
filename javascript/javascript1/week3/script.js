const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}

//Code done
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

///When will we be there??

const travelInformation = {
  speed: 50, // in Km/hr
  destinationDistance: 432, //Km
};

function calculateTravelTime(travelInformation) {
  const distance = travelInformation.destinationDistance;
  const speed = travelInformation.speed;
  if (distance <= 0) {
    console.error("Distance is invalid");
    return;
  } else if (speed <= 0) {
    console.error("Speed is invalid");
    return;
  } else {
    const totalMinutes = (distance / speed) * 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    return `${hours} hours and ${minutes} minutes`;
  }
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
