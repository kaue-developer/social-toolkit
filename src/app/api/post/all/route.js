import { allPosts } from "@/app/server/controllers/post.controllers";

//Rota para gerar todos os posts
export async function GET() {
    return allPosts();
}