import { verifyEmail } from "@/app/server/controllers/email.controllers";

//Faz a validação de um email
export async function GET(req, { params }) {
    const { email } = await params;

    return verifyEmail(email);
}