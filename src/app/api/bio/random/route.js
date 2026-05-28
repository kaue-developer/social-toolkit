import { randomBio } from "@/app/server/controllers/bio.controllers";

//Rota para gerar uma bio aleatória
export async function GET() {
    return randomBio();
}