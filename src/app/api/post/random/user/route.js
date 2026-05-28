import { randomPostForUserError } from "@/app/server/controllers/post.controllers";

//Rota de erro ao não informar nenhum usuário
export async function GET() {
    return randomPostForUserError();
}