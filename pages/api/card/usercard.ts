import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../models/card';


export default async function UserCard(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { userId } = req.body

        if (!userId) {
            return res.status(404).json({ message: 'User not found' })
        }
        const cards = await Card.findAll({ where: { userId }})

        return res.status(200).json({ cards })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}