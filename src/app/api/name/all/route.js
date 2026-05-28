import { allNames } from "@/app/server/controllers/name.controllers";

//Rota para gerar todos os nomes
export async function GET() {
    return allNames();
}