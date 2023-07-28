import { MongoClient } from 'mongodb';
import {redirect} from "@sveltejs/kit";

const cstring = process.env.MONGO_URL


// @ts-ignore
const client = new MongoClient(cstring);
const database = client.db(process.env.MONGO_DB_NAME);
const staff = database.collection("staffcoll")

export const load = async (event) => {
    const session = await event.locals.getSession();
    if (!session?.user) {
        throw redirect(302, "/")
    }

    const staffdoc = await staff.findOne({email:{$eq: session.user.email}})
    console.log(session.user.email)

    if(!staffdoc){
        console.log("here")
        return {logout:true, user:null}
    }
    return {logout:false, user:session.user}
}