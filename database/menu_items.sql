CREATE TABLE `menu_items` (
  `menu_item` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` longblob,
  `email` varchar(255) NOT NULL,
  KEY `menu_items_ibfk_1` (`email`),
  CONSTRAINT `menu_items_ibfk_1` FOREIGN KEY (`email`) REFERENCES `registrations` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
