import { users } from "./connection";
import * as argon from "argon2";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { emailRegex,passwordRegex } from "../helpers";

dotenv.config();


/**
 * Authenticates a user by verifying their email and password, and returns a signed JWT token upon successful authentication.
 *
 * @param email - The email address of the user attempting to log in.
 * @param password - The password provided by the user.
 * @returns A signed JSON Web Token (JWT) containing the user's ID, name, and email, valid for 7 days.
 */
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
    { id: user._id.toString(), name: user.name, email: email },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
}
export default logInUser;
