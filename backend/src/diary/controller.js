const pool = require("../../db");
const { getUserId } = require("../utils");
const queries = require("./queries");

const getDiaryEntries = async (req, res) => {
  const user_email = req.user;
  console.log(`user email is ${user_email}`);
  const user_id = await getUserId(user_email.user_id);
  pool.query(queries.getDiaryEntries, [user_id], (error, results) => {
    res.send(results.rows);
  });
};

const getDiaryEntry = async (req, res) => {
  const user_email = req.user;
  const user_id = await getUserId(user_email.user_id);
  console.log(req.params);
  const diary_id = req.params.id;
  pool.query(queries.getDiaryEntry, [diary_id, user_id], (error, results) => {
    if (error) throw error;
    res.json(results.rows);
  });
};

const postDiaryEntry = async (req, res) => {
  const user_email = req.user.user_id;
  const user_id = await getUserId(user_email);
  const { diary_location, diary_content } = req.body;
  console.log(
    `useremail:- ${user_email},user_id:-${user_id}, body:- ${req.body}`
  );
  pool.query(
    queries.postDiaryEntry,
    [diary_location, diary_content, user_id],
    (error, results) => {
      // console.log(results.rows);
      res.send("Diary entry entered...");
    }
  );
};

const updateDiaryEntry = async (req, res) => {
  const user_email = req.user.user_id;
  const user_id = await getUserId(user_email);
  const { diary_location, diary_content } = req.body;
  const dairy_id = req.params.id;
  pool.query(
    queries.updateDiaryEntry,
    [diary_content, diary_id, user_id],
    (error, results) => {
      res.send("diary entry updated");
    }
  );
};

const deleteDiaryEntry = (req, res) => {
  const user_email = req.user.user_id;
  const user_id = getUserId(user_email);
};

module.exports = {
  getDiaryEntries,
  postDiaryEntry,
  updateDiaryEntry,
  getDiaryEntry,
  deleteDiaryEntry,
};
