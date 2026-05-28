import { domainEmailError } from "@/app/server/controllers/email.controllers";

//Rota de erro ao não informar nenhum domínio de email
export async function GET() {
    return domainEmailError();
}