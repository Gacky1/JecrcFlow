import env from "@/app/env"
import {Avatars,Client,Databases,Storage,Users} from "node-appwrite"

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apikey) // Your secret API key
    // .setSelfSigned() // Use only on dev mode with a self-signed SSL cert
;

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);

export {client, databases, avatars, storage,users}