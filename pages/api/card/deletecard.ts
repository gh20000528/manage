import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../models/card';


export default async function DeleteCard(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body
    try {
        const card = await Card.findByPk(id);

        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }

        await card.destroy();

        return res.status(200).json({ message: 'delete success'}); // 204表示成功但無內容
    } catch (error) {
        return res.status(500).json({ message: error || "Internal Server Error" });
    }
}