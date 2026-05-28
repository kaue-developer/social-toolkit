//Controladores das rotas de geração de banners

import { NextResponse } from "next/server";
import Banners from "../../../mocks/banners";
import path from "path";
import { promises as fs } from "fs";

//Erro de rota incompleta - /api/banner
export async function bannerError() {
    return NextResponse.json({ error: "Rota incompleta" }, { status: 400 });
}

//Gera um banner aleatório
export async function randomBanner() {
    const randomNumber = Math.floor(Math.random() * Banners.length);

    try {
        const bannerPath = path.join(process.cwd(), "public", "banners", Banners[randomNumber].banner);
        const banner = await fs.readFile(bannerPath);

        return new NextResponse(banner, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Gera um banner manualmente pelo id
export async function selectBanner(id) {
    try {
        if(id > Banners.length) {
            throw new Error(`Id inválido, o valor máximo permitido é ${Banners.length}`);
        } else if(id <= 0) {
            throw new Error('Id inválido, o valor mínimo permitido é 1');
        }

        const bannerPath = path.join(process.cwd(), "public", "banners", Banners[id - 1].banner);
        const banner = await fs.readFile(bannerPath);

        return new NextResponse(banner, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum id de banner
export async function selectBannerError() {
    return NextResponse.json({ error: "Você deve fornecer um id de algum banner. Ex: /api/banner/id/1" }, { status: 400 });
}