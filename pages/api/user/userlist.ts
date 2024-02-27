import { NextApiRequest, NextApiResponse} from 'next';
import User from '../../models/user';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.body
    try {
        const user = await User.findByPk(userId);

        const userData = user?.dataValues

        
        
        res.status(200).json({ userData }) 
    } catch (error) {
        
    }
}

