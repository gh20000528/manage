import { NextApiRequest, NextApiResponse} from 'next';
import jwt from 'jsonwebtoken';
import User from '@/pages/models/user';

export default async function logout (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { token } = req.body
        
        const userInfo = jwt.verify(token, 'secretkey');
        
        const checkUser = await User.findByPk(userInfo.id)
        
        if (userInfo.name !== checkUser?.dataValues.name) {
            return res.status(404).json({ message: 'something error please check' })
        }
        res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`)
        return res.status(200).json({ message: `登出成功` });
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ message: 'logout error' })
    }
};