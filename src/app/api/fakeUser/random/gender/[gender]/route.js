import { randomFakeUserForGender } from "@/app/server/controllers/fakeUsers.controllers"

//Rota para gerar um usuário fake aleatório por gênero
export async function GET(req, { params }) {
    const { gender } = await params;

    return randomFakeUserForGender(gender);
}