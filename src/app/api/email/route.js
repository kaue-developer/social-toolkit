import { emailError } from "@/app/server/controllers/email.controllers";

//Erro para rota incompleta - /api/email
export async function GET() {
    return emailError();
}