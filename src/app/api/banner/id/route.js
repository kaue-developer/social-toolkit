import { selectBannerError } from "@/app/server/controllers/banner.controllers";

//Rota de erro ao não informar nenhum id de banner
export async function GET() {
    return selectBannerError();
}