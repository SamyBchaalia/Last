DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;
CREATE TABLE users(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(100),
  email varchar(100),
  password varchar(1000),
  Cohort varchar(100),
  Role varchar(50) , 
  firstTime boolean not null default true,
  student boolean not null default false,
  instactor boolean not null default false,
  coursCreator boolean not null default false,
  admin boolean not null default false
);

CREATE TABLE Modules (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nameModule varchar(40),
  video varchar(5000),
  nameCours varchar(20),
  previous INT(4),
  next INT(4)
);
CREATE TABLE Content (
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(30),
  description varchar(10000),
  idModule INT(4)
);
CREATE TABLE Courses(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  content text(16383),
  nameCours varchar(30),
  Creator varchar(30),
  videoUrl text(10000),
  imageUrl text(10000),
  Cohort   varchar(100),
  visibility boolean not null default false
);
CREATE TABLE Cohort(
  id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nameCohort varchar(100),
  nameCours varchar(100)
);
CREATE TABLE Instructors(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nameInstructor varchar(100),
email varchar(400),
password varchar(100),
nameCohort varchar(100)
);
CREATE TABLE CoursCreator(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nameCoursCreator varchar(100),
    email varchar(400),
    password varchar(100)
);
CREATE TABLE Stud(
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR (50),
    lastname VARCHAR (50) ,
    password VARCHAR (150) NOT NULL,
    email VARCHAR (50) NOT NULL ,
    token varchar (300) ,
    nameCohort VARCHAR(100)
);
CREATE TABLE progress(
  idStud INT(4),
  numberOfModulesCompleted INT(4)
);
CREATE TABLE points(
  idStud INT(4),
  points int(10)
);

CREATE TABLE CoursesLast(
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nameCours VARCHAR(50),
Creator VARCHAR(200),
description text(16000),
imageUrl text(10000)
);

CREATE TABLE ModuleLast(
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
coursId INT(4),
title varchar(50),
videoUrl VARCHAR(5000)
);

CREATE TABLE PragraphLast(
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
title varchar(50),
content text(16383),
imageUrl text(10000),
ModuleId INT(4)
);


INSERT INTO CoursesLast (imageUrl,nameCours,Creator,description) values ("https://miro.medium.com/max/960/1*YfEOtukQSNXUOBcgZjuKLg.png","Full Stack Java Script","Samy Ben Chaalia Test","A full stack JavaScript developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using Node. js)");
INSERT INTO CoursesLast (imageUrl,nameCours,Creator,description) values ("data:image/png;base64,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","Learn Symfony","Samy Ben Chaalia Test","Symfony is an Open Source PHP framework for web applications and a set of reusable PHP components. ... Thousands of web sites and applications rely on Symfony as the foundation of their web services. And most of the leading PHP projects, such as Drupal and Laravel use Symfony components to build their applications");
INSERT INTO users (username,email,password,student,instactor,coursCreator,admin) values("sami","sami.benchaalia@sesame.com.tn","123",true,true,true,true);

