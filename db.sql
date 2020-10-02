create table approvals (
id serial not null primary key,
delivery_status text not null,
numbers int not null
);

create table medication (
id serial not null primary key,
meds text not null

);

create table package (
id serial not null primary key,
medicine text not null

);


insert into approvals(delivery_status, numbers) values ('delivered', '210');
insert into approvals(delivery_status, numbers) values ('undelivered', '90');
insert into approvals(delivery_status, numbers) values ('missing_content', '120');




