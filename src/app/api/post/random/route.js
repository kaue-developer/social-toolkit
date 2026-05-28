import { randomPost } from "@/app/server/controllers/post.controllers";

//Rota para gerar uma postagem aleatória
export async function GET() {
    return randomPost();
}