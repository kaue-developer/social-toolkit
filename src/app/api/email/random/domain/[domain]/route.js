import { randomEmailForDomain } from "@/app/server/controllers/email.controllers";

//Rota para gerar um email aleatório por domínio
export async function GET(req, { params }) {
    const { domain } = await params;

    return randomEmailForDomain(domain);
}