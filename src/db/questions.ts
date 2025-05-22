import questions from "./questions.json";

export default questions;
export const questionCategories = [
  ...new Set(questions.filter((question) => question.Kategoria).map((question) => question.Kategoria)),
] as string[];
