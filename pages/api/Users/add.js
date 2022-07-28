import connectMongo from '../../../utils/connectMongoDB';
import User from '../../../utils/userModel';

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
    if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
        return res.status(401).send("You are not autorized !");
    }
    else {
        try {
            console.log('CONNECTING TO MONGO');
            await connectMongo();
            console.log('CONNECTED TO MONGO');
            console.log('CREATING DOCUMENT');
            var md5 = require("md5");

            const final_user = req.body;
            const password = final_user.password;
            final_user.password = md5(req.body.password);
            const user = await User.create(req.body);
            console.log('CREATED DOCUMENT');
            res.json(final_user);
        } catch (error) {
            console.log(error);
            res.json(final_user);
        }
    }


}
