import { randomAvatar } from "@/app/server/controllers/avatar.controllers";

//Rota para gerar um avatar aleatório
export async function GET() {
    return randomAvatar();
}