CREATE TABLE `registrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personName` varchar(255) NOT NULL,
  `businessName` varchar(255) NOT NULL,
  `foodLicense` varchar(255) DEFAULT NULL,
  `paymentMode` varchar(255) NOT NULL,
  `businessImage` varchar(255) DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
