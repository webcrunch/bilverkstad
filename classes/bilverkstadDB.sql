-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Värd: localhost
-- Tid vid skapande: 17 nov 2016 kl 00:39
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
-- Tabellstruktur `Customers`
--

CREATE TABLE `Customers` (
  `SSN` int(7) NOT NULL,
  `fName` varchar(50) DEFAULT NULL,
  `lName` varchar(50) DEFAULT NULL,
  `adress` varchar(80) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `Customers`
--

INSERT INTO `Customers` (`SSN`, `fName`, `lName`, `adress`, `email`) VALUES
(1, 'Mayra', 'Rivas', 'Nevisborg 20D', 'mrivas@bilverkstad.se'),
(2, 'Jarl', 'Andersson', 'Storgatan 15', 'jandersson@bilverkstad.se'),
(3, 'Martin', 'Vergara', 'Tenorgränd 18', 'mvergara@bilverkstad.se'),
(4, 'Patricio', 'Smith', 'Hörnet 22', 'psmith@bilverkstad.se'),
(5, 'Faj', 'Gravestam', 'Bilgatan 50', 'fgravestam@bilverkstad.se'),
(6, 'Hugo', 'Trump', 'Ön 4', 'htrump@bilverkstad.se'),
(7, 'Anna', 'Kvarg', 'Soltergatan 11', 'akvarg@bilverkstad.se'),
(8, 'Pernilla', ' Clinton', 'Nörragrännsväg 36', 'pclinton@bilverkstad.se'),
(9, 'Åke', 'Johansson', 'Per Albin 20', 'ajohansson@bilverkstad.se'),
(10, 'Donald', 'Trump', 'Snurrigatan 3', 'strump@bilverkstad.se');

-- --------------------------------------------------------

--
-- Tabellstruktur `Damages`
--

CREATE TABLE `Damages` (
  `Id_damage` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `partNumber` int(7) DEFAULT NULL,
  `SSN` int(7) DEFAULT NULL,
  `hours` time(3) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `Damages`
--

INSERT INTO `Damages` (`Id_damage`, `description`, `partNumber`, `SSN`, `hours`, `status`) VALUES
(1, 'The window is broken', 1, 1, '00:00:04.000', 'Ongoing'),
(2, 'My car doesnt start', NULL, 9, '00:00:03.000', 'upcoming'),
(3, 'change tires and wheels', 2, 1, '00:00:02.000', 'upcoming'),
(4, 'Car needs to paint', NULL, 3, '00:00:12.000', 'upcoming'),
(5, 'Glue seal and fix', 3, 3, '00:00:05.000', 'upcoming'),
(6, 'Alternator Problems', NULL, NULL, '00:00:05.000', 'ongoing'),
(7, 'Radiator leak', NULL, 5, '00:00:05.000', 'ongoing'),
(8, 'Oli Leal', NULL, NULL, '00:00:02.000', 'upcoming');

-- --------------------------------------------------------

--
-- Tabellstruktur `Employees`
--

CREATE TABLE `Employees` (
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
-- Dumpning av Data i tabell `Employees`
--

INSERT INTO `Employees` (`SSN`, `email`, `pass`, `fName`, `lName`, `title`, `vacation_start`, `vacation_end`) VALUES
(1, 'cthompson0@vkontakte.ru', 'password', 'Catherine', 'Thompson', 'Mechanic', '2017-07-16', '2017-08-16'),
(2, 'iandrews1@apache.org', '1password ', 'Irene', 'Andrews', 'Mechanic', '2017-03-13', '2017-04-13'),
(3, 'ebutler2@w3.org', 'password', 'Eugene', 'Butler', 'Mechanic', '2017-09-13', '2017-10-13'),
(4, 'jbradley3@newsvine.com', 'password', 'Jose', 'Bradley', 'Mechanic', '2017-10-11', '2017-11-11'),
(5, 'wcox4@harvard.edu', 'password', 'Wayne', 'Cox', 'Mechanic', '2017-01-08', '2017-02-08'),
(6, 'whowell5@nydailynews.com', 'password', 'Wanda', 'Howell', 'Mechanic', '2017-06-28', '2017-07-13'),
(7, 'jmorrison6@phpbb.com', 'password', 'Jimmy', 'Morrison', 'Mechanic', '2017-06-01', '2017-06-28'),
(8, 'cfrazier7@mozilla.com', 'password', 'Craig', 'Frazier', 'Mechanic', '2017-04-07', '2017-04-21'),
(9, 'cmeyer8@bloomberg.com', 'password', 'Cheryl', 'Meyer', 'Mechanic', '2017-04-29', '2017-05-15'),
(10, 'ctorres9@psu.edu', 'password', 'Chris', 'Torres', 'Mechanic', '2017-10-15', '2017-11-15');

-- --------------------------------------------------------

--
-- Tabellstruktur `Reapir_cars`
--

CREATE TABLE `Reapir_cars` (
  `reg_num` varchar(10) NOT NULL,
  `modellName` varchar(30) DEFAULT NULL,
  `SSN` int(7) DEFAULT NULL,
  `id_damage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `Reapir_cars`
--

INSERT INTO `Reapir_cars` (`reg_num`, `modellName`, `SSN`, `id_damage`) VALUES
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
-- Tabellstruktur `SpareParts`
--

CREATE TABLE `SpareParts` (
  `partNumber` int(7) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` decimal(12,2) NOT NULL,
  `modellName` varchar(50) DEFAULT NULL,
  `VAT` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `SpareParts`
--

INSERT INTO `SpareParts` (`partNumber`, `name`, `price`, `modellName`, `VAT`) VALUES
(1, 'Spare parts with Engine referens', '2500.00', 'Volvo V70', '312.00'),
(2, 'Brake reference parts', '1000.00', 'Volvo 60', '150.00'),
(3, 'Parts with reference of Direction', '1500.00', 'Volvo 300', '175.00');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`SSN`);

--
-- Index för tabell `Damages`
--
ALTER TABLE `Damages`
  ADD PRIMARY KEY (`Id_damage`),
  ADD KEY `partNumber` (`partNumber`),
  ADD KEY `SSN` (`SSN`);

--
-- Index för tabell `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`SSN`);

--
-- Index för tabell `Reapir_cars`
--
ALTER TABLE `Reapir_cars`
  ADD PRIMARY KEY (`reg_num`),
  ADD KEY `id_damage` (`id_damage`),
  ADD KEY `SSN` (`SSN`);

--
-- Index för tabell `SpareParts`
--
ALTER TABLE `SpareParts`
  ADD PRIMARY KEY (`partNumber`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `Customers`
--
ALTER TABLE `Customers`
  MODIFY `SSN` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT för tabell `Employees`
--
ALTER TABLE `Employees`
  MODIFY `SSN` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `Damages`
--
ALTER TABLE `Damages`
  ADD CONSTRAINT `damages_ibfk_1` FOREIGN KEY (`partNumber`) REFERENCES `SpareParts` (`partNumber`),
  ADD CONSTRAINT `damages_ibfk_2` FOREIGN KEY (`SSN`) REFERENCES `Employees` (`SSN`);

--
-- Restriktioner för tabell `Reapir_cars`
--
ALTER TABLE `Reapir_cars`
  ADD CONSTRAINT `reapir_cars_ibfk_1` FOREIGN KEY (`id_damage`) REFERENCES `Damages` (`Id_damage`),
  ADD CONSTRAINT `reapir_cars_ibfk_2` FOREIGN KEY (`SSN`) REFERENCES `Customers` (`SSN`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
