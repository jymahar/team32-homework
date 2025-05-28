let savedName = " ";
const toDoList = [];

/**
 * function to get Reply from voice assistant
 * using input as command
 * @param {*} command
 */
function getReply(command) {
  if (typeof command != "string" || typeof command == undefined) {
    return "Invalid input";
  }
  const input = command.toLowerCase();
  let activity;

  if (input.includes("hello my name is")) {
    let token = input.split(" ");
    const username = token[token.length - 1];
    if (savedName.length === 0 || savedName != username) {
      savedName = username;
      return `Nice to meet you ${username}`;
    } else if (savedName === username) {
      return `Nice to meet you again ${username}`;
    }
  } else if (input.includes("what is my name")) {
    if (savedName === " ") {
      return `Sorry I dont know your name`;
    } else {
      return `Your name is ${savedName}`;
    }
  } else if (input.includes("add") && input.includes("todo")) {
    activity = input.match(/add (.*?) to my todo/)[1];
    toDoList.push(activity);
    return `${activity} added to your todo`;
  } else if (input.includes("remove") && input.includes("todo")) {
    for (let i in toDoList) {
      if (input.includes(toDoList[i])) {
        activity = toDoList[i];
        toDoList.splice(i, 1);
      }
      break;
    }
    return `Removed ${activity} from your todo`;
  } else if (input.includes("what is on my todo?")) {
    return readToDoList();
  } else if (
    (input.includes("what") || input.includes("which")) &&
    (input.includes("day") ||
      (input.includes("date") && input.includes("today")))
  ) {
    return getCurrentDate();
  } else if (input.match(/what is (\d+)\s*([\+\-\*\/])\s*(\d+)/i)) {
    return checkMathOperation(command);
  } else if (input.includes("set") && input.includes("timer")) {
    setTimer(input);
  } else {
    return "Sorry I dont understand you";
  }
}

function getCurrentDate() {
  const day = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `Today is ${day.getDate()} of ${
    months[day.getMonth()]
  } ${day.getFullYear()}`;
}

function readToDoList() {
  let result = "";
  const toDoListSize = toDoList.length;
  if (toDoListSize === 0) {
    result = `You have nothing in todo list`;
  } else if (toDoListSize === 1) {
    result = `You have ${toDoList.length} todos- ${toDoList[0]}`;
  } else if (toDoListSize === 2) {
    result = `You have ${toDoList.length} todos- ${toDoList[0]} and ${toDoList[1]}`;
  } else {
    result = `You have ${toDoList.length} todos- ${toDoList.toString()}`;
  }
  return result;
}

function checkMathOperation(command) {
  let mathMatch = command.match(/what is (\d+)\s*([\+\-\*\/])\s*(\d+)/i);
  let num1 = parseInt(mathMatch[1]);
  let operator = mathMatch[2];
  let num2 = parseInt(mathMatch[3]);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  return result;
}

function setTimer(command) {
  let timerMatch = command.match(/set a timer for (\d+) minutes?/i);
  if (timerMatch) {
    let minutes = parseInt(timerMatch[1]);
    let milliseconds = minutes * 60 * 1000;

    console.log(`Timer set for ${minutes} minutes`);

    setTimeout(() => {
      console.log("Timer done");
    }, milliseconds);

    return `Timer set for ${minutes} minutes`;
  }
}

console.log(getReply("What is my name"));
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("Hello my name is Benjamin")); //nice to meet you again benjamin
console.log(getReply("What is my name")); //"Your name is Benjamin"
console.log(getReply("Hello my name is Jyoti"));
console.log(getReply("What is my name")); //"Your name is Jyoti"
console.log(getReply("Add fishing to my todo")); //fishing added to your todo
console.log(getReply("Add singing in shower to my todo")); //singing in shower added to your todo
console.log(getReply("Add running to my todo")); //running added to your todo
console.log(getReply("Remove fishing from my todo")); //Removed fishing from your todo

console.log(getReply("What is on my todo?")); //You have 2 todos- singing in shower and running
console.log(getReply("What day is it today?")); //Today is 25 of February 2025
console.log(getReply("Which date is today?")); //Today is 25 of February 2025

console.log(getReply("What is 2 + 2")); // 4
console.log(getReply("What is 4580 + 2000")); // 6580
console.log(getReply("What is 4580 - 2000")); // 2580
console.log(getReply("What is 1000 * 0")); // 0

getReply("Set a timer for 4 minutes"); //Timer set for 1 minutes. Then after 4 mins "Timer done"

console.log(getReply("Tell me about yourself")); //Sorry I dont understand you
