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
-- Table structure for table `center`
--

CREATE TABLE `center` (
  `cid` int(11) NOT NULL,
  `cname` varchar(20) NOT NULL,
  `products` varchar(11) NOT NULL,
  `sid` int(5) NOT NULL,
  `sname` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='center information';

--
-- Dumping data for table `center`
--

INSERT INTO `center` (`cid`, `cname`, `products`, `sid`, `sname`) VALUES
(11, 'hubli', 'tractor', 0, ''),
(12, 'tukur', 'tractor', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `center`
--
ALTER TABLE `center`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `cid` (`cid`),
  ADD KEY `cid_2` (`cid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
