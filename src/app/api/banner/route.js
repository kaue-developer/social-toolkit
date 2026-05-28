import { bannerError } from "@/app/server/controllers/banner.controllers";

//Rota de erro para rota incompleta
export async function GET() {
    return bannerError();
}