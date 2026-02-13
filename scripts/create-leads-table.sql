-- Run this in cPanel → phpMyAdmin (select your database, then SQL tab).
-- Creates the table used by public/api/save-lead.php

CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100) DEFAULT NULL,
  city_country VARCHAR(255) DEFAULT NULL,
  industry VARCHAR(255) DEFAULT NULL,
  company_size VARCHAR(50) DEFAULT NULL,
  primary_objective TEXT DEFAULT NULL,
  estimated_budget VARCHAR(255) DEFAULT NULL,
  timeline VARCHAR(255) DEFAULT NULL,
  message TEXT DEFAULT NULL,
  created_at DATETIME NOT NULL,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
