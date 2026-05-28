import { verifyEmailError } from "@/app/server/controllers/email.controllers";

//Erro de validação ao não informar nenhum email
export async function GET() {
    return verifyEmailError();
}