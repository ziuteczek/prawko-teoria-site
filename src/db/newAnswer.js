import { users } from "./connection";

async function userNewAnswer(questionID, userID, answer, time) {
  await users.updateOne({ _id: userID }, { $push: { answers: { questionID, answer, time } } });
}
export default userNewAnswer;
 