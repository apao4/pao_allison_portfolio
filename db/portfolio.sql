-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 06, 2018 at 08:31 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

CREATE TABLE `tbl_portfolio` (
  `id` int(11) NOT NULL,
  `pro_name` varchar(60) NOT NULL,
  `pro_path` varchar(60) NOT NULL,
  `pro_desc` varchar(400) NOT NULL,
  `pro_category1` varchar(20) NOT NULL,
  `pro_thumb` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`id`, `pro_name`, `pro_path`, `pro_desc`, `pro_category1`, `pro_thumb`) VALUES
(1, 'London Squash and Fitness Club', 'port-lsfc.png', 'The London Squash and Fitness Club was in need of a redesign, therefore, they reached out to a group of us to give them a modern revamp.  My partner and I designed and developed this site with emphasis on large  graphics as well as a monochromatic colour scheme to emulate the modern look they asked for.', 'web', 'port-lsfc.png'),
(2, 'MELLO', 'port-mello.jpg', 'With a growing concern regarding plastic water bottle consumption, my partner and I created a solution.  This bottle design features a removable infuser that works to promote the habit of drinking water - a growing concern amongst young adults.', 'animation', 'port-mello.jpg'),
(3, 'CAISA Fashion Show Casual 2018', 'port-casual.jpg', 'Every year, CAISA Fashion Show holds 5 photoshoots for the final lookbook.  This year, I produced the casual scene photoshoot behind the scenes video.', 'video', 'port-casual.jpg'),
(4, 'Ivey Fashion and Retail Conference', 'port-ifrc3.jpg', 'Earlier this year, I was given the opportunity to photograph the Ivey Fashion and Retail Conference.  Through this event, I was able to network with large companies such as Calvin Klein and the Hudson\'s Bay.', 'photo', 'port-ifrc3.jpg'),
(5, 'Organ Donation Campaign', 'port-organ.png', 'Organ donors are constantly needed as the waitlist continuously grows each day.  With that being said, my group and I created a marketing campaign to bring awareness to the urgent need.', 'branding', 'port-organ.png'),
(6, 'Photography Cheat Sheet', 'port-photocheat.jpg', 'Using a DSLR can be challenging, therefore, I created a photography cheatsheet for the blog I was running with my internship.', 'graphic', 'port-photosheet.jpg'),
(7, 'CAISA Fashion Show One Team', 'port-onedream.png', 'CAISA Fashion Show strives on its values for one team one dream.  With our 20th anniversary, I created a video to showcase what the past 20 years have meant to us.', 'video', 'port-onedream.png'),
(8, 'Velveeta Wine', 'port-velveetaLabels.jpg', 'Using their current branding style, I  designed a wine for Velveeta, a childhood favourite.  ', 'branding', 'port-velveetaLabel1.png');

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
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;