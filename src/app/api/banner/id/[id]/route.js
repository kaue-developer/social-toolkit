import { selectBanner } from "@/app/server/controllers/banner.controllers";

//Rota para gerar um banner manualmente pelo id
export async function GET(req, { params }) {
    const { id } = await params;

    return selectBanner(id);
}