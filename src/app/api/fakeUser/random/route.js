import { randomFakeUser } from "@/app/server/controllers/fakeUsers.controllers";

//Rota para gerar um usuário fake aleatório
export async function GET() {
    return randomFakeUser();
}