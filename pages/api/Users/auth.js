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

            var md5 = require("md5");
            const email = req.body.email;
            const password = req.body.password;
            const hashedPass = md5(password);

            User.find({ email: email, password: hashedPass }).exec(function (err, users) {
                if (users.length) {
                    res.json({ id: users[0].id })
                    res.status(200)
                } else {
                    res.status(500)
                    res.json({ id: null })
                    // Email already exist
                }
            })
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }


}
