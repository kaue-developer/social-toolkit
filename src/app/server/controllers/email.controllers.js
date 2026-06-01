//Controladores das rotas de geração de emails

import { NextResponse } from "next/server";
import Emails from '../../../mocks/emails.json';

//Erro para rota incompleta
export async function emailError() {
    return NextResponse.json({ error: "Rota incompleta" }, { status: 400 });
}

//Gera um email aleatório
export async function randomEmail() {
    const randomNumber = Math.floor(Math.random() * Emails.length);

    try {
        return NextResponse.json(Emails[randomNumber].email, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err }, { status: 400 });
    }
}

//Erro ao não informar nenhum domínio de email
export async function domainEmailError() {
    return NextResponse.json({ error: "Você deve fornecer um domínio de email. Ex: /api/email/random/domain/gmail.com ou /api/email/random/domain/gmail"}, { status: 400 });
}

//Gera um email aleatório por domínio
export async function randomEmailForDomain(domain) {
    let emailsList = [];

    try {   
        for(let i = 0; i < Emails.length; i++) {
            if(domain == "gmail.com" | domain == "gmail") {
                if(Emails[i].domain === "gmail.com") {
                    emailsList.push(Emails[i].email);
                }
            }else if(domain === "hotmail.com" | domain == "hotmail"){
                if(Emails[i].domain === "hotmail.com") {
                    emailsList.push(Emails[i].email);
                }
            }else if(domain === "outlook.com" | domain == "outlook") {
                if(Emails[i].domain === "outlook.com") {
                    emailsList.push(Emails[i].email);
                }
            }else {
                throw new Error(`${domain} não é um domínio de email válido, apenas os domínios gmail.com, hotmail.com e outlook.com são permitidos.`)
            }
        }

        const randomNumber = Math.floor(Math.random() * emailsList.length);

        return NextResponse.json(emailsList[randomNumber], { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}

//Verifica se um valor é um email
export async function verifyEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    try {
        if(!regex.test(email)) {
            return NextResponse.json(false, { status: 200 });
        }

        return NextResponse.json(true, { status: 200 });
    }
    catch (err) {
        NextResponse.json({ error: err }, { status: 400 });
    }
}

//Erro de validação ao não informar nenhum email
export async function verifyEmailError() {
    return NextResponse.json({ error: "Você deve fornecer um email. Ex: /api/email/verify/email@gmail.com" }, { status: 400 });
}