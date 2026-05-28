import { allFakeUsersForGender } from "@/app/server/controllers/fakeUsers.controllers";

//Rota para gerar todos os usuários fakes por gênero
export async function GET(req, { params }) {
    const { gender } = await params;

    return allFakeUsersForGender(gender);
}