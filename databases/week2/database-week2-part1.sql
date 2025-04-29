


--Add a task with these attributes: title, description, created, updated, 
--due_date, status_id, user_id
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Vaccum 2', 'Clean all rooms.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 1, 1);
--Change the title of a task
UPDATE task SET title = 'Clean living room' WHERE id = 36;
---Change a task due date
UPDATE task SET due_date = '2025-04-28 19:00:00' WHERE id = 36;
---Change a task status
UPDATE task SET status_id = 2 WHERE id = 36;
---Mark a task as complete
UPDATE task SET status_id =(select id from status where name="Done") where id=39;
---Delete a task
DELETE FROM task where id=36;