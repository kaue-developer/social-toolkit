import { allFakeUsers } from "@/app/server/controllers/fakeUsers.controllers";

export async function GET() {
    return allFakeUsers();
}