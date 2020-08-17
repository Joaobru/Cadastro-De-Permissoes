import connection from '../config';
import pg, { Client } from 'pg';

const client = new pg.Client(connection)

async function dropTable() {
  await client.connect();

  await client.query(`DROP TABLE tbSystem CASCADE`)
  await client.query(`DROP TABLE tbRule CASCADE`)
  await client.query(`DROP TABLE tbLogin CASCADE`)
  await client.query(`DROP TABLE tbLoginRules CASCADE`)

  await client.end()

  return console.log('As tabelas foram apagadas')
}

dropTable();