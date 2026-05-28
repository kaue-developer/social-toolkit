import { allPostsForUser } from "@/app/server/controllers/post.controllers";

//Gera todos os posts de algum usuário
export async function GET(req, { params }) {
    const { user } = await params;

    return allPostsForUser(user);
}