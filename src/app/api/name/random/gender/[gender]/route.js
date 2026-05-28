import { randomNameForGender } from "@/app/server/controllers/name.controllers";

//Rota para gerar um nome aleatório por gênero
export async function GET(req, { params }) {
    const { gender } = await params;

    return randomNameForGender(gender);
}