-- -------------------------------------------------------------
-- TablePlus 5.8.2(528)
--
-- https://tableplus.com/
--
-- Database: test_db
-- Generation Time: 2024-01-05 09:59:11.4210
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `tbl_facilities`;
CREATE TABLE `tbl_facilities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) NOT NULL,
  `applicant` varchar(512) DEFAULT NULL,
  `facility_type` tinyint(1) DEFAULT NULL,
  `cnn` varchar(100) DEFAULT NULL,
  `location_description` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `blocklot` varchar(50) DEFAULT NULL,
  `block` varchar(50) DEFAULT NULL,
  `lot` varchar(50) DEFAULT NULL,
  `permit` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `food_items` varchar(100) DEFAULT NULL,
  `location_x` varchar(50) DEFAULT NULL,
  `location_y` varchar(50) DEFAULT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `schedule` varchar(512) DEFAULT NULL,
  `dayshours` varchar(50) DEFAULT NULL,
  `noi_sent` varchar(50) DEFAULT NULL,
  `approved` varchar(50) DEFAULT NULL,
  `received` varchar(50) DEFAULT NULL,
  `prior_permit` varchar(50) DEFAULT NULL,
  `expiration_date` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `fire_prevention_districts` varchar(50) DEFAULT NULL,
  `police_districts` varchar(50) DEFAULT NULL,
  `supervisor_districts` varchar(50) DEFAULT NULL,
  `zip_codes` varchar(50) DEFAULT NULL,
  `neighborhoods` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=482 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `tbl_food_items`;
CREATE TABLE `tbl_food_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) DEFAULT NULL,
  `food_item` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3972 DEFAULT CHARSET=utf8mb4;



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;