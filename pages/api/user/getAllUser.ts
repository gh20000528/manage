import { NextApiRequest, NextApiResponse} from 'next';
import User from '../../models/user';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = await User.findAll();

    const AllUser = users.map(user => user.dataValues);
    
    res.status(200).json(AllUser) 
}

