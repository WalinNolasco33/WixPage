create table users(id int  primary key not null auto_increment,
user varchar(50),
name varchar(150),
pass varchar(60),
rol varchar(15) DEFAULT "user"
);