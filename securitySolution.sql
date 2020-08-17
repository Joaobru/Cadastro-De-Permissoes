//DDL

create table tbSystem(
	idSystem int primary key,
	systemName varchar(50) unique not null,
	mnemonic char(5) unique not null
);

create table tbRule(
	idRule int primary key,
	ruleName varchar(50) unique not null,
	idSystem int,
	FOREIGN KEY (idSystem) REFERENCES tbSystem (idSystem)
);

create table tbLogin(
	idLogin bigint primary key not null,
	login varchar(30) unique not null,
	password varchar(112) not null,
	nome varchar(80) not null,
	email varchar(100) not null
);

create table tbLoginRules(
	idRule int,
	idLogin int,
	FOREIGN KEY (idRule) REFERENCES tbRule (idRule),
	FOREIGN KEY (idLogin) REFERENCES tbLogin (idLogin)
);

//DML

insert into tbSystem (idSystem ,systemName, mnemonic) 
			  values (1, 'Gerenciamento de usuários', 'FSEFV'),
			  	 (2, 'Gerenciamento de compras', 'ASVRT');
			  
insert into tbRule (idRule, ruleName, idSystem) 
			values (1,'Criação de usuários', 1),
			       (2,'Atualizar dados dos usuários', 1),
			       (3,'Deletar dados dos usuários', 1),
			       (4,'Selecionar os dados dos usuários', 1),
			       (5,'Colocar itens no carrinho', 2),
			       (6,'Retirar itens do carrinho', 2),
			       (7,'Escolher forma de pagamento', 2),
			       (8,'Efetuar pagamento', 2);
			
insert into tbLogin (idlogin, login, password, nome, email) 
 			 values (1, 'Joaobru', '15268', 'João Paulo', 'joaobru@gmail.com'),
			        (2, 'Gabrielbru', '86215', 'Gabriel', 'gabrielbru@gmail.com'),
				(3, 'Marcusbru', '36518', 'Marcus', 'marcusbru@gmail.com');
