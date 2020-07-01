-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cresci_db
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id_produto` bigint NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) NOT NULL,
  `descricao` varchar(1200) DEFAULT NULL,
  `estado_produto` varchar(255) NOT NULL,
  `foto1` varchar(255) NOT NULL,
  `foto2` varchar(255) NOT NULL,
  `foto3` varchar(255) NOT NULL,
  `foto4` varchar(255) NOT NULL,
  `preco` double NOT NULL,
  `quantidade` bigint DEFAULT NULL,
  `tamanho` varchar(2) NOT NULL,
  `titulo` varchar(90) NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (7,'Outros','Macacão infantil com touca','Usado','https://i.imgur.com/KUEhbp0.jpeg','https://i.imgur.com/RvkIdLB.jpeg','https://i.imgur.com/2PTGumj.jpeg','https://i.imgur.com/R8NOFvQ.jpeg',98,1,'G','Macacão com touca'),(8,'Outros','Macacão infantil s/ touca','Nunca Usado','https://i.imgur.com/zKsKek9.jpeg','https://i.imgur.com/LHDOJF7.jpeg','https://i.imgur.com/yMWcEjm.jpeg','https://i.imgur.com/kzLKxzC.jpeg',47,1,'GG','Macacão infantil'),(9,'Outros','Macacão infantil c/ touca solta','usado','https://i.imgur.com/yJ5j4mt.jpeg','https://i.imgur.com/E67cg3E.jpeg','https://i.imgur.com/5ZRPZUe.jpeg','https://i.imgur.com/nc3myBe.jpeg',105.99,1,'G','Macacão com touca'),(10,'Calça','Calça infantil 100% algodão','Usado','https://i.imgur.com/15b0xYy.jpeg','https://i.imgur.com/tmh77EU.jpeg','https://i.imgur.com/nsuWzC8.jpeg','https://i.imgur.com/LzjuXoe.jpeg',24.99,1,'GG','Calça infantil'),(11,'Casaquinho','Casaquinho infantil 100% algodão','Usado','https://i.imgur.com/STYQaoC.jpeg','https://i.imgur.com/cDr02FK.jpeg','https://i.imgur.com/W3gK0Dy.jpeg','https://i.imgur.com/o5ABzRF.jpeg',64.9,1,'GG','Casaco Infantil'),(12,'Casaquinho','Jaqueta infantil 100% algodão','Usado','https://i.imgur.com/7YxHDze.jpeg','https://i.imgur.com/QbEgRPP.jpeg','https://i.imgur.com/324RMrP.jpeg','https://i.imgur.com/ZDJrzbC.jpeg',64.9,1,'GG','Jaqueta Infantil'),(13,'Conjuntinho','Jaqueta infantil 100% algodão','Usado','https://i.imgur.com/N4arjqo.jpeg','https://i.imgur.com/N4arjqo.jpeg','https://i.imgur.com/FfVZ6Ud.jpeg','https://i.imgur.com/nvtC4cz.jpeg',75.99,1,'GG','Conjuntinho bege'),(14,'Conjuntinho','Conjuntinho infantil 100% algodão','Usado','https://i.imgur.com/lRAJ0O8.jpeg','https://i.imgur.com/XrNRrtY.jpeg','https://i.imgur.com/7ucRO0p.jpeg','https://i.imgur.com/zNYkZ5c.jpeg',47,1,'GG','Conjuntinho rosa'),(15,'Outros','camiseta e bermuda infanti. \nóculos não incluso','Usado','https://i.imgur.com/BTNFRHM.jpeg','https://i.imgur.com/kfA6Xnc.jpeg','https://i.imgur.com/qVbndnr.jpeg','https://i.imgur.com/ndFWSaX.jpeg',50,1,'GG','Camiseta e bermuda');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-01 16:07:32
