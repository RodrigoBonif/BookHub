create databases bookhub;

create table usuario(
  idUsuario int primary key auto_increment,
  nmUsuario varchar(100),
  emailUsuario varchar(300),
  idadeUsuario int,
  senhaUsuario varchar(50)
);
