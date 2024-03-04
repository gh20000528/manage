import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import Card from '../../models/card';

interface Info {
    id: number,
    name: string,
    email: string,
}

export default async function CardFinish(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { cardId } = req.body


        const card = await Card.findByPk(cardId, {
            attributes: ['finish']
        })
    
        if (!card) {
            res.status(404).json({ message: 'Card not found' });
            return;
        }
    
        const currentFinishStatus = card.dataValues.finish;
        const newFinishStatus = !currentFinishStatus;
    
        await Card.update({ finish: newFinishStatus }, { where: { id: cardId } });
    
        return res.status(200).json({ message: 'Finish status updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'finish api error'})
    }
}