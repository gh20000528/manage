import { NextApiRequest, NextApiResponse } from 'next';
import Card from '../../models/card';


export default async function UpdateCard(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id, title, intro, level, daybegin, deadline } = req.body;

        const existingCard = await Card.findByPk(id);

        if (!existingCard) {
            return res.status(404).json({ message: "Card not found" });
        }

        const [updatedRowsCount] = await Card.update(
            {
                title,
                intro,
                level,
                daybegin,
                deadline
            },
            {
                where: { id },
                returning: true,
            }
        );

        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: "Card not found" });
        }

        return res.status(200).json({ card: updatedRowsCount });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
}