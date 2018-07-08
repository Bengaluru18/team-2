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
-- Table structure for table `Farmer`
--

CREATE TABLE `Farmer` (
  `fid` int(5) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `aadhar_no` int(12) NOT NULL,
  `survey no` int(5) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Farmer`
--

INSERT INTO `Farmer` (`fid`, `fname`, `aadhar_no`, `survey no`, `cid`) VALUES
(1, 'abc', 10, 20, 2),
(3, 'veerappa', 458926, 7894, 12),
(4, 'mukesh', 78236, 478, 11),
(12, 'veerappa', 458926, 4589, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Farmer`
--
ALTER TABLE `Farmer`
  ADD PRIMARY KEY (`fid`),
  ADD UNIQUE KEY `fid` (`fid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
