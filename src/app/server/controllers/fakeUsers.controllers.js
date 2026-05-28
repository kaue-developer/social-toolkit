//Controladores das rotas de geração de usuários fakes

import { NextResponse } from 'next/server';
import FakeUsers from '../../../mocks/fakeUsers';

//Erro para rota incompleta - /api/fakeUser
export async function fakeUserError() {
    return NextResponse.json({ error: "Rota incompleta" }, { status: 400 });
}

//Gera um usuário fake aleatório
export async function randomFakeUser() {
    const randomNumber = Math.floor(Math.random() * FakeUsers.length);

    try {
        return NextResponse.json(FakeUsers[randomNumber], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Gera um usuário fake aleatório por gênero
export async function randomFakeUserForGender(gender) {
    let fakeUserslist = [];

    try {
        for(let i = 0; i < FakeUsers.length; i++) {
            if(gender === "m") {
                if(FakeUsers[i].gender === "Masculino") {
                    fakeUserslist.push(FakeUsers[i]);
                }
            } else if(gender === "f") {
                if(FakeUsers[i].gender === "Feminino") {
                    fakeUserslist.push(FakeUsers[i]);
                }
            } else {
                throw new Error(`${gender} não é um gênero válido, apenas as letras m e f são permitidos.`);
            }
        }

        const randomNumber = Math.floor(Math.random() * fakeUserslist.length);

        return NextResponse.json( fakeUserslist[randomNumber], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum gênero
export async function randomFakeUserForGenderError() {
    return NextResponse.json({ error: "Você deve fornecer um gênero. Ex: /api/fakeUser/random/gender/m ou /api/fakeUser/random/gender/f" }, { status: 400 } );
}

//Seleciona um usuário fake pelo id
export async function selectFakeUser(id) {
    try {
        if(id > FakeUsers.length) {
            throw new Error(`Usuário fake inválido, o valor máximo permitido é ${FakeUsers.length}`);
        } else if(id <= 0) {
            throw new Error('Usuário fake inválido, o valor mínimo permitido é 1');
        }

        return NextResponse.json( FakeUsers[id - 1], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum id de usuário fake
export async function selectFakeUserError() {
    return NextResponse.json({ error: "Você deve fornecer um id de um usuário fake. Ex: /api/fakeUser/id/1" }, { status: 400 });
}

//Gera todos os usuários fakes
export async function allFakeUsers() {
    try {
        return NextResponse.json(FakeUsers, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Gera todos os usuários fakes por gênero
export async function allFakeUsersForGender(gender) {
    let allFakeUsersList = [];

    try {
        for(let i = 0; i < FakeUsers.length; i++) {
            if(gender === "m") {
                if(FakeUsers[i].gender === "Masculino") {
                    allFakeUsersList.push(FakeUsers[i]);
                }
            } else if(gender === "f") {
                if(FakeUsers[i].gender === "Feminino") {
                    allFakeUsersList.push(FakeUsers[i]);
                }
            } else {
                throw new Error(`${gender} não é um gênero válido, apenas as letras m e f são permitidos`);
            }
        }

        return NextResponse.json(allFakeUsersList, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Erro ao não informar nenhum gênero
export async function allFakeUsersForGenderError() {
    return NextResponse.json({ error: "Você deve fornecer um gênero. Ex: /api/fakeUser/all/gender/f ou /api/fakeUser/all/gender/m" }, { status: 400 });
}