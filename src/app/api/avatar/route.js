import { avatarError } from "@/app/server/controllers/avatar.controllers";

//Erro para rota incompleta - /api/avatar
export async function GET() {
    return avatarError();
}