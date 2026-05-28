import { fakeUserError } from "@/app/server/controllers/fakeUsers.controllers";

//Erro para rota incompleta - /api/fakeUser
export async function  GET() {
    return fakeUserError();
}