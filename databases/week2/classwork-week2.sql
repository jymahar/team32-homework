/* 2025-04-14 22:36:38 [826 ms] */ 
SELECT COUNT(*) FROM task LIMIT 100;
/* 2025-04-14 22:42:07 [7 ms] */ 
SELECT * from task where due_date=NULL LIMIT 100;
/* 2025-04-14 22:45:17 [32 ms] */ 
SELECT * from task where due_date IS NULL LIMIT 100;
/* 2025-04-14 22:50:54 [12 ms] */ 
SELECT * from task
JOIN status ON task.status_id=status.id where status.name="Done" LIMIT 100;
/* 2025-04-14 22:52:32 [10 ms] */ 
SELECT task.title, status.name from task
JOIN status ON task.status_id=status.id where status.name="Done" LIMIT 100;
/* 2025-04-14 22:52:49 [7 ms] */ 
SELECT task.id,task.title, status.name from task
JOIN status ON task.status_id=status.id where status.name="Done" LIMIT 100;
/* 2025-04-14 23:00:06 [32 ms] */ 
select task.id,task.title,status.name from task
JOIN status on task.status_id=status.id where status.id in (1,2) LIMIT 100;
/* 2025-04-14 23:01:49 [9 ms] */ 
select task.id,task.title,status.name from task
JOIN status on task.status_id=status.id where status.name !="Done" LIMIT 100;
/* 2025-04-14 23:06:16 [8 ms] */ 
select * from task order by created DESC LIMIT 100;
/* 2025-04-14 23:07:23 [8 ms] */ 
select title, created from task order by created DESC LIMIT 100;
/* 2025-04-14 23:08:20 [145 ms] */ 
select title, created from task order by created DESC LIMIT 1;
/* 2025-04-14 23:10:07 [9 ms] */ 
select title, due_date from task where title LIKE '%database%' OR description  LIKE '%database%' LIMIT 100;
/* 2025-04-14 23:11:04 [7 ms] */ 
select title, description, due_date from task where title LIKE '%database%' OR description  LIKE '%database%' LIMIT 100;
/* 2025-04-14 23:11:44 [6 ms] */ 
select title, due_date from task where title LIKE '%database%' OR description  LIKE '%database%' LIMIT 100;
/* 2025-04-14 23:14:50 [7 ms] */ 
select title, status.name from task JOIN  status on task.status_id=status.id LIMIT 100;
/* 2025-04-14 23:15:35 [7 ms] */ 
select task.title, status.name from task JOIN  status on task.status_id=status.id LIMIT 100;
/* 2025-04-14 23:17:32 [8 ms] */ 
select task.title from task JOIN  status on task.status_id=status.id LIMIT 100;
/* 2025-04-14 23:17:55 [7 ms] */ 
select task.title,status.name from task JOIN  status on task.status_id=status.id LIMIT 100;
/* 2025-04-14 23:28:21 [8 ms] */ 
SELECT status.name, COUNT(task.id) as total_tasks
FROM task
JOIN status ON task.status_id = status.id
GROUP BY status.name LIMIT 100;
/* 2025-04-14 23:29:28 [7 ms] */ 
SELECT COUNT(task.id) as total_tasks
FROM task LIMIT 100;
/* 2025-04-14 23:33:42 [6 ms] */ 
SELECT status.name, COUNT(task.id) AS total_tasks
FROM task
    JOIN status ON status.id = task.status_id
GROUP BY
    status.name LIMIT 100;
/* 2025-04-14 23:33:59 [5 ms] */ 
SELECT status.name, COUNT(task.id) AS total_tasks
FROM task
    JOIN status ON task.status_id= status.id
GROUP BY
    status.name LIMIT 100;
/* 2025-04-14 23:35:05 [8 ms] */ 
SELECT status.name, COUNT(task.id) AS total_tasks
FROM task
    JOIN status ON task.status_id= status.id
GROUP BY
    status.name ORDER BY total_tasks DESC LIMIT 100;
/* 2025-04-27 12:31:33 [682 ms] */ 
SELECT task.title, user.name
 FROM task JOIN user ON task.user_id = user.id
 WHERE user.name like'Pavel' LIMIT 100;
/* 2025-04-27 12:31:58 [47 ms] */ 
SELECT task.title, user.name
 FROM task JOIN user ON task.user_id = user.id
 WHERE user.name like'%Pavel%' LIMIT 100;
/* 2025-04-27 12:35:05 [6 ms] */ 
SELECT * from task JOIN user on task.user_id=user.id where user.name like '%Pavel%' LIMIT 100;
/* 2025-04-27 12:36:02 [2 ms] */ 
SELECT task.title, user.name,user.id from task JOIN user on task.user_id=user.id where user.name like '%Pavel%' LIMIT 100;
/* 2025-04-27 12:37:03 [506 ms] */ 
SELECT * from task JOIN user on task.user_id= user.id where user.name='Pavel%' LIMIT 100;
/* 2025-04-27 12:37:45 [3 ms] */ 
SELECT * from task JOIN user on task.user_id= user.id where user.name='%Pavel%' LIMIT 100;
/* 2025-04-27 12:38:01 [3 ms] */ 
SELECT * from task JOIN user on task.user_id= user.id where user.name LIKE '%Pavel%' LIMIT 100;
/* 2025-04-27 12:38:24 [4 ms] */ 
SELECT task.id, task.title,user.id from task JOIN user on task.user_id= user.id where user.name LIKE '%Pavel%' LIMIT 100;

