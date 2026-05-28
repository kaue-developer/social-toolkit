import { selectFakeUser } from "@/app/server/controllers/fakeUsers.controllers";

//Rota para selecionar um usuário fake manualmente pelo id
export async function GET(req, { params }) {
    const { id } = await params;

    return selectFakeUser(id);
}