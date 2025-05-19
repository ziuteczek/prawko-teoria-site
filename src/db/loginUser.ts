import { users } from "./connection";
import * as argon from "argon2";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

async function logInUser(email: string, password: string) {
  if (!passwordRegex.test(password)) {
    throw new Error("password wrongly formated");
  }
  if (!emailRegex.test(email)) {
    throw new Error("email wrongly formated");
  }
  const user = await users.findOne({ email });
  if (!user) {
    throw new Error("user doesn't exist");
  }
  const passwordMatches = await argon.verify(user.password, password);
  if (!passwordMatches) {
    throw new Error("passwords don't match");
  }

  return jwt.sign(
    { id: user._id.id, name: user.name, email: email },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
}
export default logInUser;
