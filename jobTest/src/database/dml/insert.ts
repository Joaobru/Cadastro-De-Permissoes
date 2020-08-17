import connection from '../config';
import {Request,Response} from 'express';
import pg, { Client } from 'pg';

const db = new pg.Client(connection)

async function insertTable() {
  await db.connect();

  await db.query(`
  insert into tbSystem (idSystem ,systemName, mnemonic) 
			  values (1, 'Gerenciamento de usuários', 'FSEFV'),
			  	 (2, 'Gerenciamento de compras', 'ASVRT');`)
 
  
  await db.query(`
  insert into tbRule (idRule, ruleName, idSystem) 
			values (1,'Criação de usuários', 1),
			       (2,'Atualizar dados dos usuários', 1),
			       (3,'Deletar dados dos usuários', 1),
			       (4,'Selecionar os dados dos usuários', 1),
			       (5,'Colocar itens no carrinho', 2),
			       (6,'Retirar itens do carrinho', 2),
			       (7,'Escolher forma de pagamento', 2),
			       (8,'Efetuar pagamento', 2);`)

  await db.query(`
  insert into tbLogin (idlogin, login, password, nome, email) 
 			 values (1, 'Joaobru', '15268', 'João Paulo', 'joaobru@gmail.com'),
			        (2, 'Gabrielbru', '86215', 'Gabriel', 'gabrielbru@gmail.com'),
				      (3, 'Marcusbru', '36518', 'Marcus', 'marcusbru@gmail.com');`)

  await db.end()

  console.log('Dados inseridos');
}

insertTable();