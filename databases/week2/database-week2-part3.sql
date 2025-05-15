/*Get all the tasks assigned to users whose email ends in @spotify.com
Get all the tasks for 'Donald Duck' with status 'Not started'
Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/

--1.Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id, task.title, user.name, user.email
FROM task
JOIN user_task
ON user_task.task_id = task.id
JOIN user
ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

--2.Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id, task.title, user.name, status.name
FROM task
JOIN status
ON task.status_id = status.id
JOIN user_task
ON user_task.task_id = task.id
JOIN user
ON user_task.user_id = user.id
WHERE status.name like '%Not started%' AND user.name LIKE '%Donald Duck%';

--3.Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.id, task.title as task_title, user.name as user_name,task.created
FROM task
JOIN user_task
ON user_task.task_id = task.id
JOIN user
ON user_task.user_id = user.id
WHERE user.name LIKE '%Maryrose Meadows%' AND MONTH(task.created) = 9;

--4.Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by
SELECT MONTHNAME(task.created) as month, COUNT(task.id) AS Total_No_of_tasks
FROM task
GROUP BY MONTH(task.created), MONTHNAME(task.created)
ORDER BY MONTH(task.created);



