-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 08, 2018 at 12:02 AM
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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `uid` int(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `signup_date` datetime NOT NULL,
  `profile_pic` text NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`uid`, `username`, `firstname`, `lastname`, `email`, `password`, `signup_date`, `profile_pic`, `cid`) VALUES
(1, 'abc', 'ab', 'c', 'abc@gmail.com', 'abc', '2018-07-07 00:00:00', '', 11),
(2, 'abcde', 'Abcd', 'Xyzz', 'Abcde@gmail.com', 'e19d5cd5af0378da05f63f891c7467af', '2018-07-07 00:00:00', 'assets/images/profile-pics/head_emerald.png', 2),
(3, 'abcdef', 'Abcdef', 'Xyzabc', 'A@gmail.com', 'a99442d2a736365f5fe637e299b0e339', '2018-07-07 00:00:00', 'assets/images/profile-pics/head_emerald.png', 1),
(4, '4jc15cs006', 'Dasdas', 'Asdasdas', 'Asdasd@gmail.com', 'e19d5cd5af0378da05f63f891c7467af', '2018-07-07 00:00:00', 'assets/images/profile-pics/head_emerald.png', 1),
(5, '4jc15cs0065', 'Dsasdas', 'Asdasdsa', 'John1@gmail.com', 'e19d5cd5af0378da05f63f891c7467af', '2018-07-07 00:00:00', 'assets/images/profile-pics/head_emerald.png', 1),
(6, 'heyjey', 'Dsfdsf', 'Dsfsdf', 'Sanath@gmail.com', 'e19d5cd5af0378da05f63f891c7467af', '2018-07-07 00:00:00', 'assets/images/profile-pics/head_emerald.png', 2);

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

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pid` int(10) NOT NULL,
  `pname` varchar(20) NOT NULL,
  `total` int(6) NOT NULL,
  `available` int(6) NOT NULL,
  `cid` int(6) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pid`, `pname`, `total`, `available`, `cid`, `price`) VALUES
(1, 'irrigation', 30, 28, 1, 500),
(401, 'tractor', 15, 15, 11, 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`bid`),
  ADD UNIQUE KEY `bid` (`bid`);

--
-- Indexes for table `center`
--
ALTER TABLE `center`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `cid` (`cid`),
  ADD KEY `cid_2` (`cid`);

--
-- Indexes for table `Farmer`
--
ALTER TABLE `Farmer`
  ADD PRIMARY KEY (`fid`),
  ADD UNIQUE KEY `fid` (`fid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pid`),
  ADD UNIQUE KEY `pname` (`pname`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `uid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `bid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
