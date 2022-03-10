create database prova;

use prova;

create table turmas(
id_turma int PRIMARY KEY not null auto_increment,
nome_turma varchar(50),
curso varchar(50),
data_inicio date
);

create table alunos(
id_aluno int PRIMARY KEY not null auto_increment,
nome_aluno varchar(50),
data_matricula date,
id_turma int not null,
FOREIGN KEY (id_turma) REFERENCES turmas (id_turma)
);

insert into turmas (nome_turma,curso,data_inicio)
values ('Computação','DevWeb','2022-03-01');
insert into turmas (nome_turma,curso,data_inicio)
values ('Computação','Fisica','2020-02-15');
insert into turmas (nome_turma,curso,data_inicio)
values ('Computação','Calculo','2015-06-21');

insert into alunos (nome_aluno,data_matricula,id_turma)
values ('Andre Rabelo','2010-02-01','1');
insert into alunos (nome_aluno,data_matricula,id_turma)
values ('Kildare Alves','2015-05-31','2');
insert into alunos (nome_aluno,data_matricula,id_turma)
values ('Bianca Santos','2020-08-11','3');