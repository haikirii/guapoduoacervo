-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: guapoacervo
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `tbl_artigo`
--

DROP TABLE IF EXISTS `tbl_artigo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_artigo` (
  `art_id` int NOT NULL,
  `art_titulo` varchar(128) NOT NULL,
  `art_conteudo` text NOT NULL,
  `art_usu_usuario` varchar(30) NOT NULL,
  `art_tipo` int NOT NULL,
  PRIMARY KEY (`art_id`),
  KEY `Usuario_artigo_idx` (`art_usu_usuario`),
  CONSTRAINT `Usuario_artigo` FOREIGN KEY (`art_usu_usuario`) REFERENCES `tbl_usuario` (`usu_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_artigo`
--

LOCK TABLES `tbl_artigo` WRITE;
/*!40000 ALTER TABLE `tbl_artigo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_artigo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_artista`
--

DROP TABLE IF EXISTS `tbl_artista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_artista` (
  `att_id` int NOT NULL,
  `att_nome` varchar(30) NOT NULL,
  `att_redes` varchar(20) NOT NULL,
  PRIMARY KEY (`att_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_artista`
--

LOCK TABLES `tbl_artista` WRITE;
/*!40000 ALTER TABLE `tbl_artista` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_artista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_artista_fanfic`
--

DROP TABLE IF EXISTS `tbl_artista_fanfic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_artista_fanfic` (
  `arf_id` int NOT NULL,
  `arf_ffc_id` int NOT NULL,
  `arf_art_id` int NOT NULL,
  PRIMARY KEY (`arf_id`),
  KEY `Fanfic_artista_idx` (`arf_ffc_id`),
  KEY `Artista_idx` (`arf_art_id`),
  CONSTRAINT `Artista` FOREIGN KEY (`arf_art_id`) REFERENCES `tbl_artista` (`att_id`),
  CONSTRAINT `Fanfic_artista` FOREIGN KEY (`arf_ffc_id`) REFERENCES `tbl_fanfic` (`ffc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_artista_fanfic`
--

LOCK TABLES `tbl_artista_fanfic` WRITE;
/*!40000 ALTER TABLE `tbl_artista_fanfic` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_artista_fanfic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_capitulo`
--

DROP TABLE IF EXISTS `tbl_capitulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_capitulo` (
  `cap_id` int NOT NULL,
  `cap_titulo` varchar(30) DEFAULT NULL,
  `cap_nota_inicial` varchar(500) DEFAULT NULL,
  `cap_conteudo` text NOT NULL,
  `cap_nota_final` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`cap_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_capitulo`
--

LOCK TABLES `tbl_capitulo` WRITE;
/*!40000 ALTER TABLE `tbl_capitulo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_capitulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_capitulo_fanfic`
--

DROP TABLE IF EXISTS `tbl_capitulo_fanfic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_capitulo_fanfic` (
  `caf_id` int NOT NULL,
  `caf_ffc_id` int NOT NULL,
  `caf_cap_id` int NOT NULL,
  PRIMARY KEY (`caf_id`),
  KEY `Fanfic_capitulo_idx` (`caf_ffc_id`),
  KEY `Capitulo_idx` (`caf_cap_id`),
  CONSTRAINT `Capitulo` FOREIGN KEY (`caf_cap_id`) REFERENCES `tbl_capitulo` (`cap_id`),
  CONSTRAINT `Fanfic_capitulo` FOREIGN KEY (`caf_ffc_id`) REFERENCES `tbl_fanfic` (`ffc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_capitulo_fanfic`
--

LOCK TABLES `tbl_capitulo_fanfic` WRITE;
/*!40000 ALTER TABLE `tbl_capitulo_fanfic` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_capitulo_fanfic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fanart`
--

DROP TABLE IF EXISTS `tbl_fanart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_fanart` (
  `fnt_id` int NOT NULL,
  `fnt_midia` varchar(30) DEFAULT NULL,
  `fnt_descricao` varchar(256) DEFAULT NULL,
  `fnt_ffc_id` int DEFAULT NULL,
  `fnt_usu_usuario` varchar(30) NOT NULL,
  `fnt_aprovado` tinyint(1) NOT NULL,
  PRIMARY KEY (`fnt_id`),
  KEY `Usuario_fanart_idx` (`fnt_usu_usuario`),
  KEY `Fanfic_fanart_idx` (`fnt_ffc_id`),
  CONSTRAINT `Fanfic_fanart` FOREIGN KEY (`fnt_ffc_id`) REFERENCES `tbl_fanfic` (`ffc_id`),
  CONSTRAINT `Usuario_fanart` FOREIGN KEY (`fnt_usu_usuario`) REFERENCES `tbl_usuario` (`usu_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fanart`
--

LOCK TABLES `tbl_fanart` WRITE;
/*!40000 ALTER TABLE `tbl_fanart` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fanart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_fanfic`
--

DROP TABLE IF EXISTS `tbl_fanfic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_fanfic` (
  `ffc_id` int NOT NULL,
  `ffc_titulo` varchar(30) DEFAULT NULL,
  `ffc_sinopse` varchar(256) NOT NULL,
  `ffc_capa` varchar(128) DEFAULT NULL,
  `ffc_plataforma` varchar(128) DEFAULT NULL,
  `ffc_idioma` varchar(10) NOT NULL,
  `ffc_status` varchar(12) NOT NULL,
  `ffc_classificacao` int NOT NULL,
  `ffc_aprovado` tinyint(1) NOT NULL,
  `ffc_usu_usuario` varchar(30) NOT NULL,
  PRIMARY KEY (`ffc_id`),
  KEY `Usuario_fanfic_idx` (`ffc_usu_usuario`),
  CONSTRAINT `Usuario_fanfic` FOREIGN KEY (`ffc_usu_usuario`) REFERENCES `tbl_usuario` (`usu_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_fanfic`
--

LOCK TABLES `tbl_fanfic` WRITE;
/*!40000 ALTER TABLE `tbl_fanfic` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_fanfic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_pasta`
--

DROP TABLE IF EXISTS `tbl_pasta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_pasta` (
  `pas_id` int NOT NULL,
  `pas_nome` varchar(30) NOT NULL,
  `pas_usu_usuario` varchar(30) NOT NULL,
  PRIMARY KEY (`pas_id`),
  KEY `Usuario_pasta_idx` (`pas_usu_usuario`),
  CONSTRAINT `Usuario_pasta` FOREIGN KEY (`pas_usu_usuario`) REFERENCES `tbl_usuario` (`usu_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_pasta`
--

LOCK TABLES `tbl_pasta` WRITE;
/*!40000 ALTER TABLE `tbl_pasta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_pasta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_pasta_conteudo`
--

DROP TABLE IF EXISTS `tbl_pasta_conteudo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_pasta_conteudo` (
  `pac_id` int NOT NULL,
  `pac_pas_id` int NOT NULL,
  `pac_ffc_id` int DEFAULT NULL,
  `pac_art_id` int DEFAULT NULL,
  `pac_fnt_id` int DEFAULT NULL,
  PRIMARY KEY (`pac_id`),
  KEY `Fanfic_pasta_idx` (`pac_ffc_id`),
  KEY `Artigo_pasta_idx` (`pac_art_id`),
  KEY `Fanart_pasta_idx` (`pac_fnt_id`),
  CONSTRAINT `Artigo_pasta` FOREIGN KEY (`pac_art_id`) REFERENCES `tbl_artigo` (`art_id`),
  CONSTRAINT `Fanart_pasta` FOREIGN KEY (`pac_fnt_id`) REFERENCES `tbl_fanart` (`fnt_id`),
  CONSTRAINT `Fanfic_pasta` FOREIGN KEY (`pac_ffc_id`) REFERENCES `tbl_fanfic` (`ffc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_pasta_conteudo`
--

LOCK TABLES `tbl_pasta_conteudo` WRITE;
/*!40000 ALTER TABLE `tbl_pasta_conteudo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_pasta_conteudo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_shipp`
--

DROP TABLE IF EXISTS `tbl_shipp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_shipp` (
  `spp_id` int NOT NULL,
  `spp_nome` varchar(20) NOT NULL,
  `spp_descricao` varchar(45) NOT NULL,
  PRIMARY KEY (`spp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_shipp`
--

LOCK TABLES `tbl_shipp` WRITE;
/*!40000 ALTER TABLE `tbl_shipp` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_shipp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_shipp_fanfic`
--

DROP TABLE IF EXISTS `tbl_shipp_fanfic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_shipp_fanfic` (
  `spf_id` int NOT NULL,
  `spf_ffc_id` int NOT NULL,
  `spf_spp_id` int NOT NULL,
  PRIMARY KEY (`spf_id`),
  KEY `Fanfic_shipp_idx` (`spf_ffc_id`),
  KEY `Shipp_idx` (`spf_spp_id`),
  CONSTRAINT `Fanfic_shipp` FOREIGN KEY (`spf_ffc_id`) REFERENCES `tbl_fanfic` (`ffc_id`),
  CONSTRAINT `Shipp` FOREIGN KEY (`spf_spp_id`) REFERENCES `tbl_shipp` (`spp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_shipp_fanfic`
--

LOCK TABLES `tbl_shipp_fanfic` WRITE;
/*!40000 ALTER TABLE `tbl_shipp_fanfic` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_shipp_fanfic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_tag`
--

DROP TABLE IF EXISTS `tbl_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_tag` (
  `tag_id` int NOT NULL,
  `tag_nome` varchar(200) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_tag`
--

LOCK TABLES `tbl_tag` WRITE;
/*!40000 ALTER TABLE `tbl_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_tag_fanfic`
--

DROP TABLE IF EXISTS `tbl_tag_fanfic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_tag_fanfic` (
  `taf_id` int NOT NULL,
  `taf_ffc_id` int NOT NULL,
  `taf_tag_id` int NOT NULL,
  PRIMARY KEY (`taf_id`),
  KEY `Fanfic_idx` (`taf_ffc_id`),
  KEY `Tag_idx` (`taf_tag_id`),
  CONSTRAINT `Fanfic_tag` FOREIGN KEY (`taf_ffc_id`) REFERENCES `tbl_fanfic` (`ffc_id`),
  CONSTRAINT `Tag` FOREIGN KEY (`taf_tag_id`) REFERENCES `tbl_tag` (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_tag_fanfic`
--

LOCK TABLES `tbl_tag_fanfic` WRITE;
/*!40000 ALTER TABLE `tbl_tag_fanfic` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_tag_fanfic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_usuario`
--

DROP TABLE IF EXISTS `tbl_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_usuario` (
  `usu_usuario` varchar(30) NOT NULL,
  `usu_nome` varchar(30) DEFAULT NULL,
  `usu_email` varchar(256) NOT NULL,
  `usu_senha` varchar(128) NOT NULL,
  `usu_nivel` int NOT NULL,
  `usu_icon` varchar(128) DEFAULT NULL,
  `usu_descricao` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`usu_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuario`
--

LOCK TABLES `tbl_usuario` WRITE;
/*!40000 ALTER TABLE `tbl_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'guapoacervo'
--

--
-- Dumping routines for database 'guapoacervo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-28 13:43:55
