-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 08, 2018 at 12:04 AM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ISAP`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `bid` int(5) NOT NULL,
  `pid` int(5) NOT NULL,
  `pname` varchar(20) NOT NULL,
  `quantity` int(5) NOT NULL,
  `borrowdate` date NOT NULL,
  `returndate` date NOT NULL,
  `fid` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`bid`, `pid`, `pname`, `quantity`, `borrowdate`, `returndate`, `fid`) VALUES
(111, 401, 'tractor', 1, '2018-08-02', '2018-09-02', 12),
(112, 401, 'tractor', 2, '2018-07-13', '2018-08-04', 4),
(113, 401, 'tractor', 1, '2018-07-06', '2018-07-10', 1),
(114, 401, 'tractor', 1, '2018-07-06', '2018-07-10', 4),
(115, 1, 'tractor', 2, '2018-06-06', '2018-06-07', 3),
(116, 401, 'tractor', 3, '2018-02-03', '2018-03-03', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`bid`),
  ADD UNIQUE KEY `bid` (`bid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `bid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
