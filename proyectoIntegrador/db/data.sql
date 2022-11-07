CREATE SCHEMA data;
USE data;


CREATE TABLE usuarios(
id INT unsigned primary key auto_increment,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
usuario VARCHAR(50) NOT NULL,
contrasenia VARCHAR(500) DEFAULT 1234,
fecha_nacimiento DATE NOT NULL,
numero_documento INT unsigned NOT NULL,
foto VARCHAR(300) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE posteos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
descripcion VARCHAR(150) NOT NULL,
imagen_url VARCHAR(300) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
id_usuario INT unsigned,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT unsigned,
id_posteo INT unsigned,
texto VARCHAR(150) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_posteo) REFERENCES posteos(id)
);

CREATE TABLE seguidos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_seguidor INT unsigned,
id_seguido INT unsigned,
FOREIGN KEY (id_seguidor) REFERENCES usuarios(id),
FOREIGN KEY (id_seguido) REFERENCES usuarios(id)
);


INSERT INTO usuarios VALUES (DEFAULT,"Pedro","Sampayo","pedro.sampayo@gmail.com","pedro.sampayo","$2a$10$hLrkp6yL1dwFZ65TT2Fv8.qD8OalS2bXi3PUcpTmIlhUq.akkbw8K","2001/07/12",43504924,"foto - 1667479290452.jpeg",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Guillermo","Tufro","guille.tufro@gmail.com","guillermo.tufro","$2a$10$kg/9e.yabB4H8DYv3hPEnuMgCOHV3jDwwY6u0I4IfwxQAfjRMc3N.","2001/09/12",43504923,"foto - 1667479621209.webp",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Felix","Duhalde","felix.duhalde@gmail.com","felix.duhalde","$2a$10$9mYaYnbOq6dC1kuXB9cwTufxZyLy.P7/mqPEExC1gX6Uog4a/vmHy","2002/10/06",45507921,"foto - 1667479842312.jpeg",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Sofia","Cacciato","sofi.cacciato@gmail.com","sofi.cacciato","$2a$10$uRuMUf/n3zxRdy2zrlQ7q.5RokLPwV8jeo6OlhfE3dJ800SSWYNJ6","2001/10/15",43204644,"foto - 1667480094011.jpeg",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Messi","Chiquito","messi.chiquito@gmail.com","messi.chiquito","$2a$10$Zwro7C2DVScvtTcoZRXDWORG6Q8RSL4maipzsZeAyxrX4gDBuosNa","1987/10/17",32864924,"foto - 1667480220024.jpeg",DEFAULT,DEFAULT);


INSERT INTO posteos VALUES (DEFAULT, "Cancun","Las hermosas playas del caribe!","foto - 1667482899911.jpeg",DEFAULT,DEFAULT,1);
INSERT INTO posteos VALUES (DEFAULT, "Punta Del Este","Punta del Este!","foto - 1667483471932.jpeg",DEFAULT,DEFAULT,2);
INSERT INTO posteos VALUES (DEFAULT, "Buenos Aires","Mi viaje a la hermosa ciudad de Buenos Aires","foto - 1667483526253.jpeg",DEFAULT,DEFAULT,2);
INSERT INTO posteos VALUES (DEFAULT, "Paris","La Torre!","foto - 1667483606687.jpeg",DEFAULT,DEFAULT,4);
INSERT INTO posteos VALUES (DEFAULT, "Amsterdam","Amsterdam es mi lugar preferido en el mundo","foto - 1667483675242.jpeg",DEFAULT,DEFAULT,4);
INSERT INTO posteos VALUES (DEFAULT, "Noruega","Hermoso el dia aca en Oslo!","foto - 1667483918302.jpeg",DEFAULT,DEFAULT,1);
INSERT INTO posteos VALUES (DEFAULT, "VidCon","Trabajando para mi presentacion en VidCon!","foto - 1667484019629.jpeg",DEFAULT,DEFAULT,3);
INSERT INTO posteos VALUES (DEFAULT, "Safari","Imaginense encontrarte esto afuera de tu casa..., solo en un Safari","foto - 1667484041988.jpeg",DEFAULT,DEFAULT,3);
INSERT INTO posteos VALUES (DEFAULT, "Lago","Perfecto lugar para ir a nadar un rato","foto - 1667484058149.jpeg",DEFAULT,DEFAULT,3);
INSERT INTO posteos VALUES (DEFAULT, "Tour de France","1er puesto Tour de France!","foto - 1667484077617.jpeg",DEFAULT,DEFAULT,5);

INSERT INTO comentarios VALUES (DEFAULT,2,1,"Increible imagen",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,2,2,"Wow!",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,1,3,"Lol!",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,4,"Fuaaa",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,5,"C:",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,2,"Mira eso!",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,1,"No me gusto tanto",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,1,"Re lindo!",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,5,"Alta imagen",DEFAULT ,DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT,3,10,"Fuaaaaa",DEFAULT ,DEFAULT);