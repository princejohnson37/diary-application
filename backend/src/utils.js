const pool = require("../db");
const queries = require("./users/queries");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const checkEmailExists = async (email) => {
  const email_data = await pool.query(queries.checkEmailExists, [email]);
  return email_data.rows.length;
};

const getUserId = async (email) => {
  console.log(email);
  const user_data = await pool.query(queries.getUserId, [email]);
  console.log(user_data.rows);
  return user_data.rows[0].user_id;
};

function generateAccessToken(user_id) {
  return jwt.sign({ user_id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
}

module.exports = { checkEmailExists, generateAccessToken, getUserId };
