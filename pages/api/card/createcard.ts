import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import Card from '../../models/card';


interface Info {
    id: number,
    name: string,
    email: string,
}

export default async function CreateCard(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { token, formData } = req.body

        console.log(req.body);
        
        
        const userInfo = jwt.verify(token, 'secretkey') as Info;

        console.log(userInfo.id);
        const userId = userInfo.id
        

        const newCard = await Card.create({
            title: formData.title,
            intro: formData.intro,
            userId
        })


        return res.status(200).json({message: "create card success"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}