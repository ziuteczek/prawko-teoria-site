// import type { ObjectId } from "mongodb";

interface userObj {
  _id: ObjectId;
  email: string;
  password: string;
  answers: answerObj[];
}

declare namespace App {
  interface Locals {
    id: string | null;
    name: string | null;
    email: string | null;
    iat: number | null;
    exp: number | null;
    response: Response | null;
  }
}
declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    port: number;
    SITE_URI: string;
    URI_APP: string;
    SERVER_URL: string;
  }
}
interface Token {
  id: object;
  loggedIn: boolean;
  email: string;
  name: string;
  iat: number;
}
interface Question {
  "Lp.": number;
  "Numer pytania": number;
  Pytanie: string;
  "Poprawna odp": string;
  Media?: string;
  Kategoria?: string;
  Kategorie: string[];
  "Pytanie [ENG]": string;
  "Pytanie [DE]": string;
  "Pytanie [UA]": string;
  MediaID?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść pyt"?: string;
  "Odpowiedź A"?: string;
  "Odpowiedź B"?: string;
  "Odpowiedź C"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść odp A"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść odp B"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść odp C"?: string;
  "Odpowiedź A [ENG]"?: string;
  "Odpowiedź B [ENG]"?: string;
  "Odpowiedź C [ENG]"?: string;
  "Odpowiedź A [DE]"?: string;
  "Odpowiedź B [DE]"?: string;
  "Odpowiedź C [DE]"?: string;
  "Odpowiedź A [UA]"?: string;
  "Odpowiedź B [UA]"?: string;
  "Odpowiedź C [UA]"?: string;
}

interface answerObj {
  questionIndex: number;
  timeAnswerd: Date;
  selectedAnswer: string;
  category: string;
  isCorrect: boolean;
}
interface categoriesStats {
  name: string;
  quantity: number;
  answersFamiliar: number;
  answersUnfamiliar: number;
  questionsFamiliar: Question[];
  questionsUnfamiliar: Question[];
  questionsUnknown: Question[];
}
interface logInResoult {
  status: string;
  message: string;
}
