CREATE DATABASE  IF NOT EXISTS `Bank`;
USE `Bank`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: Bank
-- ------------------------------------------------------
-- Server version	8.0.26

-- Table structure for table `BankAccount`
--

DROP TABLE IF EXISTS `BankAccount`;
CREATE TABLE `BankAccount` (
  `AccountID` int NOT NULL,
  `UserID` int NOT NULL,
  `AccountType` varchar(255) DEFAULT NULL,
  `AccountBalance` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`AccountID`,`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `BankAccount`
--

LOCK TABLES `BankAccount` WRITE;
INSERT INTO `BankAccount` VALUES (259555772,4,'Saving',14020.58),(322798030,3,'Multiplier',39740.17),(339657462,4,'Current',47380.33),(353677039,3,'Saving',76660.21),(621156213,1,'Saving',70200.71),(785703027,5,'Current',42460.32),(828120424,2,'Multiplier',50640.12),(958945214,1,'Current',99720.46);
UNLOCK TABLES;

--
-- Table structure for table `ScheduledTransactions`
--

DROP TABLE IF EXISTS `ScheduledTransactions`;
CREATE TABLE `ScheduledTransactions` (
  `TransactionID` int NOT NULL,
  `AccountID` int NOT NULL,
  `ReceivingAccountID` int DEFAULT NULL,
  `Date` varchar(255) DEFAULT NULL,
  `TransactionAmount` decimal(10,2) DEFAULT NULL,
  `Comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`TransactionID`,`AccountID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ScheduledTransactions`
--

LOCK TABLES `ScheduledTransactions` WRITE;
INSERT INTO `ScheduledTransactions` VALUES (1,621156213,339657462,'2022-11-08T04:00:00.000Z',500.00,'Monthly Pocket Money'),(2,958945214,621156213,'2022-11-08T04:00:00.000Z',8996.00,'School Fees'),(3,828120424,322798030,'2022-11-25T04:00:00.000Z',3000.00,'Driving Centre Top-up'),(4,353677039,785703027,'2022-11-17T06:21:00.000Z',255.00,'Tuition Fee Payment'),(5,259555772,828120424,'2022-11-08T04:00:00.000Z',32.00,'Books Payment');
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `UserID` int NOT NULL,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Firstname` varchar(255) DEFAULT NULL,
  `Lastname` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `OptIntoPhyStatements` bit(1) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


LOCK TABLES `User` WRITE;
INSERT INTO `User` VALUES (1,'ExecutiveDBS','DBSBestBank2022','Tom','Lim','TomLim@easymail.com','Block 123 Serangoon Garden #10-129',_binary '\0'),(2,'SeederDBS','iWant2JoinDBS','Mary','Tan','MaryTan@simplemail.com','Block 234 Changi Business Park #50-123',_binary ''),(3,'AcerDBS','Top5Seeder','Gary','Ong','GaryOng@easymail.com','Block 345 Jurong Business Park #25-214',_binary '\0'),(4,'AssociateDBS','Whatis2Years','Harry','Goh','HarryGoh@bestbank.com','Block 456 One North Fusionopolis #34-743',_binary '\0'),(5,'PresidentDBS','Multiplier3.5%','Cheryl','Chia','CherylChia@bestbank.com','Block 567 Marina Bay Sands #63-743',_binary '');
UNLOCK TABLES;
