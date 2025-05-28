--1. Find out how many tasks are in the task table
SELECT COUNT(*) FROM task;
--2. Find out how many tasks in the task table do not have a valid due date
SELECT * from task where due_date IS NULL;
--3. Find all the tasks that are marked as done
SELECT task.id,task.title, status.name from task
JOIN status ON task.status_id=status.id where status.name="Done"

--4. Find all the tasks that are not marked as done
select task.id,task.title,status.name from task
JOIN status on task.status_id=status.id where status.name !="Done"

--5. Get all the tasks, sorted with the most recently created first
select title, created from task order by created DESC;

--6. Get the single most recently created task
select title, created from task order by created DESC LIMIT 1;

--7.Get the title and due date of all tasks where the title or description contains database
select title, due_date from task where title LIKE '%database%' OR description  LIKE '%database%'; 

--8. Get the title and status (as text) of all tasks
select task.title, status.name from task JOIN  status on task.status_id=status.id; 
--9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) AS total_tasks
FROM task
    JOIN status ON task.status_id= status.id
GROUP BY
    status.name;
---10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.id) AS total_tasks
FROM task
    JOIN status ON task.status_id= status.id
GROUP BY
    status.name ORDER BY total_tasks DESC
