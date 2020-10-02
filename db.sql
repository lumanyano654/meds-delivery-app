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

create table prescriptions (                                                                                                                       
    id serial not null primary key,
    client_name text not null,
    code int not null,
    medicine text not null
);

insert into prescriptions(client_name, code, medicine) 
    values ('Nokwakha', '4553','Panado, paracetamol,meglitindes,thiazolidiledioles,DPP-4 inhibitors,');
insert into prescriptions(client_name, code, medicine) 
    values ('Nokwakha', '4553','Panado,Paracetamol,Meglitindes,Thiazolidiledioles,DPP-4 inhibitors');
insert into prescriptions(client_name, code, medicine) 
    values ('Zoleka ','6453', 'abraxane, adriamycin, doxii,cytoxan, cardoplain,daunorudich'); 
insert into prescriptions(client_name, code, medicine) 
    values ( 'Biko', '3544', 'rifanou, antibiotics,rifafou isoniasid, rifampicin')
insert into prescriptions(client_name, code, medicine) 
    values ('Ngubane', '8779', 'acetaminophen, tylenon, avii, motrin IB')   
insert into prescriptions(client_name, code, medicine) 
    values (  'Jack', '6738', 'decongestant, cough syrup,analgesic, antiviral drug')
insert into prescriptions(client_name, code, medicine) 
    values (  'Nokwakha', '4553', 'Panado, paracetamol,meglitindes,thiazolidiledioles,DPP-4 inhibitors')
insert into prescriptions(client_name, code, medicine) 
    values ( 'Bhulu ', '7853', 'steriod, analgesic, narcotic, immunesuppresive drug')
 






