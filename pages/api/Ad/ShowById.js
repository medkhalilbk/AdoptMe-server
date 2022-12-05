import connectMongo from '../../../utils/connectMongoDB';
import Ad from "../../../utils/adModel";
import mongoose from "mongoose";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function ShowAds(req, res) {

    if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
        return res.status(401).send("You are not autorized !");
    }
    else {
        try {
            if(req.body.id !== undefined){
                console.log('CONNECTING TO MONGO');
                mongoose.connect('mongodb+srv://khalil:nUhi3qyilDygDhz9@adoptme.igxn7.mongodb.net/?retryWrites=true&w=majority').then(() => {

                    let idByReq = req.body.id
                    const db = mongoose.connection.db ;
                    let ObjectIdReq = new mongoose.mongo.ObjectId(idByReq);
                    db.collection('Ad').find(ObjectIdReq).toArray((err, result) => {

                        res.json({ result })

                    }) ;
                })
                console.log('LOADING Ads');
            }
            else{
                res.status(500)
                res.send('Id Does not exist')
            }

        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
    //

}
