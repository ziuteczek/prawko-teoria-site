import { users } from "./connection";
import * as argon from "argon2";
import jwt from "jsonwebtoken";
import sendEmail from "../email/sendEmail";


import { emailRegex,passwordRegex } from "../helpers";


/**
 * Creates a new user in the database.
 * 
 * @param email - The email address of the user. Must be a valid email format.
 * @param password - The password for the user. Must meet the required format.
 * @param name - The name of the user.
 * 
 * @remarks
 * This function hashes the user's password using Argon2 before storing it in the database.
 * It also generates a JWT token for email verification and sends a verification email
 * to the user with a link to verify their account.
 */
async function createUser(email: string, password: string, name: string) {
  const userAlreadyExist = users.findOne({ email });
  if (!emailRegex.test(email)) {
    throw new Error("email wrongly formated");
  }
  if (!passwordRegex.test(password)) {
    throw new Error("password wrongly formated");
  }
  if (await userAlreadyExist) {
    throw new Error("user already exist");
  }
  const user = await users.insertOne({
    name,
    email,
    password: await argon.hash(password),
    answers: [],
    unverified: true,
  });
  const userVerifyToken = jwt.sign({ id: user.insertedId.toString() }, process.env.JWT_SECRET as string);
  const verifyUserLink = `${process.env.URI}verify/${userVerifyToken}`;
  sendEmail(email, verifyUserLink, "verifyUserLink");
}
export default createUser;
