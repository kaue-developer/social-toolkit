import { randomAvatarForGenderError } from "@/app/server/controllers/avatar.controllers"

//Rota de erro ao não informar nenhum parâmetro de gênero
export async function GET() {
    return randomAvatarForGenderError();
}