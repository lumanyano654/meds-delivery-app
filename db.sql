create table prescription (
id serial not null primary key,
client_name text not null,
code int not null

);

create table medication (
id serial not null primary key,
meds text not null

);


insert into prescription(client_name, code) values ('Nokwakha', '4553');
insert into prescription(client_name, code) values ('Bhulu', '7853');
insert into prescription(client_name, code) values ('Zoleka', '6453');
insert into prescription(client_name, code) values ('Biko','3544');
insert into prescription(client_name, code) values ('Ngubane','8779');
insert into prescription(client_name, code) values ('Jack', '6738');
