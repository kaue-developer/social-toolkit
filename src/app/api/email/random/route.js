import { randomEmail } from "@/app/server/controllers/email.controllers";

//Rota para gerar um email aleatório
export async function GET() {
    return randomEmail();
}