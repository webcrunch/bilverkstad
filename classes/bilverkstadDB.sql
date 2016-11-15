-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Värd: localhost
-- Tid vid skapande: 10 nov 2016 kl 20:30
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

--
-- Dumpning av Data i tabell `Customers`
--s

INSERT INTO `Customers` (`SSN`, `fName`, `lName`, `address`, `email`) VALUES
('1', 'Kalle', 'Nilsson', 'amiralsgatan 14B', 'andersson@bilverkstad.se'),
('10', 'Åke', 'Johansson', 'Per Albin 20', 'ajohansson@bilverkstad.se'),
('11', 'Donald', 'Trump', 'Snurrigatan 3', 'strump@bilverkstad.se'),
('2', 'Mayra', 'Rivas', 'Nevisborg 20D', 'mrivas@bilverkstad.se'),
('3', 'Jarl', 'Andersson', 'Storgatan 15', 'jandersson@bilverkstad.se'),
('4', 'Martin', 'Vergara', 'Tenorgränd 18', 'mvergara@bilverkstad.se'),
('5', 'Patricio', 'Smith', 'Hörnet 22', 'psmith@bilverkstad.se'),
('6', 'Faj', 'Gravestam', 'Bilgatan 50', 'fgravestam@bilverkstad.se'),
('7', 'Hugo', 'Trump', 'Ön 4', 'htrump@bilverkstad.se'),
('8', 'Anna', 'Kvarg', 'Soltergatan 11', 'akvarg@bilverkstad.se'),
('9', 'Pernilla', ' Clinton', 'Nörragrännsväg 36', 'pclinton@bilverkstad.se');

-- --------------------------------------------------------

--
-- Tabellstruktur `Damages`
--

CREATE TABLE `Damages` (
  `IdDamage` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `partNumber` varchar(20) DEFAULT NULL,
  `SSN` varchar(10) DEFAULT NULL,
  `hours` time DEFAULT NULL,
  `status` tinyint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `Employees`
--

CREATE TABLE `Employees` (
  `SSN` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `fName` varchar(50) DEFAULT NULL,
  `lName` varchar(50) DEFAULT NULL,
  `title` varchar(80) DEFAULT NULL,
  `vacation_start` date DEFAULT NULL,
  `vacation_end` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `Reapir_cars`
--

CREATE TABLE `Reapir_cars` (
  `reg_num` varchar(10) NOT NULL,
  `model` varchar(20) DEFAULT NULL,
  `SSN` varchar(10) DEFAULT NULL,
  `IdDamage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellstruktur `SpareParts`
--

CREATE TABLE `SpareParts` (
  `name` varchar(50) DEFAULT NULL,
  `partNumber` varchar(50) NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `model` varchar(50) DEFAULT NULL,
  `VAT` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  ADD PRIMARY KEY (`IdDamage`),
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
  ADD KEY `IdDamage` (`IdDamage`),
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
-- AUTO_INCREMENT för tabell `Damages`
--
ALTER TABLE `Damages`
  MODIFY `IdDamage` int(11) NOT NULL AUTO_INCREMENT;
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
  ADD CONSTRAINT `reapir_cars_ibfk_1` FOREIGN KEY (`IdDamage`) REFERENCES `Damages` (`IdDamage`),
  ADD CONSTRAINT `reapir_cars_ibfk_2` FOREIGN KEY (`SSN`) REFERENCES `Customers` (`SSN`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
