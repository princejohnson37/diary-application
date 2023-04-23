const bcrypt = require("bcrypt");
const queries = require("../queries");
const pool = require("../../../db");
const { checkEmailExists } = require("../../utils");

const userRegister = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;
  if (await checkEmailExists(user_email)) {
    res.json({ user_registered: false, message: "User already exists" });
  } else {
    let hashedPassword = bcrypt.hashSync(user_password, 10);
    pool.query(
      queries.userRegister,
      [user_name, user_email, hashedPassword],
      (error, results) => {
        res.json({
          user_registered: true,
          message: "User registered successfully",
        });
      }
    );
  }
};
module.exports = { userRegister };
