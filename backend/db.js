const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "diary_application",
  password: "lol123",
  port: 5432,
});

module.exports = pool;
