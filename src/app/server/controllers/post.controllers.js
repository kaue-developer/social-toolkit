//Controladores das rotas de postagens

import { NextResponse } from 'next/server';
import Posts from '../../../mocks/posts';

//Erro para rota incompleta - /post
export async function postError() {
    return NextResponse.json({ error: "Rota incompleta" }, { status: 400 });
}

//Gera uma postagem aleatória
export async function randomPost() {
    try {
        const randomNumber = Math.floor(Math.random() * Posts.length);

        return NextResponse.json(Posts[randomNumber], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Gera uma postagem aleatória de algum usuário
export async function randomPostForUser(user) {
    let postList = [];

    try {
        for(let i = 0; i < Posts.length; i++) {
            if(Posts[i].author.username === user || Posts[i].author.username === `@${user}`) {
                postList.push(Posts[i]);
            }
        }

        if(postList.length === 0) {
            throw new Error(`${user} não é um nome de usuário válido`);
        }

        const randomNumber = Math.floor(Math.random() * postList.length);

        return NextResponse.json(postList[randomNumber], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum usuário
export async function randomPostForUserError() {
    return NextResponse.json({ error: "Você deve informar um nome de usuário. Ex: /api/post/random/user/isah_7" }, { status: 400 });
}

//Gera todas as postagens
export async function allPosts() {
    try {
        return NextResponse.json(Posts, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Gera todas as postagens de algum usuário
export async function allPostsForUser(user) {
    let postList = [];

    try {
        for(let i = 0; i < Posts.length; i++) {
            if(Posts[i].author.username === user || Posts[i].author.username === `@${user}`) {
                postList.push(Posts[i]);
            }
        };

        if(postList.length === 0) {
            throw new Error(`${user} não é um nome de usuário válido`);
        }

        return NextResponse.json(postList, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Erro ao não informar nenhum usuário
export async function allPostsForUserError() {
    return NextResponse.json({ error: "Você deve informar um nome de usuário. Ex: /api/post/all/user/isah_7" }, { status: 400 });
}