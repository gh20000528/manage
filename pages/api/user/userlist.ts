import { NextApiRequest, NextApiResponse} from 'next';
import jwt from 'jsonwebtoken';
import User from '../../models/user';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body
    try {
        const userInfo = jwt.verify(token, 'secretkey');
        
        const checkUser = await User.findByPk(userInfo.id)
        
        
        const userData = checkUser?.dataValues
        
        res.status(200).json({ userData }) 
    } catch (error) {
        
    }
}

