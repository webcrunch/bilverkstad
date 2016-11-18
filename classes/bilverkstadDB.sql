-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Värd: localhost
-- Tid vid skapande: 18 nov 2016 kl 13:12
-- Serverversion: 10.1.16-MariaDB
-- PHP-version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `bilverkstadDB`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `customer`
--

CREATE TABLE `customer` (
  `SSN` int(7) NOT NULL,
  `fName` varchar(50) DEFAULT NULL,
  `lName` varchar(50) DEFAULT NULL,
  `adress` varchar(80) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `customer`
--

INSERT INTO `customer` (`SSN`, `fName`, `lName`, `adress`, `email`) VALUES
(1, 'Mayra', 'Rivas', 'Nevisborg 20D', 'mrivas@test.se'),
(2, 'Jarl', 'Andersson', 'Storgatan 15', 'jandersson@test.se'),
(3, 'Martin', 'Vergara', 'Tenorgränd 18', 'mvergara@test.se'),
(4, 'Bertha', 'Malin', 'Klocklarevägen 10', 'bgastob@test.se'),
(5, 'Faj', 'Gravestam', 'Bilgatan 50', 'fgravestam@test.se'),
(6, 'Hugo', 'Trump', 'Ön 4', 'htrump@test.se'),
(7, 'Anna', 'Kvarg', 'Soltergatan 11', 'akvarg@test.se'),
(8, 'Pernilla', ' Clinton', 'Nörragrännsväg 36', 'pclinton@test.se'),
(9, 'Åke', 'Johansson', 'Per Albin 20', 'ajohansson@test.se'),
(10, 'Donald', 'Trump', 'Snurrigatan 3', 'strump@test.se'),
(11, 'Bill', 'Clinto', 'Snurrigatan 3', 'bclinton@test.se'),
(12, 'Bylli Joel', 'Gaston', 'Klocklarevägen 3', 'bgastob@bilverkstad.se'),
(13, 'Eduardo', 'Rivas', 'Nevisborg 20D', 'mrivas@test.se'),
(14, 'Eduardo', 'Tapia', 'Nevisborg 20D', 'mrivas@test.se');

-- --------------------------------------------------------

--
-- Tabellstruktur `damage`
--

CREATE TABLE `damage` (
  `Id_damage` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `partNumber` int(7) DEFAULT NULL,
  `SSN` int(7) DEFAULT NULL,
  `hours` float DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `damage`
--

INSERT INTO `damage` (`Id_damage`, `description`, `partNumber`, `SSN`, `hours`, `status`) VALUES
(1, 'The window is broken', 1, 1, 4, 'Ongoing'),
(2, 'My car doesnt start', NULL, 9, 3, 'Ended'),
(3, 'change tires and wheels', 2, 1, 2, 'upcoming'),
(4, 'Car needs to paint', NULL, 3, 12, 'Ended'),
(5, 'Glue seal and fix', 3, 3, 5, 'upcoming'),
(6, 'Alternator Problems', NULL, NULL, 5, 'ongoing'),
(7, 'Radiator leak', NULL, 5, 5, 'ongoing'),
(8, 'Oli Leal', NULL, NULL, 2, 'upcoming');

-- --------------------------------------------------------

--
-- Tabellstruktur `employee`
--

CREATE TABLE `employee` (
  `SSN` int(7) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  `fName` varchar(50) DEFAULT NULL,
  `lName` varchar(50) DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  `vacation_start` date DEFAULT NULL,
  `vacation_end` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `employee`
--

INSERT INTO `employee` (`SSN`, `email`, `pass`, `fName`, `lName`, `title`, `vacation_start`, `vacation_end`) VALUES
(1, 'cthompson0@bilverkstad.se', 'password', 'Catherine', 'Thompson', 'Mechanic', '2017-07-16', '2017-08-16'),
(2, 'iandrew@bilverkstad.se', '1password ', 'Irene', 'Andrews', 'Mechanic', '2017-03-13', '2017-04-13'),
(3, 'ebutler2@bilverkstad.se', 'password', 'Eugene', 'Butler', 'Mechanic', '2017-09-13', '2017-10-13'),
(4, 'jbradley3@bilverkstad.se', 'password', 'Jose', 'Bradley', 'Mechanic', '2017-10-11', '2017-11-11'),
(5, 'wcox4@bilverkstad.se', 'password', 'Wayne', 'Cox', 'Mechanic', '2017-01-08', '2017-02-08'),
(6, 'whowell5@bilverkstad.se', 'password', 'Wanda', 'Howell', 'Mechanic', '2017-06-28', '2017-07-13'),
(7, 'jmorrison6@bilverkstad.se', 'password', 'Jimmy', 'Morrison', 'Mechanic', '2017-06-01', '2017-06-28'),
(8, 'cfrazier7@bilverkstad.se', 'password', 'Craig', 'Frazier', 'Mechanic', '2017-04-07', '2017-04-21'),
(9, 'cmeyer8@bilverkstad.se', 'password', 'Cheryl', 'Meyer', 'Mechanic', '2017-04-29', '2017-05-15'),
(10, 'ctorres9@bilverkstad.se', 'password', 'Chris', 'Torres', 'Mechanic', '2017-10-15', '2017-11-15'),
(11, 'iandrews1@bilverkstad.se', 'password1 ', 'Ian', 'Solano', 'Boss', '2017-03-15', '2017-04-25');

-- --------------------------------------------------------

--
-- Tabellstruktur `repairsCar`
--

CREATE TABLE `repairsCar` (
  `reg_num` varchar(10) NOT NULL,
  `modellName` varchar(30) DEFAULT NULL,
  `SSN` int(7) DEFAULT NULL,
  `id_damage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `repairsCar`
--

INSERT INTO `repairsCar` (`reg_num`, `modellName`, `SSN`, `id_damage`) VALUES
('ABC123', 'Volvo Robott', 2, 1),
('BLA678', 'Volvo 450', 4, 5),
('HIJ456', 'Volvo 530', 5, 7),
('KIN364', 'Volvo V70', 4, 2),
('KLM789', 'Volvo V70', 1, 4),
('LMN789', 'Volvo 780', 7, 8),
('MIL652', 'Volvo V70', 10, 7),
('NNM535', 'Volvo 350', 3, 3),
('NOM569', 'Volvo V70', 8, 6),
('XXX568', 'Volvo 260', 9, 1);

-- --------------------------------------------------------

--
-- Tabellstruktur `sparePart`
--

CREATE TABLE `sparePart` (
  `partNumber` int(7) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` decimal(12,2) NOT NULL,
  `modellName` varchar(50) DEFAULT NULL,
  `VAT` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `sparePart`
--

INSERT INTO `sparePart` (`partNumber`, `name`, `price`, `modellName`, `VAT`) VALUES
(1, 'Spare parts with Engine referens', '2500.00', 'Volvo V70', '312.00'),
(2, 'Brake reference parts', '1000.00', 'Volvo 60', '150.00'),
(3, 'Parts with reference of Direction', '1500.00', 'Volvo 300', '175.00');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`SSN`);

--
-- Index för tabell `damage`
--
ALTER TABLE `damage`
  ADD PRIMARY KEY (`Id_damage`),
  ADD KEY `partNumber` (`partNumber`),
  ADD KEY `SSN` (`SSN`);

--
-- Index för tabell `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`SSN`);

--
-- Index för tabell `repairsCar`
--
ALTER TABLE `repairsCar`
  ADD PRIMARY KEY (`reg_num`),
  ADD KEY `id_damage` (`id_damage`),
  ADD KEY `SSN` (`SSN`);

--
-- Index för tabell `sparePart`
--
ALTER TABLE `sparePart`
  ADD PRIMARY KEY (`partNumber`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `customer`
--
ALTER TABLE `customer`
  MODIFY `SSN` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT för tabell `employee`
--
ALTER TABLE `employee`
  MODIFY `SSN` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `damage`
--
ALTER TABLE `damage`
  ADD CONSTRAINT `damage_ibfk_1` FOREIGN KEY (`partNumber`) REFERENCES `SpareParts` (`partNumber`),
  ADD CONSTRAINT `damage_ibfk_2` FOREIGN KEY (`SSN`) REFERENCES `Employees` (`SSN`);

--
-- Restriktioner för tabell `repairsCar`
--
ALTER TABLE `repairsCar`
  ADD CONSTRAINT `repairscar_ibfk_1` FOREIGN KEY (`id_damage`) REFERENCES `Damages` (`Id_damage`),
  ADD CONSTRAINT `repairscar_ibfk_2` FOREIGN KEY (`SSN`) REFERENCES `Customers` (`SSN`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
