//Controladores das rotas de geração de avatares

import { NextResponse } from "next/server"
import Avatars from '../../../mocks/avatars';
import path from "path";
import { promises as fs } from "fs";

//Erro para rota incompleta - /api/avatar
export async function avatarError() {
    return NextResponse.json({ error: "Rota incompleta." }, { status: 400 });
}

//Gera um avatar aleatório
export async function randomAvatar() {
    const randomNumber = Math.floor(Math.random() * Avatars.length);

    try {
        const avatarPath = path.join(process.cwd(), "public", "images", Avatars[randomNumber].photo);
        const avatar = await fs.readFile(avatarPath);

        return new NextResponse(avatar, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Gera um avatar aleatório por gênero
export async function randomAvatarForGender(gender) {
    let avatarsList = [];

    try {
        for(let i = 0; i < Avatars.length; i++) {
            if(gender === "m") {
                if(Avatars[i].gender === "Masculino") {
                    avatarsList.push(Avatars[i].photo);
                }
            } else if(gender === "f") {
                if(Avatars[i].gender === "Feminino") {
                    avatarsList.push(Avatars[i].photo);
                }
            }else {
                throw new Error(`${gender} não é um gênero válido, apenas as letras m e f são permitidos.`);
            }
        }

        const randomNumber = Math.floor(Math.random() * avatarsList.length);

        const avatarPath = path.join(process.cwd(), "public", "images", avatarsList[randomNumber]);
        const avatar = await fs.readFile(avatarPath);

        return new NextResponse(avatar, { status: 200 });
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum gênero
export async function randomAvatarForGenderError() {
    return NextResponse.json({ error: "Você deve fornecer um gênero. Ex: api/avatar/random/gender/m ou api/avatar/random/gender/f" }, { status: 400 });
}

//Gera um avatar manualmente pelo id
export async function selectAvatar(id) {
    try {
        if(id > Avatars.length) {
            throw new Error(`Id inválido, o valor máximo permitido é ${Avatars.length}`);
        }else if(id <= 0) {
            throw new Error('Id inválido, o valor mínimo permitido é 1');
        }

        const avatarPath = path.join(process.cwd(), "public", "images", Avatars[id - 1].photo);
        const avatar = await fs.readFile(avatarPath);

        return new NextResponse(avatar, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum id
export async function selectAvatarError() {
    return NextResponse.json({ error: "Você deve fornecer um id de avatar. Ex: /api/avatar/id/1" }, { status: 400 });
}