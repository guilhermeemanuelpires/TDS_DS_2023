create database apiDB;

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `idade` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `materia` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(1, 'Laizia', 17, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(2, 'Jeancarlos', 16, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(3, 'Douglas', 16, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(4, 'Diego', 16, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(5, 'Otávio', 16, NULL);

INSERT INTO apiDB.professor (id, nome, materia) VALUES(1, 'Guilherme Pires', 'DEV');