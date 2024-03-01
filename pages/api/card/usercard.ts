import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import Card from '../../models/card';


interface Info {
    id: number,
    name: string,
    email: string,
}



export default async function UserCard(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { token } = req.body

        const userInfo = jwt.verify(token, 'secretkey') as Info;
        
        const userCard = await Card.findAll({ where: {userId: userInfo.id } })
        const cardDataValues = userCard.map(card => card.dataValues);
        
        return res.status(200).json(cardDataValues)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}