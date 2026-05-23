const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Automatically drop idle client connections after 30 seconds
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

// Structural telemetry probe to verify database status on initialization
pool.on('connect', () => {
  console.log('➔ DATABASE: Connection pool established successfully against target instance.');
});

pool.on('error', (err) => {
  console.error('⚠️ DATABASE_ERR: Connection pool experienced unexpected disruption:', err.message);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
