import { allPostsForUserError } from "@/app/server/controllers/post.controllers";

//Erro ao não informar nenhum usuário
export async function GET() {
    return allPostsForUserError();
}