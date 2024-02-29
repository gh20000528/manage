import { NextApiRequest, NextApiResponse} from 'next';
import checkUserInput from '../../../utils/yup';
import bcryptjs from 'bcryptjs';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../../models/user';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})



export default async function login (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, password } = req.body;
        await schema.validate({ email, password })
            .catch((err) => 
                res.status(404).json({ message: 'Input error please check your input' })
            )

        const loggedInUser = await User.findOne({ where: { email: email } });
        if (!loggedInUser) {
            throw new Error('Invalid credentials, user does not exist.');
        }
        
    
        const checkPassword = bcryptjs.compareSync(password, loggedInUser.dataValues.password);
        
        if (!checkPassword) {
            throw new Error('Invalid credentials, please check your email and password.');
        }

        const token = jwt.sign(
            { id: loggedInUser.dataValues.id, name: loggedInUser.dataValues.name, email: loggedInUser.dataValues.email },
            'secretkey',
            { expiresIn: '2h' }
        );
    
        const { password: userPassword, ...others } = loggedInUser.dataValues;
  
        res.status(200).json({ message:'user login', userToken: token });
    } catch (err) {
      return res.status(500).json({ message:`error message ${err}` });
    }    
};