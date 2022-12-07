import connectMongo from '../../../utils/connectMongoDB';
import Ad from "../../../utils/adModel";
import mongoose from "mongoose";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function ShowAds(req, res) {

        console.log('CONNECTING TO MONGO');
        mongoose.connect('mongodb+srv://khalil:nUhi3qyilDygDhz9@adoptme.igxn7.mongodb.net/?retryWrites=true&w=majority').then(() => {

            let typeByReq = req.body.type
            const db = mongoose.connection.db ;
            db.collection('Ad').find({type:typeByReq}).toArray((err, Ad) => {

                res.json({ Ad })

            }) ;
        })
        console.log('LOADING Ads');
    }