-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: enrollment_db
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `middleName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `section` int DEFAULT NULL,
  `yearLevel` int DEFAULT NULL,
  `birthdate` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `guardianName` varchar(255) DEFAULT NULL,
  `guardianContact` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'qwe','qwe','qwe',1,1,'05/23/2000','qe','qe','qe','qe','2022-05-23 15:59:16','2022-05-23 15:59:16'),(2,'John Paul','Oso','Pineda',2,4,'05/23/2000','24 A Duque Street Malanday','09959863383','Rosana Pineda','09494748296','2022-05-23 16:11:33','2022-05-23 16:11:33'),(3,'John Paul','Oso','Pineda',2,4,'05/23/2000','24 A Duque malanday','09959863383','John Delacruz','09494748296','2022-05-23 16:14:32','2022-05-23 16:14:32'),(4,'John Paul','Oso','Pineda',2,4,'05/23/2000','24 A Duque malanday','09959863383','John Delacruz','09494748296','2022-05-23 16:15:01','2022-05-23 16:15:01'),(5,'John Paul','Oso','Pineda',2,4,'05/23/2000','24 A Duque malanday','09959863383','John Delacruz','09494748296','2022-05-23 16:15:48','2022-05-23 16:15:48'),(6,'John Paul','Oso','Pineda',2,4,'05/23/2000','24 A Duque malanday','09959863383','John Delacruz','09494748296','2022-05-23 16:16:14','2022-05-23 16:16:14'),(7,'qe','qe','qe',1,1,'1','qwe','qe','qe','qe','2022-05-23 16:16:24','2022-05-23 16:16:24'),(8,'qwe','qe','qe',1,1,'1','1','qe','qe','qe','2022-05-23 16:17:41','2022-05-23 16:17:41'),(9,'qeqe','qe','qe',1,1,'1','qe','qe','qe','qe','2022-05-23 16:18:46','2022-05-23 16:18:46'),(10,'qwe','qe','qe',1,1,'1','1','qe','qe','qe','2022-05-23 16:20:18','2022-05-23 16:20:18'),(11,'qwe','qe','qe',1,1,'1','1','qe','qe','qe','2022-05-23 16:20:59','2022-05-23 16:20:59'),(12,'qwe','qe','qe',1,1,'1','1','1','1','1','2022-05-23 16:22:33','2022-05-23 16:22:33'),(13,'qwe','qe','qe',1,1,'1','qe','q','qe','qe','2022-05-23 16:27:12','2022-05-23 16:27:12'),(14,'John Paul','Oso','Pineda',2,4,'2000-05-23','24 A. Duque Street Malanday','09959863383','John Delacruz','09949291329','2022-05-23 16:29:13','2022-05-23 16:29:13');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-24  0:31:19
