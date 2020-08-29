import connection from '../config';
import pg, { Client } from 'pg';

const db = new pg.Client(connection)

async function createTable() {
  await db.connect()

  await db.query(`create table tbSystem(
    idSystem int primary key,
    systemName varchar(50) unique not null,
    mnemonic char(5) unique not null
  );`)

  await db.query(`create table tbRule(
    idRule int primary key,
    ruleName varchar(50) unique not null,
    idSystem int,
    FOREIGN KEY (idSystem) REFERENCES tbSystem (idSystem)
  );`)

  await db.query(`create table tbLogin(
    idLogin bigint primary key not null,
    login varchar(30) unique not null,
    password varchar(112) not null,
    nome varchar(80) not null,
    email varchar(100) not null
  );`)

  await db.query(`
  create table tbLoginRules(
    fk_IdRule int,
    fk_idLogin bigint,
    foreign key (fk_IdRule) references tbRule (idRule),
    foreign key (fk_idLogin) references tbLogin (idLogin)
  );`)

  await db.end()

  return console.log('As tabelas foram criadas')
}

createTable();