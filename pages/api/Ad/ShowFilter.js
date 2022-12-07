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
            let objectRequest  =  {}
            let bodyReq = req.body

            if(bodyReq.type !== undefined){
                objectRequest.type = bodyReq.type
            }
            if(bodyReq.age !== undefined){
                objectRequest.age = bodyReq.age
            }
            if(bodyReq.sex !== undefined){
                objectRequest.sex = bodyReq.sex
            }
            if(bodyReq.race !== undefined){
                objectRequest.race = bodyReq.race
            }
            if(bodyReq.color !== undefined){
                objectRequest.color = bodyReq.color
            }  if(bodyReq.region !== undefined){
                objectRequest.region = bodyReq.region
            }


            const db = mongoose.connection.db ;
            db.collection('Ad').find(objectRequest).toArray((err, Ad) => {

                res.json({ Ad })

            }) ;
        })
        console.log('LOADING Ads');
    }