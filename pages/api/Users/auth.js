import connectMongo from '../../../utils/connectMongoDB';
import User from '../../../utils/userModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function check(req, res) {
    if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
        return res.status(401).send("You are not autorized !");
    }
    else {
        try {
            console.log('CONNECTING TO MONGO');
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            console.log('CREATING DOCUMENT');
            let email = req.query.email;
            let password = req.query.password;
            //  const user = await User.find({}); 
            res.send("email : " + email + " Password" + password)

        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }


}