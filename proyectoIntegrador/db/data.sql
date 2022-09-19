CREATE SCHEMA data;
USE data;


CREATE TABLE usuarios(
id INT unsigned primary key auto_increment,
nombre VARCHAR(50) NOT NULL,
apellido VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
usuario VARCHAR(50) NOT NULL,
contrasenia VARCHAR(50) DEFAULT 1234,
fecha_nacimiento DATE NOT NULL,
numero_documento INT unsigned NOT NULL,
foto VARCHAR(300) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE posteos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50) NOT NULL,
descripcion VARCHAR(150) NOT NULL,
imagenUrl VARCHAR(300) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
idUsuario INT unsigned,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
idComentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuario INT unsigned,
idPosteo INT unsigned,
texto VARCHAR(150) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
FOREIGN KEY (idPosteo) REFERENCES posteos(id)
);

INSERT INTO usuarios VALUES (DEFAULT,"Pedro","Sampayo","pedro.sampayo@gmail.com","pedro.sampayo",DEFAULT,"2001/07/12",43504924,"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Guillermo","Tufro","guille.tufro@gmail.com","guillermo.tufro",DEFAULT,"2001/09/12",43504923,"https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Felix","Duhalde","felix.duhalde@gmail.com","felix.duhalde",DEFAULT,"2002/10/06",45507921,"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Sofia","Cacciato","sofi.cacciato@gmail.com","sofi.cacciato",DEFAULT,"2001/10/15",43204644,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",DEFAULT,DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT,"Messi","Chiquito","messi.chiquito@gmail.com","messi.chiquito",DEFAULT,"1987/10/17",32864924,"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",DEFAULT,DEFAULT);


INSERT INTO posteos VALUES (DEFAULT, "Cancun","Las hermosas playas del caribe!","https://mexicoallinclusive.com.mx/wp-content/uploads/2021/04/190777494-500x600.jpg",DEFAULT,DEFAULT,1);
INSERT INTO posteos VALUES (DEFAULT, "Punta Del Este","Punta del Este!","https://cdn-images.xintelweb.com/upload/bpv7678_2.jpg?56499",DEFAULT,DEFAULT,2);
INSERT INTO posteos VALUES (DEFAULT, "Buenos Aires","Mi viaje a la hermosa ciudad de Buenos Aires","https://gas-kvas.com/en/uploads/posts/2022-08/thumbs/1661357081_45-gas-kvas-com-p-beautiful-photos-of-buenos-aires-city-from-47.jpg",DEFAULT,DEFAULT,2);
INSERT INTO posteos VALUES (DEFAULT, "Paris","La Torre!","https://i.pinimg.com/564x/e6/e4/da/e6e4dad839cd8402ee505ff9876db6fa.jpg",DEFAULT,DEFAULT,4);
INSERT INTO posteos VALUES (DEFAULT, "Amsterdam","Amsterdam es mi lugar preferido en el mundo","https://pbs.twimg.com/media/CDLU_h6WAAEhP5k.jpg",DEFAULT,DEFAULT,4);
INSERT INTO posteos VALUES (DEFAULT, "Noruega","Hermoso el dia aca en Oslo!","https://salmon.fromnorway.com/globalassets/salmon/images/jpeg-1920x630-footer/1920x630_footer_sa.jpg?preset=width-500,height-600,crop",DEFAULT,DEFAULT,1);
INSERT INTO posteos VALUES (DEFAULT, "VidCon","Trabajando para mi presentacion en VidCon!","https://besmart.company/wp-content/uploads/2020/10/Webinar-van-de-Ondernemerschap-Academy-scaled-500x600.jpg",DEFAULT,DEFAULT,3);
INSERT INTO posteos VALUES (DEFAULT, "Safari","Imaginense encontrarte esto afuera de tu casa..., solo en un Safari","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/500px-Lion_%28Panthera_leo%29_male_6y.jpg",DEFAULT,DEFAULT,3);
INSERT INTO posteos VALUES (DEFAULT, "Lago","Perfecto lugar para ir a nadar un rato","https://harriscenter.org/wp-content/uploads/2017/11/canoeing_Silver_Lake_June2016_Thelen_500x600_acf_cropped-500x600.jpg",DEFAULT,DEFAULT,3);
INSERT INTO posteos VALUES (DEFAULT, "Tour de France","1er puesto Tour de France!","https://www.healthcotrials.com/wp-content/uploads/2019/11/healthco-sobre-nosotros-home-500x600.jpg",DEFAULT,DEFAULT,5);

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