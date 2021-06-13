-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `classification`
--

DROP TABLE IF EXISTS `classification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classification` (
  `ID` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classification`
--

LOCK TABLES `classification` WRITE;
/*!40000 ALTER TABLE `classification` DISABLE KEYS */;
INSERT INTO `classification` VALUES (1,'DDR3'),(2,'DDR4'),(3,'FM2'),(4,'FM2+'),(5,'AM4'),(6,'LGA1151'),(7,'LGA1150'),(8,'LGA1200'),(9,'xTRx4');
/*!40000 ALTER TABLE `classification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cpu_69`
--

DROP TABLE IF EXISTS `cpu_69`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cpu_69` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `core` int DEFAULT NULL,
  `GHz` float DEFAULT NULL,
  `socket_id` int DEFAULT NULL,
  `image_url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `socket_idx` (`socket_id`),
  CONSTRAINT `socket` FOREIGN KEY (`socket_id`) REFERENCES `classification` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cpu_69`
--

LOCK TABLES `cpu_69` WRITE;
/*!40000 ALTER TABLE `cpu_69` DISABLE KEYS */;
INSERT INTO `cpu_69` VALUES (1,'AMD R5 3600',6,4,5,'https://c.ecimg.tw/items/QABB3PA900A4P5N/000001_1562319572.jpg'),(2,'Intel i5-10400F',6,4,8,'https://d.ecimg.tw/items/DRAI2NA900ANZPS/000001_1612344598.jpg'),(3,'AMD R5 2600',6,3.4,5,'https://sunfar.blob.core.windows.net/webimage/jpg360/251/251932YF10.jpg'),(4,'AMD TR 3990X',64,2.9,9,'https://cf.shopee.tw/file/5ab30633909a9f50bd1788f57566f0a6'),(5,'AMD R9 5950X',16,3.4,5,'https://cf.shopee.tw/file/27e5cd11c8043ea577ee4d415849505a'),(7,'AMD A10-7800',4,3.5,4,'https://cf.shopee.tw/file/87d266141791e6792e5374aa6254a147'),(9,'Athlon x4 870k',4,3.9,4,'https://i.ebayimg.com/images/g/0kQAAOSw7ilcmCem/s-l300.jpg'),(12,' A8-7600',4,3.3,4,NULL),(13,'Xeon E3-1280 v5',4,3.7,5,NULL),(16,'A10-6800K',4,4.1,3,NULL),(17,'A8-6600K',4,3.9,3,NULL),(18,'A6-6400K',2,3.9,3,NULL);
/*!40000 ALTER TABLE `cpu_69` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `motherboard`
--

DROP TABLE IF EXISTS `motherboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `motherboard` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `cpu_type` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `socket_id` int DEFAULT NULL,
  `ram_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `socket_idx` (`socket_id`),
  KEY `ram_m_idx` (`ram_id`),
  CONSTRAINT `ram_m` FOREIGN KEY (`ram_id`) REFERENCES `classification` (`ID`),
  CONSTRAINT `socket_m` FOREIGN KEY (`socket_id`) REFERENCES `classification` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motherboard`
--

LOCK TABLES `motherboard` WRITE;
/*!40000 ALTER TABLE `motherboard` DISABLE KEYS */;
INSERT INTO `motherboard` VALUES (1,'ROG STRIX B550-XE GAMING WIFI','AMD','ATX','https://c.ecimg.tw/items/DSAJ3EA900B8R0C/000001_1619145249.jpg',5,2),(2,'ROG STRIX B560-F GAMING WIFI','Intel','ATX','https://dlcdnwebimgs.asus.com/gain/B55A18A8-28DB-4BEE-806C-1AE7D7021951/w717/h525',8,2),(3,'GA-F2A85X-UP4','AMD','ATX','https://static.gigabyte.com/StaticFile/Image/Global/875d07f8ee7158741dd946d6e1c59ba0/Product/7212/png/500',3,1),(4,'GA-F2A75M-D3H','AMD','MATX','https://static.gigabyte.com/StaticFile/Image/Global/58f21e8a1886bc357e5a9d5093c79d3b/Product/7209/webp/900',3,1),(5,'GA-F2A75-D3H','AMD','ATX','https://static.gigabyte.com/StaticFile/Image/Global/81682e8400d98acc2c90cce51b52f1d0/Product/7208/webp/900',3,1),(6,'GA-F2A88XM-D3HP (rev. 1.0)','AMD','MATX','https://static.gigabyte.com/StaticFile/Image/Global/d276267af168ddf3f370d97383f45c1f/Product/14128/webp/900',4,1),(7,'GA-F2A88XM-HD3P (rev. 1.0)','AMD','MATX','https://static.gigabyte.com/StaticFile/Image/Global/513ff3f0de4c9b01b0b1660798101d37/Product/14258/webp/900',4,1),(8,'GA-F2A78M-D3H (rev. 3.0) ','AMD','MATX','https://static.gigabyte.com/StaticFile/Image/Global/c881e8caff5717ce69078136cd0cb7e9/Product/9542/webp/900',4,1),(9,'ROG MAXIMUS IX APEX','INTEL','EATX','https://dlcdnwebimgs.asus.com/gain/9570CB91-1BC1-4776-A944-31EA1F006553/w717/h525',5,2),(10,'ROG MAXIMUS IX EXTREME','INTEL','EATX','https://dlcdnwebimgs.asus.com/gain/1327DD33-AAF7-4E99-832D-1C3125D9DEA4/w717/h525',5,2),(11,'TUF GAMING B550M (WI-FI) ZAKU II EDITION','AMD','MATX','https://dlcdnwebimgs.asus.com/gain/4b0e02b6-8de0-4ebe-b8ab-dd020d20c58d/',6,2),(12,'PRIME A520M-E','AMD','MATX','https://www.asus.com/media/global/products/8f4pe49zgoflesco/P_setting_xxx_0_90_end_500.png',6,2),(13,'ROG MAXIMUS VII IMPACT','INTEL','MATX','https://dlcdnwebimgs.asus.com/gain/387387B0-9406-4614-81DC-48640E8A5733/w717/h525',7,1),(14,'ROG MAXIMUS VII RANGER','INTEL','ATX','https://dlcdnwebimgs.asus.com/gain/AE429161-BD15-4AC2-9BDA-35E774539A88/w717/h525',7,1),(15,'ROG Zenith II Extreme Alpha','AMD','EATX','https://dlcdnwebimgs.asus.com/gain/5D027C28-F87D-45C2-B7F1-110AFB343531/w717/h525',9,2),(16,'ROG Strix TRX40-E Gaming','AMD','ATX','https://dlcdnwebimgs.asus.com/gain/58A8D8BF-F6FC-4129-BF38-D6B39BFCC832/w717/h525',9,2);
/*!40000 ALTER TABLE `motherboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `clock_rate` varchar(45) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `ram_ID` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `RAM_ID_idx` (`ram_ID`),
  CONSTRAINT `RAM_ID` FOREIGN KEY (`ram_ID`) REFERENCES `classification` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
INSERT INTO `ram` VALUES (1,'Trident Z Neo (焰光戟)','3200MHz','8GB','https://gskill.com/_upload/images/156283730014.png',2),(2,'Hyperx FURY DDR4 RGB','2666MHZ','8GB','https://cf.shopee.tw/file/f4597ea0273b321f59a6c5c6e4b88779',2),(5,'ADATA PC-4 21300','2666MHz','8GB','https://cdn2-t17.techbang.com/system/attached_images/2019/11/267361/original/a6a554ec4b34b2fde535cdbb02bc93ad.jpeg?1573564158',2),(8,'Kingston 4GB DDR3 1333','1333','4G','https://d.ecimg.tw/items/DRAC03A74034336/000001_1478248869.jpg',1),(9,'HyperX FURY 酷炫黑 DDR3-1866','1866','8','https://e.ecimg.tw/items/DRAL1IA90067EOQ/000001_1537498583.jpg',1);
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-13 13:54:18
