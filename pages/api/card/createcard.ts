import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../models/card';

export default async function CreateCard(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { title, intro, level, daybegin, deadline, userId } = req.body
        
        const newCard = await Card.create({
            title,
            intro,
            level,
            userId,
            daybegin,
            deadline
        })
        return res.status(201).json({card: newCard, message: "new card"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}