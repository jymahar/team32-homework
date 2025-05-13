const args = process.argv.slice(2);

if (args.length == 0) {
  console.error("No arguments provided. Please enter numbers");
  process.exit(1);
}

// Converts arguments to numbers
const numbers = args.map(Number);

// Check for invalid inputs
if (numbers.some(isNaN)) {
  console.error("Please provide only valid numbers.");
  process.exit(1);
}

const sum = numbers.reduce((acc, num) => acc + num, 0);

// Calculate the average
const average = sum / numbers.length;

console.log(`Average: ${average}`);
