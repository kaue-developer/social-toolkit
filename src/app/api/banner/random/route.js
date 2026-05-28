import { randomBanner } from "@/app/server/controllers/banner.controllers";

//Rota para gerar um banner aleatório
export async function GET() {
    return randomBanner();
}