INSERT INTO task (id,title, description, created, updated, due_date, status_id, user_id) VALUES (36,"Cook food","light dinner for 2 people","2017-10-25 06:54:16","2017-10-25 06:55:16", "2017-10-25 09:00:00",1,1);
/* 2025-04-27 13:12:50 [470 ms] */ 
--Insert new task
INSERT INTO task (id,title, description, created, updated, due_date, status_id, user_id) VALUES (36,"Cook food","light dinner for 2 people","2017-10-25 06:54:16","2017-10-25 06:55:16", "2017-10-25 09:00:00",1,1);

select * from task where id=36;
/* 2025-04-27 13:13:49 [4 ms] */ 
select * from task where id=36 LIMIT 100;
--update title
UPDATE task SET title = 'Cook dinner for 2' WHERE id = 36;
/* 2025-04-27 13:15:21 [149 ms] */ 
UPDATE task SET title = 'Cook dinner for 2' WHERE id = 36;
/* 2025-04-27 13:15:25 [9 ms] */ 
select * from task where id=36 LIMIT 100;

UPDATE task SET due_date = '2025-04-28 19:00:00' WHERE id = 36;/* 2025-04-27 13:16:43 [187 ms] */ 
--Udate due date 
UPDATE task SET due_date = '2025-04-28 19:00:00' WHERE id = 36;
/* 2025-04-27 13:16:46 [4 ms] */ 
select * from task where id=36 LIMIT 100;

--Update task status
UPDATE task SET status_id = 2 WHERE id = 36;
/* 2025-04-27 13:18:31 [89 ms] */ 
UPDATE task SET status_id = 2 WHERE id = 36;
/* 2025-04-27 13:18:39 [5 ms] */ 
select * from task where id=36 LIMIT 100;
--Mark task as comple
UPDATE task SET status_id = 3 WHERE id = 36;/* 2025-04-27 13:19:28 [98 ms] */ 
UPDATE task SET status_id = 3 WHERE id = 36;
/* 2025-04-27 13:19:55 [3 ms] */ 
select * from task where id=37 LIMIT 100;

UPDATE task SET status_id =(select id from status where name="Done");


--Delete a task
DELETE FROM task where id=36;/* 2025-04-27 13:20:50 [118 ms] */ 
DELETE FROM task where id=36;
/* 2025-04-27 13:20:55 [4 ms] */ 
select * from task where id=36 LIMIT 100;


insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (36, 'Cook food', 'Title says it all.', '2025-04-27 13:30:00', '2025-04-27 13:30:09', null, 1, 1);/* 2025-04-27 13:30:53 [334 ms] */ 
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (36, 'Cook food', 'Title says it all.', '2025-04-27 13:30:00', '2025-04-27 13:30:09', null, 1, 1);

select * from task where id=36;
/* 2025-04-27 13:31:11 [3 ms] */ 
select * from task where id=37 LIMIT 100;

insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Vaccum ', 'Clean all rooms.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1, 1);
/* 2025-04-27 13:39:52 [133 ms] */ 
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Vaccum ', 'Clean all rooms.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1, 1);
/* 2025-04-27 13:39:57 [4 ms] */ 
select * from task where id=36 LIMIT 100;
/* 2025-04-27 13:40:04 [3 ms] */ 
select * from task where id=37 LIMIT 100;


UPDATE task SET updated = CURRENT_TIMESTAMP WHERE id = 37;/* 2025-04-27 13:42:35 [254 ms] */ 
UPDATE task SET updated = CURRENT_TIMESTAMP WHERE id = 37;
/* 2025-04-27 13:42:38 [4 ms] */ 
select * from task where id=37 LIMIT 100;


UPDATE task
SET title = 'Wash the car'
ORDER BY id DESC
LIMIT 1;
/* 2025-04-27 14:47:52 [292 ms] */ 

/* 2025-04-27 14:57:29 [272 ms] */ 
UPDATE task SET status_id =(select id from status where name="Done");
/* 2025-04-27 14:57:35 [2 ms] */ 
select * from task where id=37 LIMIT 100;
/* 2025-04-29 23:10:49 [1642 ms] */ 
SELECT status.name, COUNT(task.id) AS total_tasks
FROM task
    JOIN status ON status.id = task.status_id
GROUP BY
    status.name LIMIT 100;
/* 2025-04-29 23:12:51 [39 ms] */ 
SELECT * from task where due_date IS NULL LIMIT 100;
