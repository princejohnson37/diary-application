const postDiaryEntry =
  "insert into diary (diary_location, diary_content, user_id) values ($1,$2,$3)";

const getDiaryEntries = "select * from diary where user_id = $1";
const updateDiaryEntry =
  "update diary set diary_content = $1 where diary_id = $2 and user_id=$3";
const getDiaryEntry = "Select * from diary where diary_id=$1 and user_id=$2";

module.exports = {
  postDiaryEntry,
  getDiaryEntries,
  getDiaryEntry,
  getDiaryEntry,
  updateDiaryEntry,
};
