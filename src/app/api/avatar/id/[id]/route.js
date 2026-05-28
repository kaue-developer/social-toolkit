import { selectAvatar } from "@/app/server/controllers/avatar.controllers";

//Rota para gerar um avatar manualmente pelo id
export async function GET(req, { params }) {
    const { id } = await params;

    return selectAvatar(id);
}