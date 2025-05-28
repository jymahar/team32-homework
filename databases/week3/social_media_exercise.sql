CREATE DATABASE socialmedia_db;
USE socialmedia_db;


-- USERES TABLE:
CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
pasword TEXT NOT NULL,
registration_datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- POSTS TABLE:
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    creation_datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_datetime TIMESTAMP,
    FOREIGN KEY users(id) REFERENCES users(id) ON DELETE CASCADE
    );


-- COMMENTS TABLE:
CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    parent_comment_id INT,
    content TEXT NOT NULL,
    creation_datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_datetime TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_comment_id) REFERENCES comments(id) ON DELETE CASCADE
);

-- REACTIONS TABLE:
CREATE TABLE reactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL ,
    post_id INT,
    comment_id INT,
    reaction_type VARCHAR(20) CHECK (reaction_type IN ('like', 'highfive', 'laugh', 'cry')),
    CONSTRAINT unique_reaction UNIQUE (user_id, reaction_type, post_id, comment_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE,
    CHECK (
        (post_id IS NOT NULL AND comment_id IS NULL) OR 
        (post_id IS NULL AND comment_id IS NOT NULL)
    )
);

-- FRIENDSHIPS TABLE:
CREATE TABLE friendships (
    user_id1 INT NOT NULL ,
    user_id2 INT NOT NULL,
    PRIMARY KEY (user_id1, user_id2),
    CHECK (user_id1 < user_id2),
    FOREIGN KEY (user_id1) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id2) REFERENCES users(id) ON DELETE CASCADE
);

--- Users
INSERT INTO users (name, email, password) VALUES 
('Alice', 'alice@example.com', 'hashed_pw1'),
('Bob', 'bob@example.com', 'hashed_pw2'),
('Charlie', 'charlie@example.com', 'hashed_pw3');

-- Friendships
INSERT INTO friendships (user_id1, user_id2) VALUES (1, 2), (1, 3);

-- Posts
INSERT INTO posts (user_id, title, content) VALUES
(1, 'Hello World', 'My first post!'),
(2, 'React Tips', 'Hooks are awesome.');

-- Comments
INSERT INTO comments (user_id, post_id, content) VALUES
(2, 1, 'Welcome to the platform!'),
(3, 1, 'Nice to see you here!');

INSERT INTO comments (user_id, post_id, parent_comment_id, content) VALUES
(1, 1, 1, 'Thanks Bob!');

-- Reactions
INSERT INTO reactions (user_id, post_id, reaction_type) VALUES
(2, 1, 'like'),
(3, 1, 'laugh');

INSERT INTO reactions (user_id, comment_id, reaction_type) VALUES
(1, 1, 'like'),
(1, 1, 'laugh');