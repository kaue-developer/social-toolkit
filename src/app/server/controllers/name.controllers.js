//Controladores das rotas de geração de nomes

import { NextResponse } from "next/server";
import Names from "../../../mocks/names";

//Erro para rota incompleta - /api/name
export async function nameError() {
    return NextResponse.json({ error: "Rota incompleta" }, { status: 400 });
}

//Gera um nome aleatório
export async function randomName() {
    const randomNumber = Math.floor(Math.random() * Names.length);

    try {
        return NextResponse.json(Names[randomNumber].name, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Gera um nome aleatório por gênero
export async function randomNameForGender(gender) {
    let namesList = [];

    try {
        for(let i = 0; i < Names.length; i++) {
            if(gender === "m") {
                if(Names[i].gender === "Masculino") {
                    namesList.push(Names[i].name);
                }
            } else if(gender === "f") {
                if(Names[i].gender === "Feminino") {
                    namesList.push(Names[i].name);
                } 
            } else {
                throw new Error(`${gender} não é um gênero válido, apenas as letras m e f são permitidos`);
            }
        }

        const randomNumber = Math.floor(Math.random() * namesList.length);

        return NextResponse.json(namesList[randomNumber], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum gênero
export async function randomNameForGenderError() {
    return NextResponse.json({ error: "Você deve fornecer um gênero. Ex: /api/name/random/gender/m ou /api/name/random/gender/f" }, { status: 400 });
}

//Gera todos os nomes
export async function allNames() {
    let namesList = [];

    try {
        for(let i = 0; i < Names.length; i++) {
            namesList.push(Names[i].name);
        }

        return NextResponse.json(namesList, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Gera todos os nomes por gênero
export async function allNamesForGender(gender) {
    let namesList = [];

    try {
        for(let i = 0; i < Names.length; i++) {
            if(gender === "m") {
                if(Names[i].gender === "Masculino") {
                    namesList.push(Names[i].name);
                }
            } else if(gender === "f") {
                if(Names[i].gender === "Feminino") {
                    namesList.push(Names[i].name);
                }
            } else {
                throw new Error(`${gender} não é um gênero válido, apenas as letras m e f são permitidos`);
            }
        }

        return NextResponse.json(namesList, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum gênero
export async function allNamesForGenderError() {
    return NextResponse.json({ error: "Você deve fornecer um gênero. Ex: /api/name/all/gender/m ou /api/name/all/gender/f" }, { status: 400 });
}