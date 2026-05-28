import { postError } from "@/app/server/controllers/post.controllers";

//Erro para rota incompleta
export async function GET() {
    return postError();
}