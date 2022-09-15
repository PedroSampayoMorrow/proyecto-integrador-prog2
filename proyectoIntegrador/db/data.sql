CREATE DATABASE  IF NOT EXISTS `data` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `data`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: data
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `idComentario` int unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int unsigned DEFAULT NULL,
  `idPosteo` int unsigned DEFAULT NULL,
  `texto` varchar(150) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idComentario`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idPosteo` (`idPosteo`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idPosteo`) REFERENCES `posteos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,2,1,'Increible imagen','2022-09-15 20:02:52','2022-09-15 20:02:52'),(2,2,2,'Wow!','2022-09-15 20:02:53','2022-09-15 20:02:53'),(3,1,3,'Lol!','2022-09-15 20:02:54','2022-09-15 20:02:54'),(4,3,4,'Fuaaa','2022-09-15 20:02:54','2022-09-15 20:02:54'),(5,3,5,'C:','2022-09-15 20:02:55','2022-09-15 20:02:55'),(6,3,2,'Mira eso!','2022-09-15 20:02:56','2022-09-15 20:02:56'),(7,3,1,'No me gusto tanto','2022-09-15 20:02:56','2022-09-15 20:02:56'),(8,3,1,'Re lindo!','2022-09-15 20:02:57','2022-09-15 20:02:57'),(9,3,5,'Alta imagen','2022-09-15 20:02:57','2022-09-15 20:02:57'),(10,3,10,'Fuaaaaa','2022-09-15 20:02:58','2022-09-15 20:02:58');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posteos`
--

DROP TABLE IF EXISTS `posteos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posteos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `imagenUrl` varchar(300) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idUsuario` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `posteos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posteos`
--

LOCK TABLES `posteos` WRITE;
/*!40000 ALTER TABLE `posteos` DISABLE KEYS */;
INSERT INTO `posteos` VALUES (1,'Cancun','Las hermosas playas del caribe!','https://mexicoallinclusive.com.mx/wp-content/uploads/2021/04/190777494-500x600.jpg','2022-09-15 20:02:45','2022-09-15 20:02:45',1),(2,'Punta Del Este','Punta del Este!','https://cdn-images.xintelweb.com/upload/bpv7678_2.jpg?56499','2022-09-15 20:02:46','2022-09-15 20:02:46',2),(3,'Buenos Aires','Mi viaje a la hermosa ciudad de Buenos Aires','https://gas-kvas.com/en/uploads/posts/2022-08/thumbs/1661357081_45-gas-kvas-com-p-beautiful-photos-of-buenos-aires-city-from-47.jpg','2022-09-15 20:02:46','2022-09-15 20:02:46',2),(4,'Paris','La Torre!','https://i.pinimg.com/564x/e6/e4/da/e6e4dad839cd8402ee505ff9876db6fa.jpg','2022-09-15 20:02:47','2022-09-15 20:02:47',4),(5,'Amsterdam','Amsterdam es mi lugar preferido en el mundo','https://pbs.twimg.com/media/CDLU_h6WAAEhP5k.jpg','2022-09-15 20:02:48','2022-09-15 20:02:48',4),(6,'Noruega','Hermoso el dia aca en Oslo!','https://salmon.fromnorway.com/globalassets/salmon/images/jpeg-1920x630-footer/1920x630_footer_sa.jpg?preset=width-500,height-600,crop','2022-09-15 20:02:48','2022-09-15 20:02:48',1),(7,'VidCon','Trabajando para mi presentacion en VidCon!','https://besmart.company/wp-content/uploads/2020/10/Webinar-van-de-Ondernemerschap-Academy-scaled-500x600.jpg','2022-09-15 20:02:49','2022-09-15 20:02:49',3),(8,'Safari','Imaginense encontrarte esto afuera de tu casa..., solo en un Safari','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/500px-Lion_%28Panthera_leo%29_male_6y.jpg','2022-09-15 20:02:50','2022-09-15 20:02:50',3),(9,'Lago','Perfecto lugar para ir a nadar un rato','https://harriscenter.org/wp-content/uploads/2017/11/canoeing_Silver_Lake_June2016_Thelen_500x600_acf_cropped-500x600.jpg','2022-09-15 20:02:50','2022-09-15 20:02:50',3),(10,'Tour de France','1er puesto Tour de France!','https://www.healthcotrials.com/wp-content/uploads/2019/11/healthco-sobre-nosotros-home-500x600.jpg','2022-09-15 20:02:51','2022-09-15 20:02:51',5);
/*!40000 ALTER TABLE `posteos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contrasenia` varchar(50) NOT NULL DEFAULT '1234',
  `fecha_nacimiento` date NOT NULL,
  `numero_documento` int unsigned NOT NULL,
  `foto` varchar(300) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Guillermo','Tufro','guille.tufro@gmail.com','guillermo.tufro','1234','2001-09-12',43504923,'https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp','2022-09-15 20:02:29','2022-09-15 20:02:29'),(2,'Pedro','Sampayo','pedro.sampayo@gmail.com','pedro.sampayo','1234','2001-07-12',43504924,'https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg','2022-09-15 20:02:36','2022-09-15 20:02:36'),(3,'Felix','Duhalde','felix.duhalde@gmail.com','felix.duhalde','1234','2002-10-06',45507921,'https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg','2022-09-15 20:02:40','2022-09-15 20:02:40'),(4,'Sofia','Cacciato','sofi.cacciato@gmail.com','sofi.cacciato','1234','2001-10-15',43204644,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU','2022-09-15 20:02:42','2022-09-15 20:02:42'),(5,'Messi','Chiquito','messi.chiquito@gmail.com','messi.chiquito','1234','1987-10-17',32864924,'https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg','2022-09-15 20:02:43','2022-09-15 20:02:43');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-15 17:03:29
