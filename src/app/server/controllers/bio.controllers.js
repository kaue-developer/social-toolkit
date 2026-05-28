//Controladores das rotas de geração de bios

import { NextResponse } from "next/server";
import Bios from "../../../mocks/bios";

//Erro para rota incompleta
export async function bioError() {
    return NextResponse.json({ error: "Rota incompleta" }, { status: 400 });
}

//Gera uma bio aleatória
export async function randomBio() {
    try {
        const randomNumber = Math.floor(Math.random() * Bios.length);

        return NextResponse.json(Bios[randomNumber].bio, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}