import { bioError } from "@/app/server/controllers/bio.controllers";

//Erro para rota incompleta
export async function GET() {
    return bioError();
}