-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 03, 2018 at 12:54 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE `tbl_services` (
  `id` int(11) NOT NULL,
  `service` varchar(20) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_services`
--

INSERT INTO `tbl_services` (`id`, `service`, `description`) VALUES
(1, 'Web Design', 'As a web designer, I create unique designs for clients that best suit and exceed their needs.  I keep up to date with the latest web design trends ensuring that my designs are successful and modern.  My favourite thing about web design is that each website is so different from the rest allowing for my creativity to be used.  '),
(2, 'Graphic Design', 'From logo design to advertisements, graphic design has continued to peak as one of my favourite aspects of design.  I work with clients to produce what they need in a thoughtful and eye-catching way.  '),
(3, 'Photography', 'I believe photography is important as it captures the best and worst moments in life.  It is a medium that allows for a split second to be remembered forever.  With that being said, I have found an interest in photography from a young age and have continued to fall in love with it. I specialize in event photography such as conferences, as well as portraits.   '),
(4, 'Videography', 'Some moments cannot be captured in a single frame.  With videography, I have found a creative outlet that allows me to bring moments to life.  Using programs such as Final Cut Pro and After Effects, I will work with clients to ensure that their events and moments are captured to their full extent in a cinematic way.  ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
