/*Cria tabela*/
CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30),
    nascimento DATE
)
/*Insere dados na tabela*/
INSERT INTO pessoas (nome, nascimento) VALUES ('Wallan Mota', '1992_02_13')
INSERT INTO pessoas (nome, nascimento) VALUES ('João Carlos', '1980_05_26')

/*Retorna dados da tabela*/
SELECT * FROM pessoa /*Retorna tudo da tabela pessoa*/

SELECT nome, nascimento FROM pessoa /*Retorna apenas os dados das colunas informadas*/

/*Altera dados na tabela*/
UPDATE pessoa SET nome='WALLAN MOTA' WHERE id=1
    /*Importante passar o WHERE se não o comando iria alterar todos os nomes da tabela*/

/*Deletando informações da tabela*/
DELETE FROM pessoa WHERE id=2 /*Irreversivel*/

    /*Boa pratica*/
    SELECT * FROM pessoa WHERE id=2 /*verificar o valor antes de deletar*/
    DELETE FROM pessoa WHERE id=2

/*Ordenação*/
SELECT * FROM pessoa ORDER BY nome
    /*Nesse caso traria os nomes por ordem alfabetica*/

SELECT * FROM pessoa ORDER BY nome DESC
    /*Ordem decresente*/
