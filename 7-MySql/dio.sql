CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30),
    nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ('Wallan Mota', '1992_02_13')