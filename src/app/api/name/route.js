import { nameError } from "@/app/server/controllers/name.controllers";

//Erro para rota incompleta
export async function GET() {
    return nameError();
}