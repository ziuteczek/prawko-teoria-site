import jwt from "jsonwebtoken";
/**
 * A regular expression to validate passwords.
 *
 * The password must meet the following criteria:
 * - Contain at least one digit (`\d`).
 * - Contain at least one lowercase letter (`a-z`).
 * - Contain at least one uppercase letter (`A-Z`).
 * - Contain at least one alphabetic character (either lowercase or uppercase).
 * - Be between 8 and 32 characters in length.
 */
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;
/**
 * Regular expression to validate email addresses.
 *
 * This regex ensures that the email address:
 * - Starts with alphanumeric characters, underscores, hyphens, or dots.
 * - Contains an "@" symbol followed by a domain name.
 * - The domain name consists of alphanumeric characters and hyphens, separated by dots.
 * - Ends with a valid top-level domain (TLD) of 2 to 4 characters.
 */
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
/**
 * Validates a user token by verifying it against a secret key.
 *
 * @param token - The token string to be validated.
 * @returns A promise that resolves to a boolean indicating whether the token is valid.
 *
 * @remarks
 * This function uses the `argon.verify` method to validate the token.
 * Ensure that the `JWT_SECRET` environment variable is properly set
 * before using this function.
 */
export const validateUserToken = async (token: string) => jwt.verify(token, process.env.JWT_SECRET as string);
