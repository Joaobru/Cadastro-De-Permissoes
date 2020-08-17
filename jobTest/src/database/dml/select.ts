import connection from '../config';
import pg, { Client } from 'pg';

const client = new pg.Client(connection)

async function selectTable() {
  await client.connect();

  const selectModel = 'select * from tbSystem  as s '+
    'join tbRule as r on s.idSystem = r.idSystem '+
    'where s.idSystem = $1'

  const user = [1]

  await console.log(user)
  const selected = await client.query(selectModel ,user)

  await client.end()

  console.table(selected.rows);
}

selectTable();