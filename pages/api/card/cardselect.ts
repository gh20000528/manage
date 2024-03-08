import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import Card from '../../models/card';


interface Info {
    id: number,
    name: string,
    email: string,
}



export default async function CardSelect(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { select, token } = req.body
        console.log(select);
        const userInfo = jwt.verify(token, 'secretkey') as Info;
        if (select === 'all') {
            const userCard = await Card.findAll({ where: {userId: userInfo.id } })
            const cardDataValues = userCard.map(card => card.dataValues);
            return res.status(200).json(cardDataValues)
        } else if (select === 'time'){
            const userCard = await Card.findAll({
                where: { userId: userInfo.id },
                order: [['createdAt', 'DESC']] 
              });
              const cardDataValues = userCard.map(card => card.dataValues);
              return res.status(200).json(cardDataValues);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}