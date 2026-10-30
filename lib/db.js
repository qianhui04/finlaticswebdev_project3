const { Pool } = require("pg");

const pool =
  global.pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
}

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
};