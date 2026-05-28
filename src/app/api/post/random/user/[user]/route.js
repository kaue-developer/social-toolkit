import { randomPostForUser } from "@/app/server/controllers/post.controllers";

//Gera uma postagem aleatória de algum usuário
export async function GET(req, { params }) {
    const { user } = await params;

    return randomPostForUser(user);
}