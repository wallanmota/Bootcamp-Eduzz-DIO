/*Cria tabela*/
CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30),
    nascimento DATE
)
/*Insere dados na tabela*/
INSERT INTO pessoas (nome, nascimento) VALUES ('Wallan Mota', '1992_02_13')

/*Retorna dados da tabela*/
SELECT * FROM pessoa /*Retorna tudo da tabela pessoa*/

SELECT nome, nascimento FROM pessoa /*Retorna apenas os dados das colunas informadas*/

/*Altera dados na tabela*/
UPDATE pessoa SET nome='WALLAN MOTA' WHERE id=1
    /*Importante passar o WHERE se não o comando iria alterar todos os nomes da tabela*/
    