const pool = require("../../../db");
const { checkEmailExists } = require("../../utils");
const queries = require("../queries");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../../utils");

const userLogin = async (req, res) => {
  const { user_email, user_password } = req.body;
  //check if email exists
  if (await checkEmailExists(user_email)) {
    //check for correct password
    // let hash = bcrypt.hashSync(user_password, 10);
    pool.query(queries.getPassword, [user_email], (error, results) => {
      if (error) throw error;
      const databasePassword = results.rows[0].user_password;
      // console.log(databasePassword);
      if (bcrypt.compareSync(user_password, databasePassword)) {
        const accessToken = generateAccessToken(user_email);
        res.json({ isAuth: true, message: "Logged In", accessToken });
      } else {
        console.log("wrong password");
        res.json({
          isAuth: false,
          message: "Wrong Password",
          accessToken: null,
        });
      }
    });
  } else {
    console.log("email doesnt exist for login");
    res.json({
      isAuth: false,
      message: "Email doesnt exist",
      accessToken: null,
    }); // the email doesnt exist in database
  }
};

module.exports = { userLogin };
