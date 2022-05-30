-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: student_management
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `id` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `code` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `className` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `student_count` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES ('5f744a89-54aa-4a89-a845-b84208cbb651','DH19IT03','IT93 Class',0),('ae678a9a-acfa-4a23-bd24-d874a7b25088','DH19IT01','IT91 Class',0),('dec3dbe1-7df1-4a87-a376-933165155e2a','DH19IT02','IT92 Class',0);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `firstName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` int NOT NULL,
  `classId` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_student_class_idx` (`classId`),
  CONSTRAINT `fk_student_class` FOREIGN KEY (`classId`) REFERENCES `class` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('22ace041-6386-483c-82b6-9aba0fbbc61e','Nguyen','Van A',15,'5f744a89-54aa-4a89-a845-b84208cbb651'),('636f8fc5-1655-4739-88f1-a4891c1d4f10','Nguyen','Van C',15,'5f744a89-54aa-4a89-a845-b84208cbb651'),('d4246342-7e3d-451b-8912-cab338b6c1a7','John','Doe',17,'dec3dbe1-7df1-4a87-a376-933165155e2a'),('e13d7472-fd65-4509-b933-94ea753a9704','John','Doe',17,'5f744a89-54aa-4a89-a845-b84208cbb651'),('f66d35e3-419d-4487-81b5-1b29a0c37996','John','Doe',17,'ae678a9a-acfa-4a23-bd24-d874a7b25088');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-30 21:27:06
