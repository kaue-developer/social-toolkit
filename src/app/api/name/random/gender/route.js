import { randomNameForGenderError } from "@/app/server/controllers/name.controllers";

//Rota de erro ao não informar nenhum gênero
export async function GET() {
    return randomNameForGenderError();
}