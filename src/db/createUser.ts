import { users } from "./connection";
import * as argon from "argon2";
import jwt from "jsonwebtoken";
import sendEmail from "../email/sendEmail";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

async function createUser(email: string, password: string, name: string) {
  const userAlreadyExist = !!(await users.findOne({ email }));
  if (!emailRegex.test(email)) {
    throw new Error("email wrongly formated");
  }
  if (!passwordRegex.test(password)) {
    throw new Error("password wrongly formated");
  }
  if (userAlreadyExist) {
    throw new Error("user already exist");
  }
  const user = await users.insertOne({
    name,
    email,
    password: await argon.hash(password),
    answers: [],
    unverified: true,
  });
  const userToken = jwt.sign({ id: user.insertedId.toString() }, process.env.JWT_SECRET as string);
  const verifyUserLink = `${process.env.URI}verify/${userToken}`;
  sendEmail(email, verifyUserLink, "verifyUserLink");
}
export default createUser;
