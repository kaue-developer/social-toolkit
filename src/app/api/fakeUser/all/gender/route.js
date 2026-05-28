import { allFakeUsersForGenderError } from "@/app/server/controllers/fakeUsers.controllers";

//Rota de erro ao não informar nenhum gênero
export async function GET() {
    return allFakeUsersForGenderError();
}