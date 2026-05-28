import { selectAvatarError } from "@/app/server/controllers/avatar.controllers";

//Rota de erro ao não informar nenhum id de avatar
export async function GET() {
    return selectAvatarError();
}