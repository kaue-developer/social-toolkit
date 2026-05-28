import { allNamesForGender } from "@/app/server/controllers/name.controllers";

//Rota para gerar todos os nomes por gênero
export async function GET(req, { params }) {
    const { gender } = await params;

    return allNamesForGender(gender);
}