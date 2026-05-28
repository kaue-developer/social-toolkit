import { selectFakeUserError } from "@/app/server/controllers/fakeUsers.controllers";

//Rota de erro ao não informar nenhum id de usuário fake
export async function GET() {
    return selectFakeUserError();
}