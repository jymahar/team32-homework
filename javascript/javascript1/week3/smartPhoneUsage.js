const activities = [];

function addActivity(activity, duration) {
  const today = new Date();
  const obj = {
    date: today.toLocaleDateString(),
    activity: activity,
    duration: duration,
  };

  activities.push(obj);
  console.log("Added activity");
}

addActivity("Youtube", 20);
addActivity("Instagram", 30);
addActivity("Watsapp", 15);
addActivity("LinkedIn", 20);

console.log(activities);
/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/

function showStatus() {
  const today = new Date().toLocaleDateString();
  const usageLimit = 300; //5hrs in mins

  if (activities.length === 0) {
    console.log(`Add some activities before calling showStatus`);
    return;
  }

  const todayActivities = activities.filter(
    (activity) => activity.date === today
  );
  const totalUsage = todayActivities.reduce(
    (sum, activity) => sum + activity.duration,
    0
  );

  console.log(
    `${
      totalUsage > usageLimit
        ? "You have reached your limit, no more smartphoning for you!"
        : `You have added ${todayActivities.length} activities. They amount to ${totalUsage} min. of usage`
    }`
  );
}

showStatus(activities); // will log out this "You have added 3 activities. They amount to 85 min. of usage"

addActivity("Youtube", 300);
showStatus(activities); //Log "You have reached your limit, no more smartphoning for you!""

function mostUsedActivity() {
  let maxTime = Number.NEGATIVE_INFINITY;
  let appName;
  for (let n of activities) {
    if (n.duration > maxTime) {
      maxTime = n.duration;
      appName = n.activity;
    }
  }
  console.log(`User has spent the most time on ${appName} activity`);
}

mostUsedActivity(); // Will log out "User has spent the most time on Youtube  activity"
