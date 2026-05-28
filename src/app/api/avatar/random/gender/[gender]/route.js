import { randomAvatarForGender } from "@/app/server/controllers/avatar.controllers";

//Rota para gerar um avatar aleatório por gênero
export async function GET(req, { params }) {
    const { gender } = await params;

    return randomAvatarForGender(gender);
}