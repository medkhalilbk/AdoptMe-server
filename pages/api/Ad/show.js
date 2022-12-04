import connectMongo from '../../../utils/connectMongoDB';
import Ad from "../../../utils/adModel";

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
            console.log('CONNECTING TO MONGO');
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            console.log('LOADING USERS');
            const ads = await Ad.find();
            res.json({ ads });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
    //

}
