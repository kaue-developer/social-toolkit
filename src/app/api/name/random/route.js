import { randomName } from "@/app/server/controllers/name.controllers";

//Rota para gerar um nome aleatório
export async function GET() {
    return randomName();
}