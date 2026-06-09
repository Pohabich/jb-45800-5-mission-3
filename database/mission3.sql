-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jun 09, 2026 at 07:10 AM
-- Server version: 9.6.0
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mission3`
--
CREATE DATABASE IF NOT EXISTS `mission3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `mission3`;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `created_at`, `updated_at`) VALUES
('81069762-63d0-11f1-94d8-2a3f0c421754', 'React team', '2026-06-09 06:55:38', '2026-06-09 06:55:38'),
('8106d1d9-63d0-11f1-94d8-2a3f0c421754', 'Mobile team', '2026-06-09 06:55:38', '2026-06-09 06:55:38'),
('8106ebf6-63d0-11f1-94d8-2a3f0c421754', 'UI team', '2026-06-09 06:55:38', '2026-06-09 06:55:38');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `group_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `open_date` datetime NOT NULL,
  `close_date` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `group_id`, `open_date`, `close_date`, `description`, `room`, `created_at`, `updated_at`) VALUES
('ca0aa872-63d1-11f1-94d8-2a3f0c421754', '81069762-63d0-11f1-94d8-2a3f0c421754', '2026-06-09 06:58:20', '2026-06-16 09:58:20', 'Initial meeting', 'Blue room', '2026-06-09 06:58:20', '2026-06-09 06:58:20'),
('ca0abfb5-63d1-11f1-94d8-2a3f0c421754', '81069762-63d0-11f1-94d8-2a3f0c421754', '2026-06-10 09:58:20', '2026-06-12 09:58:20', 'Next missions', 'New York room', '2026-06-09 06:58:20', '2026-06-09 06:58:20'),
('ca0ad5c3-63d1-11f1-94d8-2a3f0c421754', '8106d1d9-63d0-11f1-94d8-2a3f0c421754', '2026-06-14 10:04:06', '2026-06-15 05:04:06', 'Bugs fixing', 'Large Board room', '2026-06-09 06:58:20', '2026-06-09 06:58:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
