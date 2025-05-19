// import type { ObjectId } from "mongodb";

interface answerObj {
  answer: 0 | 1 | 2;
}

interface userObj {
  _id: ObjectId;
  email: string;
  password: string;
  answers: answerObj[];
}

declare namespace App {
  interface Locals {
    email: string | null;
    name: string | null;
    loggedIn: boolean | null;
  }
  interface props {
    email: string | null;
    name: string | null;
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
  _id: {
    $oid: string;
  };
  "Lp.": number;
  "Numer pytania": number;
  Pytanie: string;
  "Poprawna odp": string;
  Media?: string;
  Kategorie: string[];
  "Pytanie [ENG]"?: string;
  "Pytanie [DE]"?: string;
  "Pytanie [UA]"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść pyt"?: string;
  "Odpowiedź A"?: string;
  "Odpowiedź B"?: string;
  "Odpowiedź C"?: string;
  "Odpowiedź A [ENG]"?: string;
  "Odpowiedź B [ENG]"?: string;
  "Odpowiedź C [ENG]"?: string;
  "Odpowiedź A [DE]"?: string;
  "Odpowiedź B [DE]"?: string;
  "Odpowiedź C [DE]"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść odp A"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść odp B"?: string;
  "Nazwa media tłumaczenie migowe (PJM) treść odp C"?: string;
}
